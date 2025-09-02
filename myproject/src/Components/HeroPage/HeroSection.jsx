import React, { useState } from "react";
import { Button } from "../SharedComponents/Button";
import "./HeroSection.css";
import Copilot_20250831_223416 from "../../assets/Copilot_20250831_223416.png";
import { Selector } from "../MoodSelectionPage/Selector";
export const HeroSection = () => {
  const [showSelector, setShowSelector] = useState(false);

  return (
    <div className="hero-section glass">
      <div className="hero-flex">
      <h1 className="AnimatedMoodify">Moodify </h1>
        <img
          src={Copilot_20250831_223416}
          alt="logo"
          style={{ width: "50px", height: "50px", marginTop: "17px" }}
        />
      </div>
      {!showSelector && (
        <div>Not just music, Not just quotes - your mood in motion</div>
      )}
      {!showSelector && (
        <Button content="Get Started" onClick={() => setShowSelector(true)} />
      )}
      {showSelector && <Selector />}
    </div>
  );
};
