import React from "react";
import PlayerHeadshot from "../PlayerHeadshot";
import TitleAndSubtitle from "../Basic/TwoLineTextDisplay";
import './PlayerInfo.css';

function PlayerInfo( { player, team }) {
  return (
   <div className="player-info">
    <TitleAndSubtitle title={player.fullName} subtitle={`#${player.jerseyNumber} - ${player.position}`}/>
    <PlayerHeadshot fullName={player.fullName} imageUrl={player.headshotImageUrl}/>
    <img src={team.logoUrl} style={{ width: '80px', height: 'auto' }} />
   </div>
  )
};

export default PlayerInfo;
