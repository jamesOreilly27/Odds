import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { didOverCover, didUnderCover, didTotalPush } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  margin-top: 10px;
  width: 84%
  justify-content: space-around;
  padding: 10px 5px;
`

const TotalNumberContainer = styled(FlexColumnContainer)`
  width: 25%
  height: 70px;
  font-size: 22px;
`

const OverUnderContainer = styled(FlexColumnContainer)`
  width: 30%;
  height: 70px;
  border-radius: 30px;
  padding: 10px;
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

const HeaderAndLine = styled.div`
  font-size: 18px;
`

const GridTotalsContainer = ({ totals, final, homeScore, awayScore }) => (
  <Wrapper>
    <OverUnderContainer
      won={didUnderCover(homeScore, awayScore, totals.TotalNumber, final)}
      push={didTotalPush(homeScore, awayScore, totals.TotalNumber, final)}
    >
      <HeaderAndLine>Under</HeaderAndLine>
      <HeaderAndLine>{`(${totals.UnderLine})`}</HeaderAndLine>
    </OverUnderContainer>
    <TotalNumberContainer>
      <div>Total</div>
      <div>{totals.TotalNumber}</div>
    </TotalNumberContainer>
    <OverUnderContainer won={didOverCover(homeScore, awayScore, totals.TotalNumber, final)}>
      <HeaderAndLine>Over</HeaderAndLine>
      <HeaderAndLine>{`(${totals.OverLine})`}</HeaderAndLine>
    </OverUnderContainer>
  </Wrapper>
)

export default GridTotalsContainer
