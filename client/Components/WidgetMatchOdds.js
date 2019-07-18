import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { TeamOdds, TeamOddsItem } from './WidgetOddsComponents'
import { addPlus } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  height: 80%;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 17px;
  min-width: 155px;
`

const WidgetMatchOdds = ({ lines }) => {
  return (
    <Wrapper>
      <TeamOdds>
        <TeamOddsItem>{addPlus(lines.MoneyLineHome)}</TeamOddsItem>
        <TeamOddsItem>{addPlus(lines.PointSpreadHome)}</TeamOddsItem>
      </TeamOdds>
      <TeamOdds>
        <TeamOddsItem>{addPlus(lines.MoneyLineAway)}</TeamOddsItem>
        <TeamOddsItem>{addPlus(lines.PointSpreadAway)}</TeamOddsItem>
      </TeamOdds>
    </Wrapper>
  )
}

export default WidgetMatchOdds
