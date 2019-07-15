/***** Handling UTC time strings ******/
const convertTime = string => {
  return new Date(string)
}

export const processTime = dateString => {
  const date = convertTime(dateString)
  let hours = date.getHours()
  //subtract by 12 to convert to 12 hour time
  if(hours > 12) hours = hours - 12

  //convert the UTC 12 hour clock to EST
    //If 4 or less, add 8 to roll back into the 12 hour clock. 0 hour(midnight) becomes 8PM instead of -4
    //if great than 4, subtract 4
  if(hours <= 4) hours = hours + 8
  else if(hours > 4) hours = hours - 4
  const minutes = date.getMinutes()
  return minutes < 10 ? `${hours}:0${minutes} PM EST` : `${hours}:${minutes} PM EST`
}

/********** Filtering Odds By Date ************/
export const getMatchDate = match => {
  return new Date(match.MatchTime).getDate()
}

export const getDatesArray = (odds) => {
  const checked = []

  odds.forEach( match => {
    const date = getMatchDate(match)
    if(checked.indexOf(date) < 0) {
      checked.push(date)
    }
  })
  return checked
}

export const filterOddsByDay = (odds, date) => {
  console.log(odds.filter(match => {
    const matchDate = getMatchDate(match)
    return matchDate === date
  }))
}

/********** Team Abbreviations ***********/

/***** MLB Teams******/
export const truncateMLBTeamName = string => {
  if(string === 'Miami Marlins') return 'MIA'
  else if(string === 'Chicago Cubs') return 'CHC'
  else if(string === 'St. Louis Cardinals') return 'STL'
  else if(string === 'New York Mets') return 'NYM'
  else if(string === 'Pittsburgh Pirates') return 'PIT'
  else if(string === 'Detroit Tigers') return 'DET'
  else if(string === 'Minnesota Twins') return 'MIN'
  else if(string === 'Baltimore Orioles') return 'BAL'
  else if(string === 'Houston Astros') return 'HOU'
  else if(string === 'Texas Rangers') return 'TEX'
  else if(string === 'New York Yankees') return 'NYY'
  else if(string === 'Toronto Blue Jays') return 'TOR'
  else if(string === 'Boston Red Sox') return 'BOS'
  else if(string === 'Tampa Bay Rays') return 'TB'
  else if(string === 'Los Angeles Angels') return 'LAA'
  else if(string === 'Oakland Athletics') return 'OAK'
  else if(string === 'Milwaukee Brewers') return 'MIL'
  else if(string === 'San Diego Padres') return 'SD'
  else if(string === 'Philadelphia Phillies') return 'PHI'
  else if(string === 'Atlanta Braves') return 'ATL'
  else if(string === 'Washington Nationals') return 'WSH'
  else if(string === 'Cincinnati Reds') return 'CIN'
  else if(string === 'Chicago White Sox') return 'CWS'
  else if(string === 'Kansas City Royals') return 'KC'
  else if(string === 'San Francisco Giants') return 'SF'
  else if(string === 'Los Angeles Dodgers') return 'LAD'
  else if(string === 'Colorado Rockies') return 'COL'
  else if(string === 'Arizona Diamondbacks') return 'ARI'
  else if(string === 'Cleveland Indians') return 'CLE'
  else if(string === 'Seattle Mariners') return 'SEA'
}

/***** NFL Teams******/
export const truncateNFLTeamName = string => {
  switch(string) {
    case 'Arizona Cardinals':
      return 'ARI'
    case "Atlanta Falcons":
      return 'ATL'
    case 'Baltimore Ravens':
      return 'BAL'
    case 'Buffalo Bills':
      return 'BUF'
    case 'Carolina Panthers':
      return 'CAR'
    case 'Chicago Bears':
      return 'CHI'
    case 'Cincinnati Bengals':
      return 'CIN'
    case 'Cleveland Browns':
      return 'CLE'
    case 'Dallas Cowboys':
      return 'DAL'
    case 'Denver Broncos':
      return 'DEN'
    case 'Detroit Lions':
      return 'DET'
    case 'Green Bay Packers':
      return 'GB'
    case 'Houston Texans':
      return 'HOU'
    case 'Indianapolis Colts':
      return 'IND'
    case 'Jacksonville Jaguars':
      return 'JAX'
    case 'Kansas City Chiefs':
      return 'KC'
    case 'Los Angeles Chargers':
      return 'LAC'
    case 'Los Angeles Rams':
      return 'LAR'
    case 'Miami Dolphins':
      return 'MIA'
    case 'Minnesota Vikings':
      return 'MIN'
    case 'New England Patriots':
      return 'NE'
    case 'New Orleans Saints':
      return 'NO'
    case 'New York Giants':
      return 'NYG'
    case 'New York Jets':
      return 'NYJ'
    case 'Oakland Raiders':
      return 'OAK'
    case 'Philadelphia Eagles':
      return 'PHI'
    case 'Pittsburgh Steelers':
      return 'PIT'
    case 'San Fransisco 49ers':
      return 'SF'
    case 'Seattle Seahawks':
      return 'SEA'
    case 'Tampa Bay Buccaneers':
      return 'TB'
    case 'Tennessee Titans':
      return 'TEN'
    case 'Washington Redskins':
      return 'WAS'
  }
}

export const truncateTeamName = (sportString, team) => {
  if(sportString === 'mlb') return truncateMLBTeamName(team)
  else if(sportString === 'nfl') return truncateNFLTeamName(team)
}

/***** Odds Processors *****/

export const addPlus = string => {
  let processedString = ''
  string[0] === '-' ? processedString = string : processedString = `+${string}`
  return processedString
}