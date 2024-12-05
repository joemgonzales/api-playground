import React, { useState, useEffect } from "react";
import PlayerInfoCard from "./Cards/PlayerInfoCard";
import './App.css';

function App(){
  return (
    <div className="main-container">
      <h2>API Playground</h2>
      <PlayerInfoCard />
    </div>
  )
}

export default App;
