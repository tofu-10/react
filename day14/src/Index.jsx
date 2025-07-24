import { useRef, useEffect, useState } from "react";

export default function Index() {
  const [text, setText] = useState("");
  //   const [count, setCount] = useState(0);
  const count = useRef(null);
  const inputRef = useRef(null);
  const previousText = useRef("");
  const [visible, setVisible] = useState(false);

  function handlefocus() {
    console.log(inputRef);
    inputRef.current.focus();
  }
  function handleunfocus() {
    console.log(inputRef);
    inputRef.current.blur();
  }

  useEffect(() => {
    count.current = count.current + 1;
    previousText.current = text;
  }, [text]);


useEffect(()=>{
function handleClickOutside(){
    if (inputRef.current && !inputRef.current.contains(event.target)) {
        setVisible(false);
    }
}
window.addEventListener("mousedown",handleClickOutside);
return()=>{
    window.removeEventListener("mousedown",handleClickOutside);
}

},[])



  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div> You typed {text}</div>
        <button onClick={handlefocus}>focus</button>
        <button onClick={handleunfocus}>unfocus</button>
        <div>previous Text: {previousText.current}</div>
        <div> You rendered {count.current} times</div>

        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          Enter
        </button>
        {visible && (
          <input
            style={{
              position: "absolute",
              background: "#fff",
              border: "2px solid blue",
              borderRadius:"5px",
              color:"black"
            }}
            type="text"
            value={text}
            onChange={(e) =>setText(e.target.value)}
            placeholder="input"
          />
        )}
      </div>
    </>
  );
}
