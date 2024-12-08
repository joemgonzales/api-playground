import React from "react";
import './PlayerStats.css';

function PlayerStats( { player, team } ) {
  return(
    <div className="player-stats">
      <div className="player-stats-box">
        <div className="player-name">
          { player.fullName }
        </div>
        <div className="player-stats-display-medium-row">
          {team.nickname} - #{player.jerseyNumber} - {player.position}
        </div>
      </div>
      <div className="player-stats-display-small-row">
        Height: {player.height} Weight: {player.weight}
      </div>
      <div className="player-stats-display-small-row">
        Birthday: {player.birthday}
      </div>
      <div className="player-stats-display-small-row">
        Draft info - { player.draftInfo ? player.draftInfo : "Undrafted"}
      </div>
    </div>
  )
};

export default PlayerStats;
