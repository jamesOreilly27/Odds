import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  margin-top: 10px;
  width: 100%
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

const HeaderAndLine = styled.div`
  font-size: 18px;
`

const GridTotalsContainer = ({ totals }) => (
  <Wrapper>
    <OverUnderContainer won>
      <HeaderAndLine>Under</HeaderAndLine>
      <HeaderAndLine>{`(${totals.UnderLine})`}</HeaderAndLine>
    </OverUnderContainer>
    <TotalNumberContainer>
      <div>Total</div>
      <div>{totals.TotalNumber}</div>
    </TotalNumberContainer>
    <OverUnderContainer>
      <HeaderAndLine>Over</HeaderAndLine>
      <HeaderAndLine>{`(${totals.OverLine})`}</HeaderAndLine>
    </OverUnderContainer>
  </Wrapper>
)

export default GridTotalsContainer
