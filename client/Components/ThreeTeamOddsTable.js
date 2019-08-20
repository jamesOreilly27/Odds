import React from 'react'
import styled from 'styled-components'
import { WidgetTeamMatch } from '../Components'
import { FlexColumnContainer } from './baseComponents'
import { firstNumItems, truncateTeamName } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  width: 99vw;
  align-items: center;
  justify-content: flex-start;
  margin-top: -30px;
`

const ThreeTeamOddsTable = ({ games, activeSport, scorePage }) => (
  <Wrapper>
    {firstNumItems(games, 5) && truncateTeamName(activeSport, games[0]['HomeTeam']) &&
    !scorePage ? 
      <div>
        {firstNumItems(games, 5).map(match => <WidgetTeamMatch key={match.Id} match={match} activeSport={activeSport} />)}
      </div>
      :
      <div>
        {games.map(match => <WidgetTeamMatch key={match.Id} match={match} activeSport={activeSport} />)}
      </div>
    }
  </Wrapper>
)

export default ThreeTeamOddsTable
