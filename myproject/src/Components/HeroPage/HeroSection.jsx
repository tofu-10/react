import React, { useState } from "react";
import { Button } from "../SharedComponents/Button";
import "./HeroSection.css";
import m from "../../assets/m.png";
import Quote from "../ResultPage/Quote";
import { Selector } from "../MoodSelectionPage/Selector";
import MoodMusic from "../ResultPage/PlayList";


export const HeroSection = () => {
  const [showStartBtn, setStartBtn] = useState(false);
  const [isSelected, setisSelected] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);

  // Mood to background mapping
  // const moodBackgrounds = {
  //   "Happiness": "radial-gradient(ellipse at center, #FFD700, #FFA500, #FF8C00)",
  //   "faith": "radial-gradient(ellipse at center, #87CEEB, #B0E0E6, #ADD8E6)",
  //   "inspirational": "radial-gradient(ellipse at center, #FF4500, #DC143C, #B22222)",
  //   "motivational": "radial-gradient(ellipse at center, #708090, #2F4F4F, #1C1C1C)",
  //   "courage": "radial-gradient(ellipse at center, #32CD32, #228B22, #006400)",
  //   "love": "radial-gradient(ellipse at center, #FF69B4, #C71585, #8B008B)"
  // };

  const handleMoodSelect = ({mood, isTrue}) => {
    setisSelected(isTrue);
    setSelectedMood(mood);
  }
    // Apply mood-based background
  //   if (mood && moodBackgrounds[mood]) {
  //     document.body.style.background = moodBackgrounds[mood];
  //     document.body.style.backgroundSize = "400% 400%";
  //     document.body.style.animation = "nightSkyGradient 15s ease-in-out forwards";
  //   }
  // };

  // const resetToNightSky = () => {
  //   document.body.style.background = "radial-gradient(ellipse at center, #06061b, #090928, #111a34, #082242)";
  //   document.body.style.backgroundSize = "400% 400%";
  //   document.body.style.animation = "nightSkyGradient 15s ease-in-out forwards";
  // };

  return (
    <div className="hero-section">
      <div className="hero-flex">
        <h1 className="AnimatedMoodify">Moodify </h1>
        <img src={m} alt="logo" className="Moodify_logo" />
      </div>


      {!showStartBtn && (
        <div>Not just music, Not just quotes - your mood in motion</div>
      )}


      {!showStartBtn && (
        <div className="get-started-button">
          <Button content="Get Started" onClick={() => setStartBtn(true)} />
        </div>
      )}
      
      
      {!isSelected && showStartBtn && (
        <Selector handleSelection={({mood,isTrue}) => handleMoodSelect({mood,isTrue})} />
      )}
      
      
      {isSelected && <Quote mood={selectedMood} />}
      {isSelected && <MoodMusic mood={selectedMood} />}
    </div>
  );
}

