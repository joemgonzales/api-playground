/* Function returns an array of each team's name for further use*/
import { teamUrls } from "../Constants/TeamUrls";

export default function(){
  return teamUrls.map((url) => {
    fetch(`${url}`).then((response) => response.json())
      .then((data) => {
        return (
          data.displayName
        )
      });
  })
}
