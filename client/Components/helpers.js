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

export const getMatchMonth = match => {
  return new Date(match.MatchTime).getMonth()
}

export const convertMonthNumToWord = monthNum => {
  switch(monthNum) {
    case 0:
      return 'Jan'
    case 1:
      return 'Feb'
    case 2:
      return 'Mar'
    case 3:
      return 'Apr'
    case 4:
      return 'May'
    case 5:
      return 'June'
    case 6:
      return 'July'
    case 7:
      return 'Aug'
    case 8:
      return 'Sep'
    case 9:
      return 'Oct'
    case 10:
      return 'Nov'
    case 11:
      return 'Dec'
  }
}

export const processDayMonthTime = match => {
  return `${getMatchDate(match)} ${convertMonthNumToWord(getMatchMonth(match))} ${processTime(match.MatchTime)}`
}

export const getDatesArray = odds => {
  const checked = []

  odds.forEach( match => {
    const date = getMatchDate(match)
    if(checked.indexOf(date) < 0) {
      checked.push(date)
    }
  })
  return checked.sort((a, b) => +a - +b)
}

export const filterOddsByDay = (odds, date) => {
  return odds.filter(match => {
    const matchDate = getMatchDate(match)
    return matchDate === date
  })
}

export const sortGamesByTime = games => {
  return games.sort((a, b) => {
    if(a.MatchTime < b.MatchTime) return -1
    if(a.MatchTime > b.MatchTime) return 1
  })
}

export const firstNumItems = (array, num) => {
  if(array.length) {
    const newArray = []
    for(let i = 0; i < num; i++) {
      newArray.push(array[i])
    }
    return newArray
  }
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
    case 'San Francisco 49ers':
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

const truncateNHLTeamName = string => {
  switch(string) {
    case 'Anaheim Ducks':
      return 'ANA'
    case 'Boston Bruins':
      return 'BOS'
    case 'Buffalo Sabres':
      return 'BUF'
    case 'Carolina Hurricanes':
      return 'CAR'
    case 'Columbus Blue Jackets':
      return 'CBJ'
    case 'Calgary Flames':
      return 'CGY'
    case 'Chicago Blackhawks':
      return 'CHI'
    case 'Colorado Avalanche':
      return 'COL'
    case 'Dallas Stars':
      return 'DAL'
    case 'Detroit Redwings':
      return 'DET'
    case 'Edmenton Oilers':
      return 'EDM'
    case 'Florida Panthers':
      return 'FLA'
    case 'Los Angeles Kings':
      return 'LA'
    case 'Minnesota Wild':
      return 'MIN'
    case 'Montreal Canadiens':
      return 'MTL'
    case 'Nashville Predators':
      return 'NSH'
    case 'New Jersey Devils':
      return 'NJD'
    case 'New York Islanders':
      return 'NYI'
    case 'New York Rangers':
      return 'NYR'
    case 'Ottawa Senators':
      return 'OTT'
    case 'Philadelphia Flyers':
      return 'PHI'
    case 'Phoenix Coyotes':
      return 'PHX'
    case 'Pittsburgh Penguins':
      return 'PIT'
    case 'San Jose Sharks':
      return 'SJ'
    case 'St. Louis Blues':
      return 'STL'
    case 'Tampa Bay Lightening':
      return 'TB'
    case 'Toronto Maple Leafs':
      return 'TOR'
    case 'Vancouver Canucks':
      return 'VAN'
    case 'Vegas Golden Knights':
      return 'VGK'
    case 'Washington Capitals':
      return 'WAS'
    case 'Winnepeg Jets':
      return 'WPG'
  }
}

export const truncateTeamName = (sportString, team) => {
  if(sportString === 'mlb') return truncateMLBTeamName(team)
  else if(sportString === 'nfl') return truncateNFLTeamName(team)
  else if(sportString === 'nhl') return truncateNHLTeamName(team)
}

/***** Odds Processors *****/

export const addPlus = string => {
  let processedString = ''
  string[0] === '-' ? processedString = string : processedString = `+${string}`
  return processedString
}

/********** Live Scoring ***********/
export const findResult = (id, results) => {
  return results.filter(result => result.ID === id)[0]
}
