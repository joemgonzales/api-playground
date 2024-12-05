import React from 'react';
import './Dropdown.css';

const Dropdown = ({ disabled, headerText, onChange, options, value, }) => {
  return (
    <div className='container'>
      <div className='header-text'>{headerText}</div>
      <select disabled={disabled} value={value} onChange={onChange}>
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
