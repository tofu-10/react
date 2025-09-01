import { useState } from "react";
import WelcomeAnimation from "./Components/HeroPage/Welcome";
import { HeroSection } from "./Components/HeroPage/HeroSection";
import { NavBar } from "./Components/HeroPage/NavBar";
function App() {
  const [showHero, setShowHero] = useState(false);

  return (
    <>
      <NavBar />
      
      {!showHero && <WelcomeAnimation onFinish={() => setShowHero(true)} />}
      {showHero && <HeroSection />}
    </>
  );
}

export default App;