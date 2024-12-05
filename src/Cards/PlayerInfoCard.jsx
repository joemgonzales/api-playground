import React, { useState, useEffect } from "react";
import TeamDropdown from "../Components/TeamDropdown";
import PlayerDropdown from "../Components/PlayerDropdown";
import PlayerHeadshot from "../Components/PlayerHeadshot";
import './PlayerInfoCard.css';

function PlayerInfoCard() {
  const [ selectedTeam, setSelectedTeam ] = useState(null);
  const [ selectedPlayer, setSelectedPlayer ] = useState(null);

  const handleTeamSelect = (teamObj) => {
    setSelectedTeam(teamObj);
  }

  const handlePlayerSelect = (playerObj) => {
    setSelectedPlayer(playerObj);
  }

  return (
    <div className="player-info-card">
      <h1 className="title">Player Info</h1>
      <div className="dropdowns">
        <TeamDropdown onTeamSelect={handleTeamSelect}/>
        {selectedTeam && 
          <PlayerDropdown onPlayerSelect={handlePlayerSelect} selectedTeam={selectedTeam} />
        }
      </div>
      {selectedPlayer &&
        <PlayerHeadshot fullName={selectedPlayer.fullName} imageUrl={selectedPlayer.headshotImageUrl}/>
      }
      {selectedPlayer &&
        <h2 className="description">#{selectedPlayer.jerseyNumber}, {selectedPlayer.position}</h2>
      }
    </div>
  )
}

export default PlayerInfoCard;