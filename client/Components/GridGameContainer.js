import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { processDayMonthTime } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  @media(max-width: 960px) {
    flex: 0 0 49.5%
  }
  @media(max-width: 640px) {
    flex: 0 0 100%;
  }
  flex: 0 0 33%
  border: 3px solid #EDEDF2;
  height: 30vh;
`

const Container = styled(FlexColumnContainer)`
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 15px 20px;
`

const GameDate = styled(FlexRowContainer)`
  margin-bottom: 8px;
`

const TeamsContainer = styled(FlexRowContainer)`
  width: 90%;
  justify-content: space-between;
`

const Team = styled(FlexColumnContainer)`
  height: 25vh;
  border: 1px dotted red;
  width: 45%;
`

const TeamName = styled(FlexColumnContainer)`

`

const GridGameContainer = ({ activeSport, match }) => (
  <Wrapper>
    <Container>
      <GameDate>
        {match.HomeScore === null ? 
          processDayMonthTime(match)
          :
          <div>In Progress</div>
        }
      </GameDate>
      <TeamsContainer>
        <Team>{match.AwayTeam}</Team>
        <Team>{match.HomeTeam}</Team>
      </TeamsContainer>
    </Container>
  </Wrapper>
)

export default GridGameContainer
