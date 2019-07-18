import React from 'react'
import styled from 'styled-components'
import { WidgetTeamMatch } from '../Components'
import { FlexRowContainer, FlexColumnContainer, FlexButton, FlexRowButton } from './baseComponents'
import { firstNumItems } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: space-around;
`

const ThreeTeamOddsTable = ({ odds, activeSport }) => (
  <Wrapper>
    {firstNumItems(odds, 3) && 
      <div>
        {firstNumItems(odds, 3).map(match => <WidgetTeamMatch key={match.Id} match={match} activeSport={activeSport} />)}
      </div>
    }
  </Wrapper>
)

export default ThreeTeamOddsTable
