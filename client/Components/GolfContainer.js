import React from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { Match } from '../Components'

const Wrapper = styled(FlexColumnContainer)`
  height: 100%;
  margin-left: 3vw;
`

const Container = styled(FlexRowContainer)`
  height: 100%;
  justify-content: flex-start;
`

const TournamentTitle = styled(FlexColumnContainer)`
  color: #F8F8FF;
  font-size: 10px;
  min-height: 30%;
`

const ParticipantsContainer = styled(FlexRowContainer)`
  min-height: 50%;
`

const GolfContainer = props => {
  let tournamentName;
  let participants;
  if(props.odds.length === 1) {
    tournamentName = props.odds[0]['League']['Name']
    participants = props.odds[0]['Odds']
  }
  return (
    <Wrapper>
      {props.odds.length === 1 &&
        <Container>
          <TournamentTitle>
            {tournamentName}
          </TournamentTitle>
          <ParticipantsContainer>
            {participants.map(participant => {
              return <Match key={participant} participant={participant} />
            })}
          </ParticipantsContainer>
        </Container>
      }
    </Wrapper>
  )
}

export default GolfContainer
