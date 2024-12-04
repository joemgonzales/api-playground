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
