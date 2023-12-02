import React, { useState } from 'react';
import Login from './Login';
import RegistrationForm from './RegistrationForm';
import {  Outlet } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <div>
    <Login/>
   

        
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;