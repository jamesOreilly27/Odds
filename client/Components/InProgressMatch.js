import React from 'react'
import { TeamGameWrapper, TeamGameHeader, TeamGameDetails, DetailContainer, NameLogoContainer, TeamOddsContainer } from './TeamSportsStyledComponents'
import { truncateTeamName } from './helpers'

const InProgressMatch = props => (
  <TeamGameWrapper>
    <TeamGameHeader>
      In Progress
    </TeamGameHeader>

    <TeamGameDetails>
      <DetailContainer>
        {truncateTeamName(props.activeSport, props.match.HomeTeam) &&
          <div>
            <NameLogoContainer>
              <img src={require(`../../public/assets/${props.activeSport}-logos/${truncateTeamName(props.activeSport, props.match.HomeTeam)}.png`)} />
              <div>{truncateTeamName(props.activeSport, props.match.HomeTeam)}</div>
            </NameLogoContainer>
          </div>
        }
        {truncateTeamName(props.activeSport, props.match.AwayTeam) &&
          <div>
            <NameLogoContainer>
              <img src={require(`../../public/assets/${props.activeSport}-logos/${truncateTeamName(props.activeSport, props.match.AwayTeam)}.png`)} />
              <div>{truncateTeamName(props.activeSport, props.match.AwayTeam)}</div>
            </NameLogoContainer>
          </div>
        }
      </DetailContainer>
      <TeamOddsContainer>
        <div>{props.match.HomeScore}</div>
        <div>{props.match.AwayScore}</div>
      </TeamOddsContainer>
    </TeamGameDetails>
  </TeamGameWrapper>
)

export default InProgressMatch
