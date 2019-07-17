import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const WidgetTeamsWrapper = styled(FlexColumnContainer)`
  font-size: 13px;
  height: 97%;
  min-width: 100px;
  justify-content: space-around;
  align-items: flex-start;
`

export const WidgetTeamDetails = styled(FlexRowContainer)`
  justify-content: space-around;

  img {
    width: 25px;
    height: 25px;
  }

`

export const WidgetGameDate = styled(FlexColumnContainer)`
  font-size: 11px;
`