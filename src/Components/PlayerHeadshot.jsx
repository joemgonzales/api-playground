import React from "react";

const PlayerHeadshot = ({ imageUrl }) => {
  return (
    <div>
      <img 
        src={imageUrl} 
        alt="Fetched content" 
        style={{ width: '300px', height: 'auto' }} // Adjust styling as needed
      />
    </div>
  );
};

export default PlayerHeadshot;
/* 

Scratchpad code

// Fetching image url
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

// Call from parent display component
      <div>
        {imageUrl ? (
          <PlayerHeadshot imageUrl={imageUrl} />
        ) : (
          <p>Loading image...</p>
        )}
      </div>

*/