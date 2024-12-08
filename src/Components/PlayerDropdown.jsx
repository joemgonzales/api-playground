import React, { useState, useEffect } from 'react';
import Dropdown from './Basic/Dropdown';

// Using 2024-2025 Season, this can be changed if needed
const URL_NFL_TEAM_ATHLETES = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2024/teams/';
const URL_NHL_TEAM_ATHLETES = 'https://sports.core.api.espn.com/v2/sports/hockey/leagues/nhl/seasons/2025/teams/';
const URL_MLB_TEAM_ATHLETES = 'https://sports.core.api.espn.com/v2/sports/baseball/leagues/mlb/seasons/2024/teams/';
const URL_NBA_TEAM_ATHLETES = 'https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2025/teams/';

const PlayerDropdown = ({ disabled, onPlayerSelect, selectedLeague, selectedTeam }) => {
  const [ playerUrls, setPlayerUrls ] = useState([]);
  const [ players, setPlayers ] = useState([]);
  const [ selectedPlayer, setSelectedPlayer ] = useState('');

  useEffect(() => {
    // Reset player URLs and players when the team changes
    setPlayerUrls([]);
    setPlayers([]);

    var teamUrl

    switch(selectedLeague){
      case 'National Football League':
        teamUrl = URL_NFL_TEAM_ATHLETES;
        break;
      case 'National Hockey League':
        teamUrl = URL_NHL_TEAM_ATHLETES;
        break;
      case 'Major League Baseball':
        teamUrl = URL_MLB_TEAM_ATHLETES;
        break;
      case 'National Basketball Association':
        teamUrl = URL_NBA_TEAM_ATHLETES;
        break;
      default:
        setPlayerUrls([]);
        setPlayers([]);    
        return;
    }

    if (selectedTeam && selectedTeam.id) {
    fetch(`${teamUrl}${selectedTeam.id}/athletes?limit=200`).then((response) => response.json())
      .then((data) => {
        setPlayerUrls(data.items);
      });
    }
  }, [selectedTeam])

  useEffect(() => {
    if (playerUrls.length > 0) {
      playerUrls.forEach((url) => {
        fetch(`${url.$ref}`).then((response) => response.json())
        .then((data) => {
          if ((selectedLeague === 'National Football League' && !(data.status.type === 'practice-squad')) || data.status.type === 'active') {
            setPlayers((prevPlayers) => [
              ...prevPlayers,
              {
                age: data.age,
                birthday: formatDate(data.dateOfBirth),
                draftInfo: data.draft?.displayText,
                fullName: data.fullName,
                headshotImageUrl: data.headshot?.href,
                height: data.displayHeight,
                id: data.id,
                jerseyNumber: data.jersey,
                position: data.position?.name,
                weight: data.displayWeight,
              }
            ])
          }
        })
        .catch((error) => console.error(`Error fetching data for ${url.$ref}:`, error));
      });
    }
  }, [playerUrls])

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleSelectionChange = (e) => {
    const selectedPlayerName = e.target.value;
    setSelectedPlayer(selectedPlayerName);

    // Find the full player object and pass it to the parent
    const selectedPlayerObj = players.find((player) => player.fullName === selectedPlayerName);
    if (selectedPlayerObj) {
      onPlayerSelect(selectedPlayerObj); // Call the parent callback with the selected player
    }
  }

  return (
    <div>
        <Dropdown
          disabled={disabled}
          id='playerDropdown'
          headerText='Player: '
          onChange={handleSelectionChange}
          options={players.sort((a, b) => a.fullName.localeCompare(b.fullName)).map((player) => player.fullName)}
          value={selectedPlayer}
        />
    </div>
  )
};

export default PlayerDropdown;
