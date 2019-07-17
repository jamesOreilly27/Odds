import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { WidgetTeamsWrapper, WidgetTeamDetails, WidgetGameDate } from './WidgetTeamComponents'
import { processTime, truncateTeamName, addPlus } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  justify-content: flex-start;
  height: 25%;
`

const WidgetTeamMatch = ({ activeSport, match }) => (
  <Wrapper>
    <WidgetTeamsWrapper>
      <WidgetTeamDetails>
        <img src={require(`../../public/assets/${activeSport}-logos/${truncateTeamName(activeSport, match.HomeTeam)}.png`)} />
      </WidgetTeamDetails>
      <WidgetTeamDetails>
        Hello World
      </WidgetTeamDetails>
      <WidgetGameDate>
        Hello World
      </WidgetGameDate>
    </WidgetTeamsWrapper>
  </Wrapper>
)

export default WidgetTeamMatch
