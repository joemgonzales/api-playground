import React from "react";
import PlayerHeadshot from "../Components/PlayerHeadshot";
import './PlayerInfo.css';

function PlayerInfo( { headshotImageUrl, fullName, jerseyNumber, position, teamNickname, teamLogoUrl }) {
  return (
   <div className="player-info">
    <h2>{fullName}</h2>
    <h5>{position} - {jerseyNumber}</h5>
    <PlayerHeadshot fullName={fullName} imageUrl={headshotImageUrl}/>
    <img src={teamLogoUrl} style={{ width: '80px', height: 'auto' }} />
    <h4>{teamNickname}</h4>
   </div>
  )
};

export default PlayerInfo;
