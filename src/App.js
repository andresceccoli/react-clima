import React from 'react';
import './App.css';
import ClimaBarra from './ClimaBarra';
import ClimaBarraApi from './ClimaBarraApi';

function App() {
  console.log('componente App');
  return (
    <div className="App">
      <ClimaBarra />
      <ClimaBarraApi />
    </div>
  );
}

export default App;
