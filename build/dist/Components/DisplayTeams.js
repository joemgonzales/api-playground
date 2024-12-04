import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import axios from "../../_snowpack/pkg/axios.js";
function DisplayTeams() {
  const [teamUrls, setTeamUrls] = useState([]);
  var teams = [];
  axios.get("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/teams?limit=32").then((response) => {
    setTeamUrls(response.data.items.map((url2) => url2.$ref));
  });
  for (var i = 0; i < teamUrls.length; i++) {
    var url = teamUrls[i];
    axios.get(`${url}`).then((response) => teams.push(response.data.displayName));
  }
  console.log(teams);
  const items = teamUrls.map((url2, index) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: index
    }, url2);
  });
  return /* @__PURE__ */ React.createElement("ul", null, " ", items, " ");
}
export default DisplayTeams;
