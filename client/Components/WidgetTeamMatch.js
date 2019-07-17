import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { WidgetTeamsWrapper, WidgetTeamDetails, WidgetGameDate, ROT } from './WidgetTeamComponents'
import { processTime, truncateTeamName, addPlus, processDayMonthTime } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  justify-content: flex-start;
  height: 50%;
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
  </Wrapper>
)

export default WidgetTeamMatch
