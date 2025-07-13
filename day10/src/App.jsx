import { useEffect, useState } from "react";
  import { Clock } from "./LiveClock";
import { TitleUpdate } from "./Titleupdater";
//UseEffect

// useEffect(()=>{
//   console.log("Compunent mounted or updated")
// },[])

function App(){
  const [count, setCount]=useState(0);
  const [count1, setCount1]=useState(0);
  
  //guaranteed to run only once after the inital render
  useEffect(()=>{
  
  let id=setInterval(()=>{
    console.log("tick");

  },1000);
    //   console.log("Helloe");
    
  //   //cleanup function
  //   return()=>{
  //     console.log('cleanup');
  // }
  
// [count,count1]}) //dependency array (kun state change huda kheri run bhako bhai garne lai tyo array bhitra rakhne)
[]});


  return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={()=>setCount(count-1)}>decrement</button>
    
    <h1>{count1}</h1>
    <button onClick={()=>setCount1(count1+1)}>increment</button>
    <button onClick={()=>setCount1(count1-1)}>decrement</button>
    <Clock/>
    <TitleUpdate/>
    
    </>
  )
}
export default App;