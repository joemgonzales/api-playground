import React, { useState } from 'react'
import PlayerDropdown from './PlayerDropdown';
import PlayerCard from '../Cards/PlayerCard';
import TeamDropdown from './TeamDropdown';
import './Basic/DefaultDisplayStyle.css'
import './PlayerSummary.css';

function PlayerInfo() {
  const [ selectedTeam, setSelectedTeam ] = useState(null);
  const [ selectedPlayer, setSelectedPlayer ] = useState(null);

  const handleTeamSelect = (teamObj) => {
    setSelectedTeam(teamObj);
    setSelectedPlayer(null);
  };

  const handlePlayerSelect = (playerObj) => {
    setSelectedPlayer(playerObj);
  };

  return (
    <div className="container">
      <h1 className="player-summary-title">Select a player to learn more</h1>
      <div style={ {display: 'flex', justifyContent: 'space-between'}}>
        <TeamDropdown onTeamSelect={handleTeamSelect}/>
        <PlayerDropdown
          disabled={!selectedTeam}
          onPlayerSelect={handlePlayerSelect}
          selectedTeam={selectedTeam} 
        />
      </div>
      { selectedPlayer && <PlayerCard selectedTeam={selectedTeam} selectedPlayer={selectedPlayer} /> }
    </div>
  )
}

export default PlayerInfo;
