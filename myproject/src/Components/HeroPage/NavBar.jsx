import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import m from "../../assets/m.png";  
export const NavBar = () => {
  return (
    <div className="navbar">
      <img src={m} alt="Logo" style={{
        width: '50px',
        height: '50px',
      }}/>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
} 
