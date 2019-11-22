import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { addPlus, didBetWin, didBetCover, isMoneylinePush, isSpreadPush } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  width: 94%;
  justify-content: space-around;
  padding: 10px 0;
  height: 50px;
`

const ScoreText = styled(FlexColumnContainer)`
  font-size: 22px;
  flex: 1;
`
const ScoreHeader = styled(FlexColumnContainer)`
  flex: 1;
  font-size: 15px;

`


const ScoresContainer = ({ homeScore, awayScore }) => (
  <Wrapper>
    <ScoreText> {awayScore} </ScoreText>
    <ScoreHeader> Score </ScoreHeader>
    <ScoreText> {homeScore} </ScoreText>
  </Wrapper>
)

export default ScoresContainer
