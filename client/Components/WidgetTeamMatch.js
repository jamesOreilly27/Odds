import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { WidgetMatchOdds, TotalsContainer } from '../Components'
import { WidgetTeamsWrapper, WidgetTeamDetails, WidgetGameDate, ROT } from './WidgetTeamComponents'
import { processTime, truncateTeamName, addPlus, processDayMonthTime } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  justify-content: space-between;
  height: 95px;
  border: 3px solid #EDEDF2;
  width: 100vw;
  background-color: #FFF;
`
const LogoSwitchWrapper = styled(FlexRowContainer)`
  font-weight: bold;
`

const Score = styled(FlexRowContainer)`
  font-weight: bold;
`

const OddsContainer = styled(FlexRowContainer)`
  justify-content: space-evenly;
  border-radius: 10px;
  min-width: 50vw;
  height: 100%;

  background-color: ${({ homeScore }) => {
    if(homeScore !== null) return '#59756F'
    else return 'none'
  }};

  color: ${({ homeScore }) => {
    if(homeScore !== null) return '#F8F8FF'
    else return '#0A0A0A'
  }};
`

const WidgetTeamMatch = ({ activeSport, match }) => (
  <Wrapper>
    <WidgetTeamsWrapper>
      <WidgetGameDate>
        {match.HomeScore === null ?
          processDayMonthTime(match)
          :
          <div>In Progress</div>
        }
      </WidgetGameDate>
      <WidgetTeamDetails>
        {truncateTeamName(activeSport, match.AwayTeam) && 
          <LogoSwitchWrapper>
            <img src={require(`../../public/assets/${activeSport}-logos/${truncateTeamName(activeSport, match.AwayTeam)}.png`)} />
            <div>{truncateTeamName(activeSport, match.AwayTeam)}</div>
          </LogoSwitchWrapper>
        }
        <Score> {match.AwayScore} </Score>
      </WidgetTeamDetails>
      <WidgetTeamDetails>
        {truncateTeamName(activeSport, match.HomeTeam) && 
          <LogoSwitchWrapper>
            <img src={require(`../../public/assets/${activeSport}-logos/${truncateTeamName(activeSport, match.HomeTeam)}.png`)} />
            <div>{truncateTeamName(activeSport, match.HomeTeam)}</div>
          </LogoSwitchWrapper>
        }
        <Score> {match.HomeScore} </Score>
      </WidgetTeamDetails>
    </WidgetTeamsWrapper>

    <OddsContainer homeScore={match.HomeScore}>
      <WidgetMatchOdds lines={{
        MoneyLineHome: match.MoneyLineHome,
        MoneyLineAway: match.MoneyLineAway,
        PointSpreadHome: match.PointSpreadHome,
        PointSpreadHomeLine: match.PointSpreadHomeLine,
        PointSpreadAway: match.PointSpreadAway,
        PointSpreadAwayLine: match.PointSpreadAwayLine
        }}
      />
      <TotalsContainer totalNum={match.TotalNumber} lines={{ OverLine: match.OverLine, UnderLine: match.UnderLine }}/>
    </OddsContainer>
  </Wrapper>
)

export default WidgetTeamMatch
