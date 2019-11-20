import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { addPlus, didBetWin, didBetCover, isMoneylinePush, isSpreadPush } from './helpers'

const Wrapper = styled(FlexColumnContainer)`

`

const LineContainer = styled(FlexColumnContainer)`
  width: 120%;
  height: 50px;
  margin: 3px 0;
  border-radius: 40px
  background-color: ${({ won, push }) => {
    let color;
    won ? color = 'green' : color = '#FFF'
    push ? color = 'lightgrey' : '#000'
    return color
  }}
  color: ${({ won, push }) => {
    let color
    won ? color = '#FFF' : color = '#000'
    push ? color = '#000' : '#FFF'
    return color
  }}
`

// padding: 15px;

const Content = styled(FlexColumnContainer)`
  font-size: 15px;
`

const Juice = styled.div`
  font-size: 11px;
`

const GridTeamOddsContainer = ({ lines, final, homeScore, awayScore, home }) => (
  <Wrapper>
    <LineContainer
      homeScore={homeScore}
      awayScore={awayScore}
      won={didBetWin(homeScore, awayScore, home, final)}
      push={isMoneylinePush(homeScore, awayScore, final)}
    >
      <Content>
        {`${addPlus(lines.MoneyLine)}`}
      </Content>
    </LineContainer>
    <LineContainer
      won={didBetCover(homeScore, awayScore, lines.PointSpread, home, final)}
      push={isSpreadPush(homeScore, awayScore, lines.PointSpread, home, final)}
    >
      <Content>
        <div>
          {addPlus(lines.PointSpread)}
        </div>
        <Juice>
          {`(${addPlus(lines.PointSpreadLine)})`}
        </Juice>
      </Content>
    </LineContainer>
  </Wrapper>
)

export default GridTeamOddsContainer
