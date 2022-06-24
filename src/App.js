import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar'
import FootNav from './Components/FootNav';
import InfoPanel from './Components/InfoPanel';

function App() {
  const screenConfig = useState(0)
  return (
    <div>
      <NavBar />
      < InfoPanel currentScreen={screenConfig[0]} />
      <FootNav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
