import React from 'react';

import { Outlet } from 'react-router-dom';

import Homepage from './Components/Homepage';

function App() {
 
  return (
    <div className="App">
      <div>

      </div>
      <Outlet>
      <Homepage></Homepage>
      </Outlet>
    </div>
  );
}

export default App;