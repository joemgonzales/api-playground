import { mlbTeamUrls, nbaTeamUrls, nflTeamUrls, nhlTeamUrls } from '../Constants/TeamUrls';

export const getLeagueTeamUrls = (selectedLeague) => {
  let teamUrls = [];

  switch (selectedLeague) {
    case 'National Football League':
      teamUrls = nflTeamUrls;
      break;
    case 'National Hockey League':
      teamUrls = nhlTeamUrls;
      break;
    case 'Major League Baseball':
      teamUrls = mlbTeamUrls;
      break;
    case 'National Basketball Association':
      teamUrls = nbaTeamUrls;
      break;
    default:
      teamUrls = [];
      return;
  }

  return teamUrls;
};
