import React, { useState } from 'react';
import axios from 'axios';
import './Registercss.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/register/', formData);
      console.log(response.data);  // Assuming your backend returns the access and refresh tokens
      // Handle success (redirect, display a success message, etc.)
    } catch (error) {
      console.error('Registration failed', error);
      // Handle error (display error message, etc.)
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <label className="label">
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <br />

        <label className="label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <br />

        <label className="label">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <br />

        <label className="label">
          First Name:
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <br />

        <label className="label">
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="input-field"
          />
        </label>
        <br />

        {/* Add more fields as needed */}
        
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
