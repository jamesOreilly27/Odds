import React from 'react'
import styled from 'styled-components'
import { WidgetTeamMatch } from '../Components'
import { FlexColumnContainer, FlexRowContainer} from './baseComponents'
import { firstNumItems, truncateTeamName } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  width: 99vw;
  align-items: center;
  justify-content: flex-start;
  margin-top: -30px;
`

const KeyWrapper = styled(FlexRowContainer)`
  width: 98vw;
  height: 5vh;
  margin-top: 4px;
  background-color: #FFF
`

const Key = styled(FlexRowContainer)`
  align-items: center;
  justify-content: space-around;
  width: 20vw;
`

const Color = styled(FlexRowContainer)`
  background-color: #59756f;
  height: 90%;
  color: #F8F8FF;
  width: 13vw;
  border-radius: 5px;
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
    <KeyWrapper>
      <Key>
        Key:
        <Color>
          Closed Odds
        </Color>
      </Key>
    </KeyWrapper>
  </Wrapper>
)

export default ThreeTeamOddsTable
