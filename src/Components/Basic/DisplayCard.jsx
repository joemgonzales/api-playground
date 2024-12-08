import React from 'react';
import './DisplayCard.css';

const DisplayCard = ({ alternateColor, color, children }) => {
  return (
    <div 
      className="display-card" 
      style={{ background: `linear-gradient(to bottom right, ${color}, ${alternateColor})` }}>
      {children}
    </div>
  );
};

export default DisplayCard;
