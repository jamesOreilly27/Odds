import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
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
  min-width: 50vw;
  justify-content: space-evenly;
`

const OddContainer = styled(FlexColumnContainer)`
  width: 15vw;
`

const Schedule = styled(OddContainer)`
  align-items: flex-start
  padding-left: 2vw;
`

const MoneyLine = styled(OddContainer)`

`

const OddsTableHeader = props => (
  <Wrapper>
    <ScheduleContainer>
      <Schedule>Schedule</Schedule>
      <OddContainer>Score</OddContainer>
    </ScheduleContainer>
    <LinesContainer>
      <MoneyLine>Moneyline</MoneyLine>
      <OddContainer>Spread</OddContainer>
      <OddContainer>Total</OddContainer>
    </LinesContainer>
  </Wrapper>
)

export default OddsTableHeader
