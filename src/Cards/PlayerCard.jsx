import React from "react";
import DisplayCard from "../Components/Basic/DisplayCard";
import PlayerInfo from "./PlayerInfo";
import './PlayerCard.css';

function PlayerCard( { selectedTeam, selectedPlayer }) {
  return (
    <div>      
      <DisplayCard color={selectedTeam.color}>
      <PlayerInfo
          headshotImageUrl={selectedPlayer.headshotImageUrl}
          fullName={selectedPlayer.fullName}
          jerseyNumber={selectedPlayer.jerseyNumber}
          position={selectedPlayer.position}
          teamNickname={selectedTeam.nickname}
          teamLogoUrl={selectedTeam.logoUrl}
        />
      </DisplayCard>
    </div>
  );
};

export default PlayerCard;
