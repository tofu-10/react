import { useEffect } from "react";
import { useState } from "react";
import { use } from "react";

export function SnakeGame() {
  const min = 0,
    max = 290,
    unitSize = 10;

  const [snake, setSnake] = useState([
    { x: min, y: min }
   
  ]);

  const [Fposition, setFPosition] = useState({ x: 100, y: 100 });
  const [Ate, setAte] = useState(false);
  const [direction, setDirection] = useState(null);
  const [score, setScore] = useState(0);

  const isOpposite = (current, next) => {
    return (
      (current === 5 && next === 2) ||
      (current === 2 && next === 5) ||
      (current === 1 && next === 3) ||
      (current === 3 && next === 1)
    );
  };

  function FoodGenerator() {
    const x =
      Math.floor(Math.random() * ((max - min + unitSize) / unitSize)) *
      unitSize;
    const y =
      Math.floor(Math.random() * ((max - min + unitSize) / unitSize)) *
      unitSize;
    return { x, y };
  }

  useEffect(() => {
    if (Ate) {
      setFPosition(FoodGenerator());
    }
    setAte(false);
  }, [Ate]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      let nextDir = null;
      switch (event.key) {
        case "ArrowUp":
          nextDir = 5;
          break;
        case "ArrowDown":
          nextDir = 2;
          break;
        case "ArrowLeft":
          nextDir = 1;
          break;
        case "ArrowRight":
          nextDir = 3;
          break;
        default:
          break;
      }
      if (!isOpposite(direction, nextDir)) {
        setDirection(nextDir);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);


function reset(){
          setScore(0);
          setDirection(null);
          setFPosition({ x: 100, y: 100 });
          setSnake([{ x: 0, y: 0 }]);

        }

  useEffect(() => {
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        let newX = head.x;
        let newY = head.y;
        switch (direction) {
          case 5:
            newY = newY <= 0 ? 280 : Math.max(0, newY - unitSize);
            break;
          case 2:
            newY = newY >= 290 ? 0 : Math.min(290, newY + unitSize);
            break;
          case 1:
            newX = newX <= 0 ? 290 : Math.max(0, newX - unitSize);
            break;
          case 3:
            newX = newX >= 290 ? 0 : Math.min(290, newX + unitSize);
            break;
          default:
            break;
        }
        const newHead = { x: newX, y: newY };
        let newSnake;
        if (newX === Fposition.x && newY === Fposition.y) {
          setAte(true);
          setScore(score + 1);
          newSnake = [newHead,...prev];
        } else {
          newSnake = [newHead, ...prev.slice(0, -1)];
          if(newSnake.slice(1).some(segment=>segment.x===newHead.x&&segment.y===newHead.y))
            {
                alert("crashed");
                reset();

            }
        }
        return newSnake;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [direction, Fposition]);

  return (
    <>
      <div
        className="gameContainer"
        style={{
          position: "relative",
          height: "300px",
          width: "300px",
          border: "2px solid white",
          marginLeft: "50%",
        }}
      >
        {snake.map((item, idx) => (
          <div
            key={idx}
            className="SnakeHeadBox"
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
              width: `${unitSize}px`,
              height: `${unitSize}px`,
              background: "red",
              borderRadius: "10px",
              
            }}
          ></div>
        ))}
        <div
          className="foodBox"
          style={{
            position: "absolute",
            left: Fposition.x,
            top: Fposition.y,
            width: `${unitSize}px`,
            height: `${unitSize}px`,
            background: "green",
            borderRadius: "10px",
          }}
        ></div>
      </div>
      <h1>YOUR POINT: {score}</h1>
      <button
        onClick={() => {
          reset()
        }}
      >
        reset
      </button>
    </>
  );
}
