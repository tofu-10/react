import React from "react";
import { Button } from "../SharedComponents/Button";
import "./HeroSection.css";
import Copilot_20250831_223416 from "../../assets/Copilot_20250831_223416.png";
export const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-flex">
        <h1 className="AnimatedMoodify">Moodify </h1>
        <img
          src={Copilot_20250831_223416}
          alt="logo"
          style={{ width: "50px", height: "50px",marginTop:'17px' }}
        />
      </div>
      <div>Not just music, Not just quotes - your mood in motion</div>
      <Button content="Get Started" />
    </div>
  );
};
