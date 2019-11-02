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
  font-size: 22px;
`

const OverUnderContainer = styled(FlexColumnContainer)`

`

const HeaderAndLine = styled.div`
  font-size: 18px;
`

const GridTotalsContainer = ({ totals }) => (
  <Wrapper>
    <OverUnderContainer>
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
