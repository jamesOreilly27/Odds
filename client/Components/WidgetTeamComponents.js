import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const WidgetTeamsWrapper = styled(FlexColumnContainer)`
  font-size: 13px;
  height: 80%;
  min-width: 110.86px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px;
`

export const WidgetTeamDetails = styled(FlexRowContainer)`
  justify-content: flex-start;
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