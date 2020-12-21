import React, { useState } from 'react';

import WeatherManager from './components/WeatherManager';

import './App.css';

function App() {
  return (
    <div className="app">
        <h2> Weather App </h2>
        <WeatherManager/> 
    </div>
  )
}

export default App;

