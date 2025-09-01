import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
export const NavBar = () => {
  return (
    <div className="navbar">
      <img src="logo.png" alt="Logo" />
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
} 
