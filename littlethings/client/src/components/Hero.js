import React from 'react';
import { useNavigate } from 'react-router-dom';  // ✅ Import useNavigate
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();  // ✅ Initialize navigate function

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-text-h1">Small Acts, Big Impact</h1>
        <p className="hero-text-p">
          We aim to create tangible impact in the lives of individuals and communities we serve. By providing support, education, and opportunities, we strive to break the cycle of poverty and inequality, empowering individuals to build futures for themselves.
        </p>
        <button className="btn" onClick={() => navigate('/pillars')}>Explore More</button> 
      </div>
    </div>
  );
};

export default Hero;
