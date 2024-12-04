import React, { useState, useEffect } from "react";
import TeamDropdown from "./Components/TeamDropdown";

function App(){
  const [ selectedTeam, setSelectedTeam ] = useState(null);

  const handleTeamSelect = (teamObj) => {
    setSelectedTeam(teamObj);
  }

  return (
    <article>
      <h2>Test</h2>
        <TeamDropdown onTeamSelect={handleTeamSelect}/>
        {selectedTeam && 
          <h4>
            Team: {selectedTeam.name}, ID: {selectedTeam.id}
          </h4>
        }
    </article>
  )
}

export default App;
