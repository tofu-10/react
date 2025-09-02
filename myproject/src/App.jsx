import { useState } from "react";
import WelcomeAnimation from "./Components/HeroPage/Welcome";
import { NavBar } from "./Components/HeroPage/NavBar";
import { HeroSection } from "./Components/HeroPage/heroSection";
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