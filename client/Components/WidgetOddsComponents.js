import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const TeamOdds = styled(FlexRowContainer)`
  justify-content: space-around;
  width: 100%;
  height: 44%;
`

export const TeamOddsItem = styled(FlexColumnContainer)`
  width: 70px;
  font-size: 17px;
`

export const TotalsNum = styled(FlexColumnContainer)`
  font-size: 17px;
  width: 100%;
  padding-top: 16px;
  align-items: flex-end;
  margin-left: 9px;
`

export const TotalsLines = styled(FlexRowContainer)`
  justify-content: space-between;
`
