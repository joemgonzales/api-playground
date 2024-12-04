import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlayerInputBox.css';

function PlayerInputBox() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Base API URL
  const baseURL = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes';

  useEffect(() => {
    if (inputValue.length > 2) {
      fetchAllPages();  // Trigger data fetch
    }
  }, [inputValue]);

  // Function to fetch all pages
  const fetchAllPages = async () => {
    setLoading(true);
    let allPlayers = [];

    try {
      const totalPages = 6;  // Known number of pages
      const pageRequests = [];  // Array to store fetch promises
      
      for (let i = 1; i <= totalPages; i++) {
        pageRequests.push(axios.get(`${baseURL}?limit=1000&page=${i}&active=true`));
      }

      // Fetch all pages concurrently
      const responses = await Promise.all(pageRequests);
      
      // Extract player links from all responses
      const playerLinks = responses.flatMap(response => 
        response.data.items.map(item => item.$ref)
      );

      // Fetch details for each player concurrently
      const playerDetailRequests = playerLinks.map(link => axios.get(link));
      const playerDetails = await Promise.all(playerDetailRequests);

      // Map player data to suggestion format
      allPlayers = playerDetails.map(res => ({
        name: `${res.data.firstName} ${res.data.lastName}`
      }));

      setSuggestions(allPlayers);
    } catch (error) {
      console.error('Error fetching players:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="PlayerInputBox">
      <input
        type="text"
        placeholder="Search for players..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: '100%', padding: '8px', borderRadius: '4px' }}
      />
      {loading && <div>Loading...</div>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {suggestions
          .filter(player => player.name.toLowerCase().includes(inputValue.toLowerCase()))
          .map((player, index) => (
            <li key={index} style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
              {player.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PlayerInputBox;