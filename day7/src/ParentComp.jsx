import React from "react";
import ChildComp from "./ChildComp";
function ParentComp() {
 function handleClick(){
    alert("children clicked me!!");
 }
    return <ChildComp title={"Submittttttttor"} func={handleClick} />
}

export default ParentComp;
