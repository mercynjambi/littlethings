import React from 'react';
import './Team.css';
import hulda1 from './assets/hulda1.jpg';
import njambi1 from './assets/njambi1.jpg';
import robi1 from './assets/robi1.jpg';
import robi2 from './assets/robi2.jpg';
import educator from './assets/educator.jpg';

const Team = () => {
  return (
    <div className="programs">
      <h2>Our Team</h2>
      <div className="program-container">
        <div className="program">
          <img src={robi2} alt="robi" />
          <div className="caption">
            <p>Founder</p>
          </div>
        </div>
        <div className="program">
          <img src={hulda1} alt="hulda" />
          <div className="caption">
            <p>Marketing & Business Advisor</p>
          </div>
        </div>
        <div className="program">
          <img src={educator} alt="educator" />
          <div className="caption">
            <p>Counsellor</p>
          </div>
        </div>
        <div className="program">
          <img src={njambi1} alt="njambi" />
          <div className="caption">
            <p>Technical Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
