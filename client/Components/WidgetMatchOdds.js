import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { TeamOdds, TeamOddsItem } from './WidgetOddsComponents'
import { addPlus } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 17px;
`

const WidgetMatchOdds = ({ lines }) => {
  const theLines = lines[0]
  return (
    <Wrapper>
      <TeamOdds>
        <TeamOddsItem>{addPlus(theLines.MoneyLineHome)}</TeamOddsItem>
        <TeamOddsItem>{addPlus(theLines.PointSpreadHome)}</TeamOddsItem>
      </TeamOdds>
      <TeamOdds>
        <TeamOddsItem>{addPlus(theLines.MoneyLineAway)}</TeamOddsItem>
        <TeamOddsItem>{addPlus(theLines.PointSpreadAway)}</TeamOddsItem>
      </TeamOdds>
    </Wrapper>
  )
}

export default WidgetMatchOdds
