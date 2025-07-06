import ButtonComp from "./ButtonComp";
import ParentComp from "./ParentComp";
function App(){
  
  const submitbtn = {
    backgroundColor: "green",
    color: "white",
    fontSize: "2rem",
    padding: "10px 14px",
    borderRadius: "10px"
  };

  const clickbtn = {
    backgroundColor: "red",
    color: "white",
    fontSize: "2rem",
    padding: "10px 14px",
    borderRadius: "10px"
  };
  return (
    <>
      <div>
        <ButtonComp message={"hello there"} style={submitbtn} >Submit</ButtonComp>
        <ButtonComp message={"hello there"} style={clickbtn}>click</ButtonComp>
        <ParentComp/>
      </div>
    </>
  );
}

export default App;