import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const TeamOdds = styled(FlexRowContainer)`
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

export const TeamOddsItem = styled(FlexColumnContainer)`

`

export const TotalsNum = styled(FlexColumnContainer)`
  font-size: 15px;
  width: 100%;
  padding-top: 16px;
  align-items: flex-end;
`

export const TotalsLines = styled(FlexRowContainer)`
  justify-content: space-between;
`
