import React, { useState } from 'react';
import axios from 'axios';
import './Registercss.css';
import Homepage from './Components/Homepage';

const RegistrationForm = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registered, setRegistered] = useState(false);
  const MY_SERVER = 'http://localhost:8000/register/';

  const doRegistration = () => {
    axios({
      method: 'post',
      url: MY_SERVER,
      data: {
        username: userName,
        password: password,
        email: email,
        first_name: firstName,
        last_name: lastName,
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log(response.data); // Response from the server
        const token = response.data.access; // Get the authentication token
        sessionStorage.setItem('token', token); // Store the token in sessionStorage
        setRegistered(true);
        props.logged(true);
        props.setUsername(userName);
      })
      .catch((error) => {
        console.error(error); // Handle any registration errors here
      });
  };

  return (
    <div className="registration-container">
      <div className="registration-box">
        {registered ? (
          <Homepage></Homepage>
        ) : (
          <div>
            <div className="label">User Name:</div>
            <input onChange={(evt) => setUserName(evt.target.value)} />
            <div className="label">Password:</div>
            <input type="password" onChange={(evt) => setPassword(evt.target.value)} />
            <div className="label">Email:</div>
            <input onChange={(evt) => setEmail(evt.target.value)} />
            <div className="label">First Name:</div>
            <input onChange={(evt) => setFirstName(evt.target.value)} />
            <div className="label">Last Name:</div>
            <input onChange={(evt) => setLastName(evt.target.value)} />
            <button onClick={() => doRegistration()}>Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
