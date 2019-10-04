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
  @media(max-width: 700px) {
    font-size: 12px;
    height: 3vh;
  }
  @media(max-width: 500px) {
    font-size: 8px;
    height: 2vh;
  }
  width: 98vw;
  height: 5vh;
  background-color: #FFF
`

const Key = styled(FlexRowContainer)`
  align-items: center;
  justify-content: space-around;
  width: 25vw;
`

const Color = styled(FlexRowContainer)`
  background-color: #59756f;
  height: 90%;
  color: #F8F8FF;
  width: 18vw;
  border-radius: 5px;
`

const ThreeTeamOddsTable = ({ games, activeSport, scorePage }) => (
  <Wrapper>
    {firstNumItems(games, 5) && truncateTeamName(activeSport, games[0]['HomeTeam']) &&
    !scorePage ? 
      <div>
        {
          firstNumItems(games, 5).map(match => {
            if(match) return <WidgetTeamMatch key={match.id} match={match} activeSport={activeSport} />
          })
        }
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
