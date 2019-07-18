import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  padding-top: 64px;
  margin-bottom: 50px;
  width: 100%;
  height: 64px;
  font-size: 15px;
  justify-content: space-around;
  div {
    height: 100%;
    text-align: center;
  }
`

const ScheduleContainer = styled.div`
  flex-grow: .6
`

const OddContainer = styled.div`
  flex-grow: .3
`

const OddsTableHeader = props => (
  <Wrapper>
    <ScheduleContainer>Schedule</ScheduleContainer>
    <OddContainer>Line</OddContainer>
    <OddContainer>Spread</OddContainer>
    <OddContainer>Total</OddContainer>
  </Wrapper>
)

export default OddsTableHeader
