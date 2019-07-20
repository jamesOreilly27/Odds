import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const WidgetTeamsWrapper = styled(FlexColumnContainer)`
  font-size: 14px;
  height: 100%;
  min-width: 38vw;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;
`

export const WidgetTeamDetails = styled(FlexRowContainer)`
  justify-content: space-between;
  width: 100%;
  img {
    width: 29px;
    height: 25px;
    padding-right: 5px;
  }
`

export const ROT = styled.div`
  padding-right: 5px;
  font-size: 11px;
`

export const WidgetGameDate = styled(FlexColumnContainer)`
  font-size: 11px;
`