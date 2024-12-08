import React, { useState } from 'react';
import Dropdown from './Basic/Dropdown';

const leagueNames = [
  'National Football League',
  'National Hockey League',
  'Major League Baseball',
  'National Basketball Association'
];

function LeagueDropdown({ onLeagueSelect }){
  const [ selectedLeague, setSelectedLeague ] = useState('');

  const handleSelectionChange = (e) => {
    setSelectedLeague(e.target.value);
    onLeagueSelect(e.target.value);
  }

  return (
    <div>
      <Dropdown 
        id='leagueDropdown'
        headerText='League: '
        onChange={handleSelectionChange}
        options={leagueNames}
        value={selectedLeague}
      />
    </div>
  )
};

export default LeagueDropdown;
