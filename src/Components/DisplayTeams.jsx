import React, { useState, useEffect } from 'react';
import { teamUrls } from '../Constants/TeamUrls';

function DisplayTeams() {
  const [ teams, setTeams ] = useState([]);

  useEffect(() => {
    teamUrls.forEach((url) => {
      fetch(`${url}`).then((response) => response.json())
        .then((data) => {
          setTeams((prevTeams) => [
            ...prevTeams,
            data.displayName
          ])
        });
    })
  }, [])

  const items = teams.map((teamName, index) => {
    return (
      <li key={index} >
          { teamName }
      </li>
    );
  })

  return (
      <ul> { items } </ul>
  )
}

export default DisplayTeams;