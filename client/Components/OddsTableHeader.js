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
  min-width: 56vw;
  justify-content: space-evenly;
`

const OddContainer = styled(FlexColumnContainer)`
  
`

const Schedule = styled(OddContainer)`
  padding-left: 4vw;
`

const OddsTableHeader = props => (
  <Wrapper>
    <ScheduleContainer>
      <Schedule>Schedule</Schedule>
      <OddContainer>Score</OddContainer>
    </ScheduleContainer>
    <LinesContainer>
      <OddContainer>Line</OddContainer>
      <OddContainer>Spread</OddContainer>
      <OddContainer>Total</OddContainer>
    </LinesContainer>
  </Wrapper>
)

export default OddsTableHeader
