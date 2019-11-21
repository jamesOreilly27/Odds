import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { addPlus, didBetWin, didBetCover, isMoneylinePush, isSpreadPush } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  width: 100%;
`


const ScoresContainer = ({ homeScore, awayScore }) => (
  <Wrapper>
    <div>
      Hello World
    </div>
    <div>
      Hello World
    </div>
  </Wrapper>
)

export default ScoresContainer
