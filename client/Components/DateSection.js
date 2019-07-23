import React from 'react'
import styled from 'styled-components'
import { Match } from '../Components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { convertMonthNumToWord } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  height: 100%;
`

const DateContainer = styled(FlexColumnContainer)`
  min-width: 80px;
  height: 97%;
  background-color: ##374044;
  color: #F8F8FF;
`

const GamesContainer = styled(FlexRowContainer)`
  height: 100%;
`

const DateSection = props => (
  <Wrapper>
    {console.log('TESTING', props.games)}
    <DateContainer>
      <div>{convertMonthNumToWord(new Date(props.odds[0]['MatchTime']).getMonth())}</div>
      <div>{props.date}</div>
    </DateContainer>

    <GamesContainer>
      {props.odds.map(match => <Match key={match.id} match={match} /> )}
    </GamesContainer>
  </Wrapper>
)

export default DateSection
