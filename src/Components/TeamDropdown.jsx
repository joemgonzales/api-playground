import React, { useState, useEffect } from 'react';
import Dropdown from './Basic/Dropdown';
import { getLeagueTeamUrls } from '../Functions/getLeagueTeamUrls';

const TeamDropdown = ({ onTeamSelect, selectedLeague }) => {
  const [ selectedTeam, setSelectedTeam ] = useState('');
  const [ teams, setTeams ] = useState([]);
  
  useEffect(() => {
    setTeams([]);

    let teamUrls = getLeagueTeamUrls(selectedLeague);

    if(teamUrls){
      teamUrls.forEach((url) => {
        fetch(`${url}`).then((response) => response.json())
          .then((data) => {
            setTeams((prevTeams) => [
              ...prevTeams,
              {
                id: data.id,
                color: `#${data.color}`,
                alternateColor: `#${data.alternateColor}`,
                logoUrl: data.logos[0]?.href,
                name: data.displayName,
                nickname: data.name,
              }
            ])
          });
      })
    }
  }, [selectedLeague])

  const handleSelectionChange = (e) => {
    const selectedTeamName = e.target.value;
    setSelectedTeam(selectedTeamName);

    // Find the full team object and pass it to the parent
    const selectedTeamObj = teams.find((team) => team.name === selectedTeamName);
    if (selectedTeamObj) {
      onTeamSelect(selectedTeamObj); // Call the parent callback with the selected team
    }
  }

  return (
    <div>
        <Dropdown
          id='teamDropdown'
          headerText='Team: '
          onChange={handleSelectionChange}
          options={teams.sort((a, b) => a.name.localeCompare(b.name)).map((team) => team.name)}
          value={selectedTeam}
        />
    </div>
  )
};

export default TeamDropdown;
