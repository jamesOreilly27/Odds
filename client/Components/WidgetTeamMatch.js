import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { WidgetMatchOdds, TotalsContainer } from '../Components'
import { WidgetTeamsWrapper, WidgetTeamDetails, WidgetGameDate, ROT } from './WidgetTeamComponents'
import { processTime, truncateTeamName, addPlus, processDayMonthTime } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  justify-content: flex-start;
  height: 50%;
  border-top: 1px solid #C0C0C0;
  width: 120%;
`

const WidgetTeamMatch = ({ activeSport, match }) => (
  <Wrapper>
    <WidgetTeamsWrapper>
      <WidgetGameDate>
        {processDayMonthTime(match)}
      </WidgetGameDate>
      <WidgetTeamDetails>
        <ROT>{match.HomeROT}</ROT>
        <img src={require(`../../public/assets/${activeSport}-logos/${truncateTeamName(activeSport, match.HomeTeam)}.png`)} />
        <div>{truncateTeamName(activeSport, match.HomeTeam)}</div>
      </WidgetTeamDetails>
      <WidgetTeamDetails>
        <ROT>{match.AwayROT}</ROT>
        <img src={require(`../../public/assets/${activeSport}-logos/${truncateTeamName(activeSport, match.AwayTeam)}.png`)} />
        <div>{truncateTeamName(activeSport, match.AwayTeam)}</div>
      </WidgetTeamDetails>
    </WidgetTeamsWrapper>
    
    <WidgetMatchOdds lines={match.Odds[0]} />
    <TotalsContainer lines={match.Odds[0]}/>

  </Wrapper>
)

export default WidgetTeamMatch
