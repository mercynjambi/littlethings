import React, { useState } from 'react';
import './Campaigns.css';
import { useNavigate } from 'react-router-dom';
import littlething8 from './assets/littlething8.jpg'

const campaigns = [
  {
    id: 1,
    title: 'BestStart',
    description: 'BestStart provides clean, nutritious breakfast solutions for low-income earners, promoting better health and well-being. By offering affordable, quality food, the program also creates employment opportunities in the hospitality industry and contributes to the creative economy, fostering community empowerment and economic growth.',
    expiryDate: '2024-12-31',
    image: littlething8,
  },
  {
    id: 2,
    title: 'Tutembee Mtaani',
    description: 'Tutembee Mtaani is a charitable initiative where children visit teen mothers and boys in need, sharing clothing, monetary contributions, and other donations. This program fosters compassion and community support by connecting young donors with disadvantaged individuals.',
    expiryDate: '2024-12-31',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcml0eSUyMGRvbmF0aW9ufGVufDB8fDB8fHww',
  },

  {
    id: 3,
    title: 'Hustle Ya Daily',
    description: 'This project addresses the financial challenges faced by teen and young mothers in Kenya by equipping them with entrepreneurial skills and resources to start small ice cream vending businesses. In partnership with Lyons Maid, the project will train 100 teen and young mothers, providing them with ice cream coolers, product stock, and business management skills',
    expiryDate: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1507427254987-7be33d0321d3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGNoaWxkfGVufDB8fDB8fHww',
  },
  {
    id: 4,
    title: "Toddlers' Corner",
    description: ' This is a program where children engage in fun games and friendly competitions, with their parents actively involved. This initiative aims to help kids uncover their talents early and provides a foundation for nurturing their abilities from a young age',
    expiryDate: '2024-10-30',
    image: 'https://media.istockphoto.com/id/1066589128/photo/toddler-friends-playing-hopscotch-outdoors.jpg?s=612x612&w=0&k=20&c=GoRZZFZeYTxdSu-_sFYdVSLoPwWI8PCcoe2_YYPJZME=',
  },
  {
    id: 5,
    title: 'Exchange Programs',
    description: 'My Little Thing is proposing an exchange program for international school students to participate in community development projects in Kenya. The program will provide practical experience in mentorship, charity work, and entrepreneurship, and students will launch fundraising campaigns to support their selected projects. This exchange aims to promote global understanding, cultural exchange, and long-term financial partnerships for sustainable project development',
    expiryDate: '2024-10-30',
    image: 'https://media.istockphoto.com/id/1300327276/photo/modern-students-from-different-countries-and-exchange-program.webp?a=1&b=1&s=612x612&w=0&k=20&c=CceocfBnQpEYgdELUe0SOGUBk9H94KsbXbxrvkXzu1c=',
  },
];

function CampaignPage() {
  const [visibleCampaigns, setVisibleCampaigns] = useState(3);
  const [isViewAll, setIsViewAll] = useState(false);
  const navigate = useNavigate();

  const toggleCampaigns = () => {
    if (isViewAll) {
      setVisibleCampaigns(3); // Show limited campaigns
    } else {
      setVisibleCampaigns(campaigns.length); // Show all campaigns
    }
    setIsViewAll(!isViewAll); // Toggle state
  };

  const handleDonateClick = () => {
    navigate('/donate'); // Navigate to the PaymentForm page
  };

  return (
    <div className="campaign-page">
      <div className="campaign-header">
        <h2 className="h2-donate">Other Campaigns</h2>
      </div>
      <div className="campaigns-container">
        {campaigns.slice(0, visibleCampaigns).map((campaign) => (
          <div className="campaign-card" key={campaign.id}>
            <img src={campaign.image} alt={campaign.title} />
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
            <button className="donate-button" onClick={handleDonateClick}>Donate Now</button>
          </div>
        ))}
      </div>
      <button className="view-all-button" onClick={toggleCampaigns}>
        {isViewAll ? 'Show Less' : 'View All Campaigns'}
      </button>
    </div>
  );
}

export default CampaignPage;
