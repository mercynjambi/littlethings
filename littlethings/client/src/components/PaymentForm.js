import React from 'react'; 
import './PaymentForm.css'; 

const DonatePage = () => {
  return (
    <div className="donate-container">
      <h1>Want to be part of this amazing project?</h1>
      <p>Donate! Make your donation through this account number:</p>
      <p className="account-number">123456789</p>
      <p>Paybill number:</p>
      <p className="paybill-number">987654</p>
      <p className="thank-you">Thank you for changing someone's life!</p>
    </div>
  );
};

export default DonatePage;
