import { useState } from "react";

export default function Demo(){
    const[coordinate,setCoordinate]=useState({x:0, y:0});
    function handleCursor(e){
    setCoordinate({
        x:e.clientX,
    y:e.clientY 
    }
    )
    console.log(coordinate);
}

return (
    <>
        <div
            onPointerMove={handleCursor}
            style={
                {
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden"
            }
        }
        >
            <div
                style={{
                    position: "absolute",
                    left: coordinate.x ,
                    top: coordinate.y ,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "red"
                }}
            />
        </div>
    </>
)
}