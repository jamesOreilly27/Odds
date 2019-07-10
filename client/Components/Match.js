import React from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexColumnContainer)`
  font-size: 14px;
  width: 12vw;
  height: 6vw;
  margin: 1vw;
`

const GolfNameContainer = styled(FlexColumnContainer)`

`

const GolfLineContainer = styled.div`

`

const splitName = string => string.split(' ')

const Match = props => (
  <Wrapper>
    {console.log(splitName(props.details.Participant.Name))}
    <GolfNameContainer>
      <div>{splitName(props.details.Participant.Name)[0]}</div>
      <div>{splitName(props.details.Participant.Name)[1]}</div>
    </GolfNameContainer>

    <GolfLineContainer>
      {`+${props.details.MoneyLineHome}`}
    </GolfLineContainer>
  </Wrapper>
)

export default Match
