import React from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexColumnContainer)`
  margin-left: 20px;
  height: 100%;
  padding-bottom: 10px;
`

const Container = styled(FlexColumnContainer)`
  height: 100%;
  color: #F8F8FF;
`

const GolfNameContainer = styled(FlexRowContainer)`

`

const GolfLineContainer = styled.div`

`

const splitName = string => {
  return string.split(' ')
}

const Participant = props => (
  <Wrapper>
    {props.participant &&
      <Container>
        {console.log('PARTICIPANT', props.participant)}
        <GolfNameContainer>
          <div>{splitName(props.participant.Participant.Name)[0]}</div>
          <div>{splitName(props.participant.Participant.Name)[1]}</div>
        </GolfNameContainer>

        <GolfLineContainer>
          {`+${props.participant.MoneyLineHome}`}
        </GolfLineContainer>
      </Container>
    }
  </Wrapper>
)

export default Participant
