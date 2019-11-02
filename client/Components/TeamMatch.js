import React from 'react'
import { TeamGameWrapper, TeamGameHeader, TeamGameDetails, DetailContainer, NameLogoContainer, TeamOddsContainer } from './TeamSportsStyledComponents'
import { truncateTeamName, processTime, addPlus } from './helpers'

const chooseBannerText = (score, final, MatchTime) => {
  if(score !== null && !final) return 'In Progress'
  else if(score !== null && final) return 'Final'
  else return processTime(MatchTime)
}

const chooseLine = (activeSport, match, home) => {
  if(home) {
    if(activeSport === 'mlb' || activeSport === 'nhl') {
      return addPlus(match.MoneyLineHome)
    }
    else if(activeSport === 'nfl' || activeSport === 'nba') {
      return addPlus(match.PointSpreadHome)
    }
  }
  else {
    if(activeSport === 'mlb' || activeSport === 'nhl') {
      return addPlus(match.MoneyLineAway)
    }
    else if(activeSport === 'nfl' || activeSport === 'nba') {
      return match.TotalNumber
    }
  }
}

const oddsOrScore = (activeSport, match, score, home) => {
  if(score !== null) return score
  else return chooseLine(activeSport, match, home)
}

const TeamMatch = props => (
  <TeamGameWrapper>
    <TeamGameHeader>
      {chooseBannerText(props.match.HomeScore, props.match.Final, props.match.MatchTime)}
    </TeamGameHeader>

    <TeamGameDetails>
      <DetailContainer>
        {truncateTeamName(props.activeSport, props.match.AwayTeam) &&
          <div>
            <NameLogoContainer>
              <img src={require(`../../public/assets/${props.activeSport}-logos/${truncateTeamName(props.activeSport, props.match.AwayTeam)}.png`)} />
              <div>{truncateTeamName(props.activeSport, props.match.AwayTeam)}</div>
            </NameLogoContainer>
          </div>
        }
        {truncateTeamName(props.activeSport, props.match.HomeTeam) &&
          <div>
            <NameLogoContainer>
              <img src={require(`../../public/assets/${props.activeSport}-logos/${truncateTeamName(props.activeSport, props.match.HomeTeam)}.png`)} />
              <div>{truncateTeamName(props.activeSport, props.match.HomeTeam)}</div>
            </NameLogoContainer>
          </div>
        }
      </DetailContainer>
      <TeamOddsContainer>
        <div>{oddsOrScore(props.activeSport, props.match, props.match.AwayScore, false)}</div>
        <div>{oddsOrScore(props.activeSport, props.match, props.match.HomeScore, true)}</div>
      </TeamOddsContainer>
    </TeamGameDetails>
  </TeamGameWrapper>
)

export default TeamMatch