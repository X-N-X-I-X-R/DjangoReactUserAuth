import React, { useState } from 'react';
import Login from './Login';
import RegistrationForm from './RegistrationForm';
import {  Outlet } from 'react-router-dom';

function App() {
  const [logged, setlogged] = useState(false);
  const [userEmail, setEmail] = useState('');
  const [showLogin, setShowLogin] = useState(true);

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleShowRegister = () => {
    setShowLogin(false);
  };

  return (
    <div className="App">
      <div>
        {logged ? ` ${userEmail}` : " you are not logged in , please login "}
        <button onClick={handleShowLogin}>Login</button>
        <button onClick={handleShowRegister}>Register</button>
        {showLogin ? (
          <Login logged={setlogged} setEmail={setEmail} />
        ) : (
          <RegistrationForm logged={setlogged} setEmail={setEmail} />
        )}
        
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;