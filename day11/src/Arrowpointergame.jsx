import { useEffect, useState } from "react";

export function Arrow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [Fposition, setFPosition] = useState({ x: 280, y: 280 });
  const [direction, setDirection] = useState(null);
  const [Ate, setAte] = useState(false);
  const [point, SetPoint] = useState(0);
  const isOpposite = (current, next) => {
    return (
      (current === 5 && next === 2) ||
      (current === 2 && next === 5) ||
      (current === 1 && next === 3) ||
      (current === 3 && next === 1)
    );
  };



  useEffect(() => {
    if (Ate) {
      setFPosition({
        x: Math.floor(Math.random() * 28) * 10,
        y: Math.floor(Math.random() * 28) * 10,
      });
      
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

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let { x, y } = prev;
        switch (direction) {
          case 5:
            y = y <= 0 ? 280 : Math.max(0, y - 10);
            break;
          case 2:
            y = y >= 290 ? 0 : Math.min(290, y + 10);
            break;
          case 1:
            x = x <= 0 ? 280 : Math.max(0, x - 10);
            break;
          case 3:
            x = x >= 290 ? 0 : Math.min(290, x + 10);
            break;
          default:
            break;
        }
        if (x === Fposition.x && y === Fposition.y) {
          setAte(true);
          SetPoint(point + 1);
        }
        return { x, y };
      });
    }, 100);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <>
      <div
        style={{
          position: "relative",
          height: "300px",
          width: "300px",
          border: "2px solid white",
          marginLeft: "50%",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: Fposition.x,
            top: Fposition.y,
            width: 10,
            height: 10,
            background: "green",
          }}
        ></div>
        <div
          id="snake"
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            width: 10,
            height: 10,
            background: "red",
          }}
        ></div>
      </div>
      <h1>YOUR POINT: {point}</h1>
          <button onClick={()=>{
            setPosition({x:0,y:0});
            setFPosition({ x: 280, y: 280 });
            setDirection(null);
          }}>reset</button>

    </>
  );
}
