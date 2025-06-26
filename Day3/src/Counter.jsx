export function Counterer(){
    let counter=0;
    function increament(){
        counter++;
    }
    function decreament(){
        counter--;
    }
    function reset(){
        counter=0;
    }
    return<>
    <h1>Counter: {counter}  </h1>
    <button onClick={increament}>Increament</button>
    <button onClick={decreament}>Decreament</button>
    <button onClick={reset}>Reset</button>
    </>
}