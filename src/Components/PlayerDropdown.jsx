import React, { useState, useEffect } from 'react';
import Dropdown from './Basic/Dropdown';

// Using 2024 Season, this can be changed if needed
const URL_TEAM_ATHLETES = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2024/teams/';

const PlayerDropdown = ({ disabled, onPlayerSelect, selectedTeam }) => {
  const [ playerUrls, setPlayerUrls ] = useState([]);
  const [ players, setPlayers ] = useState([]);
  const [ selectedPlayer, setSelectedPlayer ] = useState('');

  useEffect(() => {
    // Reset player URLs and players when the team changes
    setPlayerUrls([]);
    setPlayers([]);

    if (selectedTeam && selectedTeam.id) {
    fetch(`${URL_TEAM_ATHLETES}${selectedTeam.id}/athletes?limit=200`).then((response) => response.json())
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
          setPlayers((prevPlayers) => [
            ...prevPlayers,
            {
              fullName: data.fullName,
              headshotImageUrl: data.headshot?.href,
              id: data.id,
              jerseyNumber: data.jersey,
              position: data.position?.name,
            }
          ])
        })
        .catch((error) => console.error(`Error fetching data for ${url.$ref}:`, error));
      });
    }
  }, [playerUrls])

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
