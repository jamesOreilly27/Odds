import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { didOverCover, didUnderCover, didTotalPush } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  width: 100%
  justify-content: space-around;
  padding: 3px 5px;
`

const TotalNumberContainer = styled(FlexColumnContainer)`
  width: 25%
  height: 50px;
  font-size: 22px;
`

const OverUnderContainer = styled(FlexColumnContainer)`
  width: 35%;
  height: 50px;
  border-radius: 30px;
`

const OverUnderContent = styled(FlexColumnContainer)`
  height: 100%;
  border-radius: 30px;
  padding: 5px;
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

// padding: 10px;

const Header = styled.div`
  font-size: 15px;
`

const Line = styled.div`
  font-size: 11px;
`

const GridTotalsContainer = ({ totals, final, homeScore, awayScore }) => (
  <Wrapper>
    <OverUnderContainer>
      <OverUnderContent
        won={didUnderCover(homeScore, awayScore, totals.TotalNumber, final)}
        push={didTotalPush(homeScore, awayScore, totals.TotalNumber, final)}
      >
        <Header>Under</Header>
        <Line>{`(${totals.UnderLine})`}</Line>
      </OverUnderContent>
    </OverUnderContainer>
    <TotalNumberContainer>
      <div>Total</div>
      <div>{totals.TotalNumber}</div>
    </TotalNumberContainer>
    <OverUnderContainer>
    <OverUnderContent
      won={didOverCover(homeScore, awayScore, totals.TotalNumber, final)}
      push={didTotalPush(homeScore, awayScore, totals.TotalNumber, final)}
    >
      <Header>Over</Header>
      <Line>{`(${totals.OverLine})`}</Line>
    </OverUnderContent>
    </OverUnderContainer>
  </Wrapper>
)

export default GridTotalsContainer
