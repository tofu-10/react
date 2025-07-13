export default App;
import { useState } from "react";
import { Counter } from "./Counterpage";
function App(){
const[count,setCount]=useState(0);
const increament = () =>{
  setCount(count+1);
}
const decreament = () =>{
  setCount(count-1);
}
const reset = () =>{
  setCount(0);
}

return (
  <>
    <h1>{count}</h1>
    <Counter func={increament} name={"Increase"}/>
    <Counter func={decreament} name={"decrease"} />
    <Counter func={reset} name={"reset"} />
  </>
);
}