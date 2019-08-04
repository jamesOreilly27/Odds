import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { TeamOdds, TeamOddsItem } from './WidgetOddsComponents'
import { addPlus } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 13px;
  width: 35vw;
`

const WidgetMatchOdds = ({ lines }) => {
  return (
    <Wrapper>
      <TeamOdds>
        <TeamOddsItem>{addPlus(lines.MoneyLineAway)}</TeamOddsItem>
        <TeamOddsItem>{addPlus(lines.PointSpreadAway)}</TeamOddsItem>
      </TeamOdds>
      <TeamOdds>
        <TeamOddsItem>{addPlus(lines.MoneyLineHome)}</TeamOddsItem>
        <TeamOddsItem>{addPlus(lines.PointSpreadHome)}</TeamOddsItem>
      </TeamOdds>
    </Wrapper>
  )
}

export default WidgetMatchOdds
