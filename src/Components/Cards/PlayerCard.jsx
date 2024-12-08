import React, { useState } from "react";
import DisplayCard from "../Basic/DisplayCard";
import PlayerInfo from "./PlayerInfo";
import PlayerStats from "./PlayerStats";
import './PlayerCard.css';

function PlayerCard( { selectedTeam, selectedPlayer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <div className="player-card-container" onClick={handleFlip}>  
      <div className={`player-card ${isFlipped ? "flipped" : ""}`}>
        <div className="player-card-front">
          <DisplayCard alternateColor={selectedTeam.alternateColor} color={selectedTeam.color}>
          <PlayerInfo
              player={selectedPlayer}
              team={selectedTeam}
            />
          </DisplayCard>
        </div>
        <div className="player-card-back">
          <DisplayCard alternateColor={selectedTeam.alternateColor} color={selectedTeam.color}>
            <PlayerStats
              player={selectedPlayer}
              team={selectedTeam}
            />
          </DisplayCard>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
