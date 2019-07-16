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
  border-right: 1px solid #374044
  background-color: #FAF7F5;
`

const GamesContainer = styled(FlexRowContainer)`
  height: 100%;
`

const DateSection = props => (
  <Wrapper>
    <DateContainer>
      <div>{convertMonthNumToWord(new Date().getMonth())}</div>
      <div>{props.date}</div>
    </DateContainer>

    <GamesContainer>
      {props.odds.map(match => <Match key={match.id} match={match} /> )}
    </GamesContainer>
  </Wrapper>
)

export default DateSection
