import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Quote = ({mood}) => {

    const [quote, setQuote] = useState("");

    console.log(mood);
   useEffect(() => {
     axios
       .get(`https://api.quotable.io/random?toags=${mood}`)
       .then((response) => {
         setQuote(response.data.content);
       })
       .catch((error) => {
         console.error("error fetching posts:", error);
       });
   }, []);



  return (
    <div>
        <h1>Quote For You:</h1>
        <p>"{quote}"</p>
        
    </div>
  )
}

export default Quote