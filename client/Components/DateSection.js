import React from 'react'
import styled from 'styled-components'
import { Match } from '../Components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`

`

const DateContainer = styled(FlexColumnContainer)`
  min-width: 100px;
`

const GamesContainer = styled(FlexRowContainer)`

`

const DateSection = props => (
  <Wrapper>
    <DateContainer>
      {props.date}
    </DateContainer>

    <GamesContainer>
      {props.odds.map(match => <Match key={match.id} match={match} /> )}
    </GamesContainer>
  </Wrapper>
)

export default DateSection
