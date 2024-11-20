import React from 'react';
import './Team.css';
import hulda1 from './assets/hulda1.jpg';
import njambi1 from './assets/njambi1.jpg';
import robi1 from './assets/robi1.jpg';
import robi2 from './assets/robi2.jpg';
import educator from './assets/educator.jpg';
import 'boxicons/css/boxicons.min.css';


const TeamSection = () => {
  return (
    <div className="team">
      <h2>Executive Team</h2>
      <hr />
      <p>
     Meet the dedicated individuals who drive MyLittleThing forward.Our team is made up
  <br />
   of passionate individuals with diverse backgrounds and expertise.
</p>

      
      <div className="members">
        
        <div className="team-mem">
          <img src={robi1} alt="founder" />
          <h4>Ramadhan Obiero</h4>
          <p>Founder</p>
        </div>
        
        <div className="team-mem">
          <img src={hulda1} alt="Mr. David" />
          <h4>Houlda Kitambaa</h4>
          <p>Marketing & Business Advisor</p>
        </div>
        
        <div className="team-mem">
          <img src={educator} alt="educator" />
          <h4>Catherine Nafula</h4>
          <p>Counselling & Psychologist</p>
        </div>
        
        <div className="team-mem">
          <img src={njambi1} alt="njambi" />
          <h4>Mercy Njambi</h4>
          <p>Technical Lead</p>
        </div>
        
      </div>
    </div>
  );
};

export default TeamSection;