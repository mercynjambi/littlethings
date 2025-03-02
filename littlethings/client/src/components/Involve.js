import React from 'react';
import { FaUsers, FaDollarSign, FaHandshake } from 'react-icons/fa';
import './Involve.css';
import { useNavigate } from 'react-router-dom';



const Involvement = () => {
  const navigate = useNavigate();

  const goToVolunteerPage = () => {
    navigate('/volunteer');
  };


  const goToMembershipPage = () => {
    navigate('/membership');
  };

  const goToDonatePage = () => {
    navigate('/donate'); 
  };



  return (
    <div className="involvement-container">
       
      <h1 className="main-heading">Let's Make A Difference Today</h1>

      <div className="involvement-options">
        {/* Volunteer Section */}
        <div className="involvement-card">
          <FaUsers className="involvement-icon" />
          <h3 className='h3-involment'>Become A Volunteer</h3>
          <p> Help us make a difference by volunteering your time.</p>
          <button className="involvement-btn" onClick={goToVolunteerPage}>Join Us Now</button>
        </div>

        {/* Donate Section */}
        <div className="involvement-card">
          <FaDollarSign className="involvement-icon" />
          <h3  className='h3-involment'>Donate To Support</h3>
          <p>Support our cause by making a donation today.</p>
          <button className="involvement-btn" onClick={goToDonatePage}>Donate Now</button>
        </div>

        {/* Become a Member Section */}
        <div className="involvement-card">
          <FaHandshake className="involvement-icon" />
          <h3  className='h3-involment'>Become a Partner</h3>
          <p>Join us and be part of our growing community.</p>
          <button className="involvement-btn" onClick={goToMembershipPage}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Involvement;


