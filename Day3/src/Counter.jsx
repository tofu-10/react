import React, { useState } from "react";

export function Counterer() {
  const [count, setCount] = useState(0); // Initialize state
//usestate initialize value dina lai matra use hunxa   (count bhaneko state bhayo ani setcount bhakeo function)
//setcount le count ko value change garni bhayo (count=state change huni bitikai rerender hunxa) 
function gg() 
    {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);
    console.log(count);
    }
      
return (
    
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={gg}>Increment</button>
      
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>🔁Reset</button>
    </div>
  );
}
