import React from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`

`

const DateContainer = styled(FlexColumnContainer)`

`

const GamesContainer = styled(FlexRowContainer)`

`

const DateSection = props => (
  <Wrapper>
    <DateContainer>
      {props.date}
    </DateContainer>

    <GamesContainer>
      {console.log(`TESTING ${props.date}`, props.odds)}
    </GamesContainer>
  </Wrapper>
)

export default DateSection
