import React from 'react';
import { Target, Heart } from 'lucide-react';
import './MissionVision.css';

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="container">
        <h2 className="section-title">Our Purpose</h2>
        
        <div className="cards-container">
          {/* Mission Card */}
          <div className="card">
            <div className="card-content">
              <div className="icon-container mission-icon">
                <Target size={24} />
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
              Our mission is to reduce inequality and create opportunities for marginalized individuals through 
              empowerment, education, and sustainable development initiatives.
              </p>
            </div>
            <div className="card-footer mission-footer">
              <p className="mission-quote">"Making a difference, one life at a time"</p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="card">
            <div className="card-content">
              <div className="icon-container vision-icon">
                <Heart size={24} />
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                 We envision a world where every individual, regardless of their background, has the opportunity to 
                 thrive and reach their full potential.
              </p>
            </div>
            <div className="card-footer vision-footer">
              <p className="vision-quote">"Building a world of endless possibilities"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;