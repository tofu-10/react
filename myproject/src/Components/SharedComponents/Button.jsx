import React from "react";

export const Button = ({ content, onClick }) => {
  return (
    <div>
      <button className="StartButton" onClick={onClick}>
        {content}
      </button>
    </div>
  );
};
