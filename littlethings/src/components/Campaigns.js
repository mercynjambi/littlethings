import React, { useState } from 'react';
import './Campaigns.css';

const campaigns = [
  {
    id: 1,
    title: 'Financial Help for the Poor',
    description: 'Join us in our mission to provide pure, clean and safe drinking water to communities in need around the world',
    raisedAmount: 15000,
    targetAmount: 30000,
    expiryDate: '2024-12-31',
    image: 'https://images.unsplash.com/photo-1513180549775-7de46ae74999?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Join us in our mission to provide pure, clean and safe drinking water to communities in need around the world',
    raisedAmount: 15000,
    targetAmount: 30000,
    expiryDate: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1507427254987-7be33d0321d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGNoaWxkfGVufDB8fDB8fHww',
  },
  {
    id: 3,
    title: 'Clean Water Initiative',
    description: 'Join us in our mission to provide pure, clean and safe drinking water to communities in need around the world',
    raisedAmount: 15000,
    targetAmount: 30000,
    expiryDate: '2024-10-30',
    image: 'https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWZyaWNhbiUyMGNoaWxkfGVufDB8fDB8fHww',
  },
];

function CampaignPage() {
  const [visibleCampaigns, setVisibleCampaigns] = useState(2);
  
  const viewAllCampaigns = () => setVisibleCampaigns(campaigns.length);

  return (
    <div className="campaign-page">
      <div className="campaign-header">
        <h2 className="h2-donate">Donate to Make <br /> an Impact</h2>
       
      </div>
      <div className="campaigns-container">
        {campaigns.slice(0, visibleCampaigns).map((campaign) => {
          const raisedPercentage = ((campaign.raisedAmount / campaign.targetAmount) * 100).toFixed(2); // Calculate raisedPercentage
          return (
            <div className="campaign-card" key={campaign.id}>
              <img src={campaign.image} alt={campaign.title} />
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              <div className="amounts">
                <p>{campaign.raisedAmount}</p>
                <p>{raisedPercentage}%</p> {/* Display calculated percentage */}
              </div>
              <div className="amounts2">
                <p>RAISED OF ${campaign.targetAmount}</p>
                <p>&{campaign.expiryDate}</p>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${raisedPercentage}%` }} // Use calculated percentage for progress bar width
                ></div>
              </div>
              <button className="donate-button">Donate Now</button>
            </div>
          );
        })}
      </div>
      <button className="view-all-button" onClick={viewAllCampaigns}>View All Campaigns</button>
    </div>
  );
}

export default CampaignPage;
