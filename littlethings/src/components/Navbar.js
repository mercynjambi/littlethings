import React, {useEffect, useState} from "react";
import './Navbar.css';
import logo from './assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import menu_icon from './assets/menu-icon.png';

const Navbar = () => {
  const[sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
       window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  
  const[mobileMenu, setMobileMenu] =useState(false);
  const toggleMenu =() =>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }
 
  return (
    <nav className=" container ${sticky? 'dark-nav' : ''}">       
      
        <img src={logo} alt="Logo"  className="logo"/>
     
        <ul className={mobileMenu?'' :'hide-mobile-menu'}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about-us">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#volunteer">Volunteer</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li><button className="btn">Donate</button></li>
        </ul>
        <img src={menu_icon} alt="menu-icon" className="menu-icon" onClick={toggleMenu}/>
    
    </nav> 
  );
};

export default Navbar;
