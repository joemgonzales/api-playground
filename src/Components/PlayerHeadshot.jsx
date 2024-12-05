import React from "react";

const PlayerHeadshot = ({ imageUrl, fullName }) => {
  return (
    <div>
      <img 
        src={imageUrl} 
        alt={fullName}
        style={{ width: '300px', height: 'auto' }} // Adjust styling as needed
      />
    </div>
  );
};

export default PlayerHeadshot;
