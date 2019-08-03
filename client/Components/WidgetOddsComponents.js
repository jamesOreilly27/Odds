import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const TeamOdds = styled(FlexRowContainer)`
  justify-content: space-around;
  width: 100%;
  height: 44%;
`

export const TeamOddsItem = styled(FlexColumnContainer)`
  @media(max-width: 3000px) {
    margin-right: 1.6vw;
  }
  @media(max-width: 600px) {
    margin-right: 0;
  }
  width: 15vw;
  font-size: 14px;
`

export const TotalsNum = styled(FlexColumnContainer)`
  @media(max-width: 3000px) {
    margin-right: 2vw;
  }
  @media(max-width: 600px) {
    margin-right: 0;
  }
  font-size: 14px;
  width: 100%;
  padding-top: 16px;
`

export const TotalsLines = styled(FlexRowContainer)`
  justify-content: space-between;
`
