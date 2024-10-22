import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">

              
        <div className="logo" >
            LittleThings          
        </div>

        
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about-us">About</a>
          <a href="#projects">Projects</a>
          <a href="#volunteer">Volunteer</a>
          <a href="#news">News</a>
          <a href="#contacts">Contacts</a>
        </div>

        
        <div className="donate-button">
          <button>Donate</button>
        </div>
      
    </nav>
  );
};

export default Navbar;
