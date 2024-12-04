import React from 'react';

const Dropdown = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="" disabled>Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
