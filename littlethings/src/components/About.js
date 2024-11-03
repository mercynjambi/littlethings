import React from 'react';
import './About.css';
// import play_icon from '../assets/play-icon.png';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          className="about-img"
          src="https://images.unsplash.com/photo-1528502668750-88ba58015b2f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGFwcHklMjBhZnJpY2FuJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Supporting those in need"
        />
        {/* <img src={play_icon} alt="" className="play-icon" /> */}
      </div>
      
      <div className="about-right">
        <h3>About Us</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        
        <p>
          My Little Thing is a community-based organization dedicated to empowering marginalized and disadvantaged young women in Kenya. 
          We strive to tackle financial barriers faced by young and teen mothers, providing them with practical skills and opportunities for sustainable income.
        </p>
        
        <p>
          Through a blend of entrepreneurship training, product support, and essential financial management skills, we equip young women with the tools needed to build income-generating ventures. 
          Our hands-on approach offers both full-time and part-time support, creating pathways for these women to achieve financial independence and a brighter future.
        </p>
        <p>
          Through a blend of entrepreneurship training, product support, and essential financial management skills, we equip young women with the tools needed to build income-generating ventures. 
          Our hands-on approach offers both full-time and part-time support, creating pathways for these women to achieve financial independence and a brighter future.
        </p>
        
        <a href="learn">Learn More</a>
      </div>
    </div>
  );
};

export default AboutPage;
