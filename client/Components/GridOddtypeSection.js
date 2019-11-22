import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { addPlus, didBetWin, didBetCover, isMoneylinePush, isSpreadPush } from './helpers'

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

const GridOddtypeSection = ({ homeLine, awayLine, header, homeSpreadJuice, awaySpreadJuice, homeScore, awayScore, total }) => (
  <Wrapper>
    {!total ?
    <Container>
      <Item>
        <div>{addPlus(awayLine)}</div>
        {awaySpreadJuice && 
          <Juice>{`(${addPlus(awaySpreadJuice)})`}</Juice>
        }
      </Item>
      <Header>{header}</Header>
      <Item>
        <div>{addPlus(homeLine)}</div>
        {homeSpreadJuice && 
          <Juice>{`(${addPlus(homeSpreadJuice)})`}</Juice>
        }
      </Item>
    </Container>
    :
    <Container>
      <Item>
        <div>Under</div>
        <Juice>{`(${addPlus(awayLine)})`}</Juice>
      </Item>
      <Header>
        <Item>{header}</Item>
        <Item>{total}</Item>
      </Header>
      <Item>
        <div>Over</div>
        <Juice>{`(${addPlus(homeLine)})`}</Juice>
      </Item>
    </Container>
    }
  </Wrapper>
)

export default GridOddtypeSection
