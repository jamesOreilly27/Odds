import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { addPlus, didBetWin } from './helpers'

const Wrapper = styled(FlexColumnContainer)`

`

const LineContainer = styled(FlexColumnContainer)`
  padding: 15px;
  border-radius: 40px
  background-color: ${({ won }) => {
    let color;
    won ? color = 'green' : color = '#FFF'
    return color
  }}
  color: ${({ won }) => {
    let color
    won ? color = '#FFF' : color = '#000'
    return color
  }}
`

const Header = styled.div`
  font-size: 15px;
`

const Content = styled(FlexColumnContainer)`
  font-size: 21px;
`

const Juice = styled.div`
  font-size: 13px;
`

const GridTeamOddsContainer = ({ lines, final, homeScore, awayScore, home }) => (
  <Wrapper>
    <LineContainer won={didBetWin(homeScore, awayScore, home)}>
      <Header>
        Moneyline
      </Header>
      <Content>
        {`${addPlus(lines.MoneyLine)}`}
      </Content>
    </LineContainer>
    <LineContainer>
      <Header>
        Spread
      </Header>
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
