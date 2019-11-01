import React from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  @media(max-width: 700px) {
    font-size: 12px;
  }
  margin: 5px 0 30px 0;
  width: 98vw;
  height: 5.5vh;
  font-size: 15px;
  font-weight: bold;
  justify-content: space-between;
  background-color: #FFF;
`

const ScheduleContainer = styled(FlexRowContainer)`
  min-width: 40vw;
  justify-content: space-between;
`

const LinesContainer = styled(FlexRowContainer)`
  min-width: 56vw;
  justify-content: space-evenly;
`

const OddContainer = styled(FlexColumnContainer)`
  width: 15vw;
`

const Spread = styled(OddContainer)`
  @media(max-width: 760px) {
    margin-left: 8px
  }
  @media(max-width: 600px) {
    margin-left: 5px;
  }
  @media(max-width: 450px) {
    margin-left: 0;
  }
`

const Total = styled(OddContainer)`
  @media(max-width: 760px) {
    margin-left: 8px;
  }
  @media(max-width: 600px) {
    margin-left: 5px;
  }
  @media(max-width: 450px) {
    margin-left: 2px;
  }
`

const Schedule = styled(OddContainer)`
  align-items: flex-start
  padding-left: 2vw;
`

const MoneyLine = styled(OddContainer)`
  @media(max-width: 760px) {
    margin-left: 3px;
  }
  @media(max-width: 600px) {
    margin-right: 0;
    margin-left: 0;
  }
  @media(max-width: 450px) {
    margin-right: 3px;
  }
`

const OddsTableHeader = props => (
  <Wrapper>
    <ScheduleContainer>
      <Schedule>Schedule</Schedule>
      <OddContainer>Score</OddContainer>
    </ScheduleContainer>
    <LinesContainer>
      <MoneyLine>Line</MoneyLine>
      <Spread>Spread</Spread>
      <Total>Total</Total>
    </LinesContainer>
  </Wrapper>
)

export default OddsTableHeader
