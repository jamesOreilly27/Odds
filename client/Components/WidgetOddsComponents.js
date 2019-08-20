import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const TeamOdds = styled(FlexRowContainer)`
  justify-content: space-around;
  width: 100%;
  height: 44%;
`

export const TeamOddsItem = styled(FlexRowContainer)`
  @media(max-width: 700px) {
    flex-direction: column;
    font-size: 12px;
  }
  width: 10vw;
  font-size: 14px;
  justify-content: space-evenly;
`

export const TotalsNum = styled(FlexColumnContainer)`
  @media(max-width: 700px) {
    font-size: 12px;
  }
  font-size: 14px;
  width: 100%;
  `
  // padding-top: 16px;

export const TotalsLines = styled(FlexRowContainer)`
  justify-content: space-between;
`
