import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const TeamGameWrapper = styled(FlexColumnContainer)`
  font-size: 11px;
  height: 87%;
  min-width: 100px;
  justify-content: space-between;
  align-items: flex-start;
`

export const TeamGameHeader = styled(FlexRowContainer)`
  width: 95%;
  align-items: center;
  justify-content: space-between;
  padding-top: 3px;
  padding-left: 7px;
  color: #F5F5F5;
  background-color: #0A0A0A;
`

export const TeamGameDetails = styled(FlexRowContainer)`
  width: 95%;
  height: 50px;
  justify-content: space-between;
  background-color: #8C8C8C;
  color: #F5F5F5;
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