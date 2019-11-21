import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { addPlus, didBetWin, didBetCover, isMoneylinePush, isSpreadPush } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
`

const Container = styled(FlexRowContainer)`
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
`

const Item = styled(FlexColumnContainer)`
  font-size: 15px;
  width: 5vw;
`

const Juice = styled.div`
  font-size: 11px;
`

const GridOddtypeSection = ({ homeLine, awayLine, header, homeScore, awayScore, total }) => (
  <Wrapper>
    {!total ?
    <Container>
      <Item>{awayLine}</Item>
      <Item>{header}</Item>
      <Item>{homeLine}</Item>
    </Container>
    :
    <Container>
      <Item>
        <div>Under</div>
        <Juice>{`(${addPlus(awayLine)})`}</Juice>
      </Item>
      <Item>
        <div>{header}</div>
        <div>{total}</div>
      </Item>
      <Item>
        <div>Over</div>
        <Juice>{`(${addPlus(homeLine)})`}</Juice>
      </Item>
    </Container>
    }
  </Wrapper>
)

export default GridOddtypeSection
