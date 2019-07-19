import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const TeamGameWrapper = styled(FlexColumnContainer)`
  font-size: 13px;
  height: 97%;
  min-width: 120px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: -3px
`

export const TeamGameHeader = styled(FlexRowContainer)`
  width: 95%;
  align-items: center;
  justify-content: space-between;
  padding-top: 3px;
  padding-left: 7px;
  color: #F8F8FF;
  background-color: #15181A;
`

export const TeamGameDetails = styled(FlexRowContainer)`
  width: 95%;
  height: 100%;
  justify-content: space-between;
  background-color: #5A696F;
  color: #F8F8FF;
  padding-left: 3px;
`

export const DetailContainer = styled(FlexColumnContainer)`
  height: 100%;
  justify-content: space-around;
  padding-top: 3px;
  width: 45%;
`

export const NameLogoContainer = styled(FlexRowContainer)`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
`

export const TeamOddsContainer = styled(DetailContainer)`

`