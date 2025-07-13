import { useEffect, useState } from "react"

export function TitleUpdate(){
    const [Title,setTitle]=useState("")
    useEffect(()=>{
        document.title= ` hello ${Title}`

    },[Title])
 
    return (
        <>
            <input type="text" 
            onChange={(e)=>setTitle(e.target.value)}/>
        </>

    )
}