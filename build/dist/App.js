import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import PlayerHeadshot from "./Components/PlayerHeadshot.js";
import DisplayTeams from "./Components/DisplayTeams.js";
function App() {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetch("https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes/4047646?lang=en&region=us").then((response) => response.json()).then((data) => {
      setImageUrl(data.headshot.href);
    }).catch((error) => console.error("Error fetching image URL:", error));
  }, []);
  return /* @__PURE__ */ React.createElement("article", null, /* @__PURE__ */ React.createElement("h2", null, "Test"), /* @__PURE__ */ React.createElement("div", null, imageUrl ? /* @__PURE__ */ React.createElement(PlayerHeadshot, {
    imageUrl
  }) : /* @__PURE__ */ React.createElement("p", null, "Loading image...")), /* @__PURE__ */ React.createElement(DisplayTeams, null));
}
export default App;
