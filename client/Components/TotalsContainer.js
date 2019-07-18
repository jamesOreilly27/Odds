import React from 'react'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { TotalsNum, TotalsLines } from './WidgetOddsComponents'
import { addPlus } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  height: 80%;
  width: 50px;
`

const TotalsContainer = ({ lines }) => {
  const theLines = lines[0]
  return (
    <Wrapper>
      <TotalsNum>{theLines.TotalNumber}</TotalsNum>
    </Wrapper>
  )
}


export default TotalsContainer
