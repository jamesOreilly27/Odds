import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  padding-top: 30px;
  width: 100%;
  height: 10px;
  font-size: 15px;
  justify-content: space-around;
  div {
    background-color: red;
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
    <ScheduleContainer>schedule</ScheduleContainer>
    <OddContainer>Money Line</OddContainer>
    <OddContainer>Spread</OddContainer>
    <OddContainer>Total</OddContainer>
  </Wrapper>
)

export default OddsTableHeader
