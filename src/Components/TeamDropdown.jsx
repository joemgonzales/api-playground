import React, { useState, useEffect } from 'react';
import { teamUrls } from '../Constants/TeamUrls';
import Dropdown from './Basic/Dropdown';

const TeamDropdown = () => {
  const [ selectedOption, setSelectedOption ] = useState('');
  const [ teams, setTeams ] = useState([]);

  useEffect(() => {
    teamUrls.forEach((url) => {
      fetch(`${url}`).then((response) => response.json())
        .then((data) => {
          setTeams((prevTeams) => [
            ...prevTeams,
            data.displayName
          ])
        });
    })
  }, [])

  return (
    <div>
      <label htmlFor="dropdown">Choose a team: </label>
        <Dropdown
          options={teams.sort()}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
    </div>
  )
};

export default TeamDropdown;
