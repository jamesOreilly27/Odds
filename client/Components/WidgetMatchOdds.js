import React from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { TeamOdds, TeamOddsItem } from './WidgetOddsComponents'
import { addPlus } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  height: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 13px;
  width: 50vw;
`

const Juice = styled(FlexRowContainer)`
  @media(max-width: 700px) {
    font-size: 10px;
  }
`

const WidgetMatchOdds = ({ lines }) => {
  return (
    <Wrapper>
      <TeamOdds>
        <TeamOddsItem>{addPlus(lines.MoneyLineAway)}</TeamOddsItem>
        <TeamOddsItem>
          <div>{`${addPlus(lines.PointSpreadAway)}`}</div>
          <Juice>{`(${addPlus(lines.PointSpreadAwayLine)})`}</Juice>
        </TeamOddsItem>
        <TeamOddsItem>
          <div>{`O ${lines.TotalNumber}`}</div>
          <Juice>{`(${addPlus(lines.OverLine)})`}</Juice>
        </TeamOddsItem>
      </TeamOdds>
      <TeamOdds>
        <TeamOddsItem>{addPlus(lines.MoneyLineHome)}</TeamOddsItem>
        <TeamOddsItem>
          <div>{`${addPlus(lines.PointSpreadHome)}`}</div>
          <Juice>{`(${addPlus(lines.PointSpreadHomeLine)})`}</Juice>
        </TeamOddsItem>
        <TeamOddsItem>
          <div>{`U ${lines.TotalNumber}`}</div>
          <Juice>{`(${addPlus(lines.UnderLine)})`}</Juice>
        </TeamOddsItem>
      </TeamOdds>
    </Wrapper>
  )
}

export default WidgetMatchOdds
