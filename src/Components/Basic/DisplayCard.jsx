import React from 'react';
import './DisplayCard.css';

const DisplayCard = ({ color, children }) => {
  return (
    <div 
      className="display-card" 
      style={{ background: `linear-gradient(to bottom right, ${color}, white)` }}>
      {children}
    </div>
  );
};

export default DisplayCard;
