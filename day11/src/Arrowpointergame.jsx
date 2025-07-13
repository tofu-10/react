import { useEffect, useState } from "react";

export function Arrow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(0);
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          setDirection(5);
          break;

        case "ArrowDown":
          setDirection(2);
          break;

        case "ArrowLeft":
          setDirection(1);
          break;

        case "ArrowRight":
          setDirection(3);
          break;

        default:
          break;
      }
    });

    return () => window.removeEventListener("keydown", event);
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setPosition((prev) => {
        let { x, y } = prev;
        switch (direction) {
          case 5:
            y = Math.max(-5, y - 10);
              if (y <=-5) y = 180;
            console.log(y);
            break;
            
            case 2:
              y = Math.min(190, y + 10);
              if(y>=190)y=0;
            console.log(y);

            break;

          case 1:
            x = Math.max(-5, x - 10);
            console.log(x);
              if (x <= -5) x = 180;
              
              break;
              
              case 3:
                x = Math.min(190, x + 10);
                if (x >= 190) x = 0;
            console.log(x);

            break;

          default:
            break;
        }
        return { x, y };
      });
    }, 100);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div
      style={{
        position: "relative",
        height: "200px",
        width: "200px",
        border: "2px solid white",
        marginLeft: "50%",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: 20,
          height: 20,
          background: "red",
        }}
      ></div>
    </div>
  );
}
