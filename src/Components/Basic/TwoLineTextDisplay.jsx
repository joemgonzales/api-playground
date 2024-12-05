/* This is a component to display things like a title and subtitle*/
import React from 'react'
import './TwoLineTextDisplay.css';

const TitleAndSubtitle = ({ title, subtitle }) => {
  return (
    <div className="two-line-text-display">
      <div className="tltd-title">{title}</div>
      <div className="tltd-subtitle">{subtitle}</div>
    </div>
  )
}

export default TitleAndSubtitle;
