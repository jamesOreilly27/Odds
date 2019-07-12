import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const TeamGameWrapper = styled(FlexColumnContainer)`
  font-size: 11px;
  height:100%;
  min-width: 140px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 30px 0 10px;
`

export const TeamGameHeader = styled(FlexRowContainer)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 3px;
  padding-left: 23px;
`

export const TeamGameDetails = styled(FlexRowContainer)`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: 
`

export const DetailContainer = styled(FlexColumnContainer)`
  height: 100%;
  justify-content: space-around;
  padding-top: 3px;
  width: 30%;
`

// export const TeamOddsContainer = styled(FlexColumnContainer)`
//   height: 100%;
//   justify-content: space-around;
//   padding-top: 3px;
// `