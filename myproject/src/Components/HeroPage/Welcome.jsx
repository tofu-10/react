import React, { useEffect } from 'react';
import "./Welcome.css"
export default function WelcomeAnimation({ onFinish }) {
useEffect(()=>{
    const timer= setTimeout(()=>{
        onFinish();
    },100)
    return ()=> clearTimeout(timer);

},[onFinish])
  return (
    <>
        <h1 className="welcome-text">Welcome to Moodify</h1>
    </>
  );
}
