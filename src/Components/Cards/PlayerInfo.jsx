import React from "react";
import PlayerHeadshot from "../PlayerHeadshot";
import TitleAndSubtitle from "../Basic/TwoLineTextDisplay";
import './PlayerInfo.css';

function PlayerInfo( { headshotImageUrl, fullName, jerseyNumber, position, teamNickname, teamLogoUrl }) {
  return (
   <div className="player-info">
    <TitleAndSubtitle title={fullName} subtitle={`${position} - #${jerseyNumber}`}/>
    <PlayerHeadshot fullName={fullName} imageUrl={headshotImageUrl}/>
    <img src={teamLogoUrl} style={{ width: '80px', height: 'auto' }} />
   </div>
  )
};

export default PlayerInfo;
