import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { addPlus, didBetWin, didBetCover, isMoneylinePush, didOverCover, didUnderCover, isSpreadPush, didTotalPush } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 35px;
`

const Container = styled(FlexRowContainer)`
  justify-content: space-around;
  align-items: center;
  width: 86%;
`

const Item = styled(FlexColumnContainer)`
  font-size: 15px;
  height: 35px;
  flex: 1;
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

const Header = styled(FlexColumnContainer)`
flex: 2;
`

const Juice = styled.div`
  font-size: 11px;
`

const decideWonProperty = (header, homeScore, awayScore, spread, home, final) => {
  if(header === 'Moneyline') return didBetWin(homeScore, awayScore, home, final)
  if(header === "Spread") return didBetCover(homeScore, awayScore, spread, home, final)
}

const decidePushProperty = (header, homeScore, awayScore, line, final) => {
  if(header === "Moneyline") return isMoneylinePush(homeScore, awayScore, final)
  if(header === "Spread") return isSpreadPush(homeScore, awayScore, line)
  if(header === "Total") return didTotalPush(homeScore, awayScore, line, final)
}

const GridOddtypeSection = ({ homeLine, awayLine, header, homeSpreadJuice, awaySpreadJuice, homeScore, awayScore, total, final }) => {
  return (
    <Wrapper>
      {!total ?
      <Container>
        <Item
          won={decideWonProperty(header, homeScore, awayScore, awayLine, false, final)}
          push={decidePushProperty(header, homeScore, awayScore, awayLine, final)}
        >
          <div>{addPlus(awayLine)}</div>
          {awaySpreadJuice && 
            <Juice>{`(${addPlus(awaySpreadJuice)})`}</Juice>
          }
        </Item>
        <Header>{header}</Header>
        <Item
          won={decideWonProperty(header, homeScore, awayScore, homeLine, true, final)}
          push={decidePushProperty(header, homeScore, awayScore, homeLine, final)}
        >
          <div>{addPlus(homeLine)}</div>
          {homeSpreadJuice && 
            <Juice>{`(${addPlus(homeSpreadJuice)})`}</Juice>
          }
        </Item>
      </Container>
      :
      <Container>
        <Item
          won={didUnderCover(homeScore, awayScore, total, final)}
          push={decidePushProperty(header, homeScore, awayScore, total, final)}
        >
          <div>Under</div>
          <Juice>{`(${addPlus(awayLine)})`}</Juice>
        </Item>
        <Header>
          <Item>{header}</Item>
          <Item>{total}</Item>
        </Header>
        <Item
          won={didOverCover(homeScore, awayScore, total, final)}
          push={decidePushProperty(header, homeScore, awayScore, total, final)}
        >
          <div>Over</div>
          <Juice>{`(${addPlus(homeLine)})`}</Juice>
        </Item>
      </Container>
      }
    </Wrapper>
  )
}

export default GridOddtypeSection
