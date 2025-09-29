import React from "react";
import "./Button.css";
export const Button = ({ content, onClick }) => {
  return (
    <div>
      <button className="StartButton" onClick={onClick}>
        {content}
      </button>
    </div>
  );
};