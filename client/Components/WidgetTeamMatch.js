import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { WidgetMatchOdds, TotalsContainer } from '../Components'
import { WidgetTeamsWrapper, WidgetTeamDetails, WidgetGameDate, ROT } from './WidgetTeamComponents'
import { processTime, truncateTeamName, addPlus, processDayMonthTime } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  justify-content: flex-start;
  margin: 10px 0 20px 0;
  height: 50%;
  border-top: 1px solid #C0C0C0;
  width: 120%;
`
const LogoSwitchWrapper = styled(FlexRowContainer)`

`

const WidgetTeamMatch = ({ activeSport, match }) => (
  <Wrapper>
    <WidgetTeamsWrapper>
      <WidgetGameDate>
        {processDayMonthTime(match)}
      </WidgetGameDate>
      <WidgetTeamDetails>
        {truncateTeamName(activeSport, match.HomeTeam) && 
        <LogoSwitchWrapper>
          <ROT>{match.HomeROT}</ROT>
          <img src={require(`../../public/assets/${activeSport}-logos/${truncateTeamName(activeSport, match.HomeTeam)}.png`)} />
          <div>{truncateTeamName(activeSport, match.HomeTeam)}</div>
        </LogoSwitchWrapper>
        }
      </WidgetTeamDetails>
      <WidgetTeamDetails>
      {truncateTeamName(activeSport, match.AwayTeam) && 
        <LogoSwitchWrapper>
          <ROT>{match.AwayROT}</ROT>
          <img src={require(`../../public/assets/${activeSport}-logos/${truncateTeamName(activeSport, match.AwayTeam)}.png`)} />
          <div>{truncateTeamName(activeSport, match.AwayTeam)}</div>
        </LogoSwitchWrapper>
      }
      </WidgetTeamDetails>
    </WidgetTeamsWrapper>
    
    <WidgetMatchOdds lines={match.Odds} />
    <TotalsContainer lines={match.Odds}/>

  </Wrapper>
)

export default WidgetTeamMatch
