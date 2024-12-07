import React from 'react'; 
import './PaymentForm.css'; 

const DonatePage = () => {
  return (
    <div className="donate-container">
      <h1>Want to be part of this amazing project?</h1>
      <p>Donate! Make your donation through this paybill number:</p>
      <p className="account-number">880100</p>
      <p>Account Number:</p>
      <p className="paybill-number">385120</p>
      <p className="thank-you">Thank you for changing someone's life!</p>
    </div>
  );
};

export default DonatePage;
