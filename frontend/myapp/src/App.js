import React from 'react';

import { Link, Outlet } from 'react-router-dom';

import Homepage from './Components/Homepage';

function App() {
 
  return (
    <div className="App">
      <div>
        <button>  <Link><Homepage></Homepage></Link></button>


      </div>
      <Outlet>
     
      </Outlet>
    </div>
  );
}

export default App;