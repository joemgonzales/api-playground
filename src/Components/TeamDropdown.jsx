import React, { useState, useEffect } from 'react';
import { teamUrls } from '../Constants/TeamUrls';
import Dropdown from './Basic/Dropdown';

const TeamDropdown = ({ onTeamSelect }) => {
  const [ selectedTeam, setSelectedTeam ] = useState('');
  const [ teams, setTeams ] = useState([]);

  useEffect(() => {
    teamUrls.forEach((url) => {
      fetch(`${url}`).then((response) => response.json())
        .then((data) => {
          setTeams((prevTeams) => [
            ...prevTeams,
            {
              id: data.id,
              name: data.displayName,
            }
          ])
        });
    })
  }, [])

  const handleSelectionChange = (e) => {
    const selectedTeamName = e.target.value;
    setSelectedTeam(selectedTeamName);

    // Find the full team object and pass it to the parent
    const selectedTeamObj = teams.find((team) => team.name === selectedTeamName);
    if (selectedTeamObj) {
      onTeamSelect(selectedTeamObj); // Call the parent callback with the selected team
    }
  };

  return (
    <div>
      <label htmlFor="teamDropdown">Choose a team: </label>
        <Dropdown
          className='teamDropdown'
          options={teams.sort().map((team) => team.name)}
          value={selectedTeam}
          onChange={handleSelectionChange}
        />
    </div>
  )
};

export default TeamDropdown;
