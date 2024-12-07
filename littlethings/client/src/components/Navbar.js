import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from './assets/logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import menu_icon from './assets/menu-icon.png';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      {/* <h1 className="logo">My Little Thing</h1> */}
      <img src={logo} alt="mylittlethings" className="logo"/>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to="/" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="/about" smooth={true} offset={0} duration={500}>About</Link></li>
        <li><Link to="/pillars" smooth={true} offset={0} duration={500}>Our Pillars</Link></li>
        <li><Link to="/campaigns" smooth={true} offset={0} duration={500}>Campaigns</Link></li>
        <li><Link to="/involve" smooth={true} offset={0} duration={500}>Volunteer</Link></li>
        <li><Link to="/contacts" smooth={true} offset={0} duration={500}>Contacts</Link></li>
        <li><Link to="/donate" className="nav-btn" smooth={true} offset={0} duration={500}>Donate</Link></li>
      </ul>
      
      <FontAwesomeIcon
          icon={faBars}
          className="menu-icon"
          onClick={toggleMenu}
      />

    </nav>
  );
};

export default Navbar;
