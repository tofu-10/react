import React, { useState } from "react";
import "./Selector.css";
const moods = [
  {
    id: "Happiness",
    name: "Happy",
    emoji: "😊",
    color: "#FFD700, #FFA500", // Golden yellow to orange
    description: "Uplifting and joyful vibes",
  },
  {
    id: "faith",
    name: "Calm",
    emoji: "😌",
    color: "#87CEEB, #B0E0E6", // Sky blue to powder blue
    description: "Peaceful and relaxing",
  },
  {
    id: "inspirational",
    name: "Energetic",
    emoji: "⚡",
    color: "#FF4500, #DC143C", // Orange red to crimson
    description: "High energy and motivation",
  },
  {
    id: "motivational",
    name: "Melancholy",
    emoji: "🌧️",
    color: "#708090, #2F4F4F", // Slate gray to dark slate gray
    description: "Thoughtful and introspective",
  },
  {
    id: "courage",
    name: "Focused",
    emoji: "🎯",
    color: "#32CD32, #228B22", // Lime green to forest green
    description: "Concentration and productivity",
  },
  {
    id: "love",
    name: "Romantic",
    emoji: "💕",
    color: "#FF69B4, #C71585", // Hot pink to medium violet red
    description: "Love and affection",
  },
];

export const Selector = ({handleSelection}) => {

  const handleSelectionEvent = (mood)=>{
    handleSelection({mood, isTrue: true});
  }

  return (
    <>
      <h3>How's your mood dear?</h3>
      <div className="MoodOptions">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => {handleSelectionEvent(mood.id)}}
            className="MoodBtn glass"
           >
            <span className="">{mood.emoji}</span>
            <span className="">{mood.name}</span>
            <span className="">{mood.description}</span>
          </button>
        ))}
      </div>
    </>
  );
};
