import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import Copilot_20250831_223416 from "../../assets/Copilot_20250831_223416.png";
export const NavBar = () => {
  return (
    <div className="navbar">
      <img src={Copilot_20250831_223416} alt="Logo" style={{
        width: '50px',
        height: '50px'
      }}/>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
} 
