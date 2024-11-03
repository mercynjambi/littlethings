import React from "react";
import './Navbar.css';
import logo from './assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar container">       
      
        <img src={logo} alt="Logo"  className="logo"/>
     
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li><button className="btn">Donate</button></li>
        </ul>
    
    </nav>
  );
};

export default Navbar;
