import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer } from './baseComponents'
import { TotalsNum } from './WidgetOddsComponents'

const Wrapper = styled(FlexColumnContainer)`
  height: 43%;
  width: 8vw;
`

const TotalsContainer = ({ totalNum }) => {
  return (
    <Wrapper>
      <TotalsNum>{`O${totalNum}`}</TotalsNum>
      <TotalsNum>{`U${totalNum}`}</TotalsNum>
    </Wrapper>
  )
}


export default TotalsContainer
