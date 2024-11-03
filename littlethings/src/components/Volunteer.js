// VolunteerFormPage.jsx
import React, { useState } from 'react';
import './Volunteer.css';

const VolunteerFormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: ''
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
      <h1>Volunteer with Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Skills</label>
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />

        <label>Availability</label>
        <input type="text" name="availability" value={formData.availability} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VolunteerFormPage;
