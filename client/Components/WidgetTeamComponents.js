import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

export const WidgetTeamsWrapper = styled(FlexColumnContainer)`
  @media(max-width: 600px) {
    font-size: 12px;
  }
  font-size: 14px;
  height: 100%;
  min-width: 34vw;
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