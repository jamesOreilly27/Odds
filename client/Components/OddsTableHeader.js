import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  padding-top: 40px;
  margin-bottom: 30px;
  width: 100vw;
  height: 64px;
  font-size: 15px;
  justify-content: space-between;
  div {
    height: 100%;
    text-align: center;
  }
`

const ScheduleContainer = styled(FlexRowContainer)`
  min-width: 40vw;
  justify-content: space-between;
`

const LinesContainer = styled(FlexRowContainer)`
  min-width: 56vw;
  justify-content: space-evenly;
`

const OddContainer = styled.div`
  
`

const OddsTableHeader = props => (
  <Wrapper>
    <ScheduleContainer>
      <div>Schedule</div>
      <div>Score</div>
    </ScheduleContainer>
    <LinesContainer>
      <OddContainer>Line</OddContainer>
      <OddContainer>Spread</OddContainer>
      <OddContainer>Total</OddContainer>
    </LinesContainer>
  </Wrapper>
)

export default OddsTableHeader
