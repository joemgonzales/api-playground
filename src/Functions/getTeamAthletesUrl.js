// Using 2024-2025 Season, this can be changed if needed
const URL_NFL_TEAM_ATHLETES = 'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2024/teams/';
const URL_NHL_TEAM_ATHLETES = 'https://sports.core.api.espn.com/v2/sports/hockey/leagues/nhl/seasons/2025/teams/';
const URL_MLB_TEAM_ATHLETES = 'https://sports.core.api.espn.com/v2/sports/baseball/leagues/mlb/seasons/2024/teams/';
const URL_NBA_TEAM_ATHLETES = 'https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2025/teams/';

export const getTeamAthletesUrl = (selectedLeague) => {
  let teamAthletesUrl = '';

  switch(selectedLeague){
    case 'National Football League':
      teamAthletesUrl = URL_NFL_TEAM_ATHLETES;
      break;
    case 'National Hockey League':
      teamAthletesUrl = URL_NHL_TEAM_ATHLETES;
      break;
    case 'Major League Baseball':
      teamAthletesUrl = URL_MLB_TEAM_ATHLETES;
      break;
    case 'National Basketball Association':
      teamAthletesUrl = URL_NBA_TEAM_ATHLETES;
      break;
    default:   
      return;
  }

  return teamAthletesUrl;
}
