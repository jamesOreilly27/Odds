import React from 'react'
import styled from 'styled-components'
import { WidgetTeamMatch } from '../Components'
import { FlexRowContainer, FlexColumnContainer, FlexButton, FlexRowButton } from './baseComponents'
import { firstNumItems, truncateTeamName } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  width: 100vw;
  align-items: center;
  justify-content: flex-start;
  margin-top: -30px;
`

const ThreeTeamOddsTable = ({ odds, activeSport }) => (
  <Wrapper>
    {firstNumItems(odds, 5) && truncateTeamName(activeSport, odds[0]['HomeTeam']) &&
      <div>
        {firstNumItems(odds, 5).map(match => <WidgetTeamMatch key={match.Id} match={match} activeSport={activeSport} />)}
      </div>
    }
  </Wrapper>
)

export default ThreeTeamOddsTable
