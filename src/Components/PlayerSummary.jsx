import React, { useState } from 'react'
import LeagueDropdown from './LeagueDropdown';
import PlayerDropdown from './PlayerDropdown';
import PlayerCard from './Cards/PlayerCard';
import TeamDropdown from './TeamDropdown';
import './Basic/DefaultDisplayStyle.css'
import './PlayerSummary.css';

function PlayerInfo() {
  const [ selectedLeague, setSelectedLeague ] = useState(null);
  const [ selectedTeam, setSelectedTeam ] = useState(null);
  const [ selectedPlayer, setSelectedPlayer ] = useState(null);

  const handleLeagueSelect = (leagueName) => {
    setSelectedLeague(leagueName);
    setSelectedTeam(null);
    setSelectedPlayer(null);
  }

  const handleTeamSelect = (teamObj) => {
    setSelectedTeam(teamObj);
    setSelectedPlayer(null);
  };

  const handlePlayerSelect = (playerObj) => {
    setSelectedPlayer(playerObj);
  };

  return (
    <div className="default-container">
      <h1 className="player-summary-title">Select a player to learn more</h1>
      <div style={ {display: 'flex', justifyContent: 'space-evenly'}}>
        <LeagueDropdown onLeagueSelect={handleLeagueSelect}/>
        <TeamDropdown 
          disabled={!selectedLeague}
          onTeamSelect={handleTeamSelect}
          selectedLeague={selectedLeague}
        />
        <PlayerDropdown
          disabled={!selectedTeam}
          onPlayerSelect={handlePlayerSelect}
          selectedLeague={selectedLeague}
          selectedTeam={selectedTeam} 
        />
      </div>
      { selectedPlayer && <PlayerCard selectedTeam={selectedTeam} selectedPlayer={selectedPlayer} /> }
    </div>
  )
}

export default PlayerInfo;
