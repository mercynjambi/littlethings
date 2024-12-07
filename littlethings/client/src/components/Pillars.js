import React, { useState } from 'react';
import './Pillars.css';
import About from './About'; // Adjust the path as per your project structure
import Footer from './Footer';
import MissionVision from './MissionVision'; // Adjust the path as per your project structure'

const pillarsData = [
  {
    id: 1,
    title: "Entrepreneurship and Youth Empowerment",
    description: `We equip young individuals with entrepreneurial skills through training programs like YouthVenture, 
                  focusing on ideation, branding, innovation, and real-world applications.`,
    icon: "💡",
  },
  {
    id: 2,
    title: "Financial Literacy",
    description: `We teach budgeting, saving, and financial planning to empower individuals with sustainable financial skills 
                  and informed decision-making.`,
    icon: "📊",
  },
  {
    id: 3,
    title: "Charity and Community Work",
    description: `We uplift vulnerable communities by providing essential supplies, emotional support, and mentorship 
                  programs for widows, orphans, and youth.`,
    icon: "🤝",
  },
  
];

function PillarsPage() {
  const [visiblePillars, setVisiblePillars] = useState(3);
  const [isViewAll, setIsViewAll] = useState(false);

  const togglePillars = () => {
    if (isViewAll) {
      setVisiblePillars(3); // Show limited pillars
    } else {
      setVisiblePillars(pillarsData.length); // Show all pillars
    }
    setIsViewAll(!isViewAll); // Toggle state
  };

  return (
    <div className="pillars-page">
      <h2 className="pillars-heading">Our Pillars</h2>
      <div className="pillars-container">
        {pillarsData.slice(0, visiblePillars).map((pillar) => (
          <div className="pillar-card" key={pillar.id}>
            <div className="pillar-icon">{pillar.icon}</div>
            <h3 className="pillar-title">{pillar.title}</h3>
            <p className="pillar-description">{pillar.description}</p>
          </div>
        ))}
      </div>
      {/* <button className="view-all-button" onClick={togglePillars}>
        {isViewAll ? 'Show Less' : 'View All Pillars'}
      </button> */}

      {/* About Section */}
      <About />
      <MissionVision/>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default PillarsPage;
