import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h3 className="my-h3">DONATE TO CONTRIBUTE</h3>
      <h1 className="catchmsg">
        Let's Build <br /> A Better World <br /> Together
      </h1>

      <p className="hero-text">We are a dedicated non-profit organization committed to empowering underprivileged communities.Through small actions, we create a big impact.</p>

      <div className="herobuttons">
        <button className='herobutton'>Donate Fund</button>
        <button className='herobutton'>About Us</button>
      </div>
    </div>
  );
};

export default Hero;
