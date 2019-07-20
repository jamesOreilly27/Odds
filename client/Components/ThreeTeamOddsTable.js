import React from 'react'
import styled from 'styled-components'
import { WidgetTeamMatch } from '../Components'
import { FlexRowContainer, FlexColumnContainer, FlexButton, FlexRowButton } from './baseComponents'
import { firstNumItems } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  width: 100vw;
  align-items: center;
  justify-content: flex-start;
  margin-top: -30px;
`

const ThreeTeamOddsTable = ({ odds, activeSport }) => (
  <Wrapper>
    {firstNumItems(odds, 4) && 
      <div>
        {firstNumItems(odds, 4).map(match => <WidgetTeamMatch key={match.Id} match={match} activeSport={activeSport} />)}
      </div>
    }
  </Wrapper>
)

export default ThreeTeamOddsTable
