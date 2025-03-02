// MemberFormPage.jsx
import React, { useState } from 'react';
import './Membership.css';

const MemberFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data via API or email here
    console.log('Form submitted', formData);
  };

  return (
    <div className="form-container">
      <h1 className='form-container-text'>Become a Member</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Membership Type</label>
        <select name="membershipType" value={formData.membershipType} onChange={handleChange} required>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>

        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default MemberFormPage;
