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
  const [result, setResult] = useState(""); // To display success/failure message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    // Prepare form data
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "7bd0884e-f23b-49f3-b6ca-636e6068b687");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("skills", formData.skills);
    formDataToSend.append("availability", formData.availability);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Submitted Successfully");
      setFormData({
        name: '',
        email: '',
        phone: '',
        skills: '',
        availability: ''
      }); // Reset the form
    } else {
      console.log("Error", data);
      setResult(data.message || "An error occurred.");
    }
  };

  return (
    <div className="form-container-vol">
      <h1>Volunteer with Us</h1>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Skills</label>
        <input
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />

        <label>Availability</label>
        <input
          type="text"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <span>{result}</span>
      </form>
    </div>
  );
};

export default VolunteerFormPage;
