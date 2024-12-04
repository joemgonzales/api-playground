import React, { useState, useEffect } from "react";
import PlayerHeadshot from "./Components/PlayerHeadshot";
import DisplayTeams from "./Components/DisplayTeams";

function App(){
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Replace with your actual API call
    fetch('https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes/4047646?lang=en&region=us')
      .then(response => response.json())  // Assuming the response is JSON
      .then(data => {
        //console.log(data);
        setImageUrl(data.headshot.href);  // Assuming the URL is in the 'url' field
      })
      .catch(error => console.error('Error fetching image URL:', error));
  }, []);

  return (
    <article>
      <h2>Test</h2>

        <DisplayTeams />
    </article>
  )
}

export default App;

/* 
      <div>
        {imageUrl ? (
          <PlayerHeadshot imageUrl={imageUrl} />
        ) : (
          <p>Loading image...</p>
        )}
      </div>

*/