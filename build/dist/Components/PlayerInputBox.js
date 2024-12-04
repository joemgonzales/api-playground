import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import axios from "../../_snowpack/pkg/axios.js";
import "./PlayerInputBox.css.proxy.js";
function PlayerInputBox() {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const baseURL = "https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes";
  useEffect(() => {
    if (inputValue.length > 2) {
      fetchAllPages();
    }
  }, [inputValue]);
  const fetchAllPages = async () => {
    setLoading(true);
    let allPlayers = [];
    try {
      const totalPages = 6;
      const pageRequests = [];
      for (let i = 1; i <= totalPages; i++) {
        pageRequests.push(axios.get(`${baseURL}?limit=1000&page=${i}&active=true`));
      }
      const responses = await Promise.all(pageRequests);
      const playerLinks = responses.flatMap((response) => response.data.items.map((item) => item.$ref));
      const playerDetailRequests = playerLinks.map((link) => axios.get(link));
      const playerDetails = await Promise.all(playerDetailRequests);
      allPlayers = playerDetails.map((res) => ({
        name: `${res.data.firstName} ${res.data.lastName}`
      }));
      setSuggestions(allPlayers);
    } catch (error) {
      console.error("Error fetching players:", error);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "PlayerInputBox"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    placeholder: "Search for players...",
    value: inputValue,
    onChange: (e) => setInputValue(e.target.value),
    style: {width: "100%", padding: "8px", borderRadius: "4px"}
  }), loading && /* @__PURE__ */ React.createElement("div", null, "Loading..."), /* @__PURE__ */ React.createElement("ul", {
    style: {listStyle: "none", padding: 0}
  }, suggestions.filter((player) => player.name.toLowerCase().includes(inputValue.toLowerCase())).map((player, index) => /* @__PURE__ */ React.createElement("li", {
    key: index,
    style: {padding: "8px", borderBottom: "1px solid #ccc"}
  }, player.name))));
}
export default PlayerInputBox;
