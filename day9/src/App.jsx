import { useState } from "react";
import Demo from "./Movecursoranimation";
function App(){
  const[state,SetState]=useState({x:0,y:0})
  function handlestate(){  
    // state.x=state.x+1;
    // state.y=state.y+1;
    // SetState(state);
    SetState({
      x: state.x+1,
      y: state.y+1 
    })
    console.log(state);
  }
  return(
    <>
      <label htmlFor="">X: {state.x}</label>
      <br />
      <label htmlFor="">Y: {state.y}</label>
      <div className="" style={{padding: "1rem"}}>
        <button onClick={handlestate}>increament x</button>
      </div>
      <Demo/>
      </>
      
    )
  }
  export default App;