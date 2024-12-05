import React, { useState, useEffect } from "react";
import PlayerSummary from "./Components/PlayerSummary";
import './App.css';

function App(){
  return (
    <div className="main-container">
      <h2>API Playground</h2>
      <PlayerSummary />
    </div>
  )
}

export default App;
