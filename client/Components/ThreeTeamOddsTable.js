import React from 'react'
import styled from 'styled-components'
import { WidgetTeamMatch } from '../Components'
import { FlexRowContainer, FlexColumnContainer, FlexButton, FlexRowButton } from './baseComponents'

const test = [1, 2, 3]

const Wrapper = styled(FlexColumnContainer)`
  width: 100%;
  height: 250px;
  align-items: flex-start;
  justify-content: space-around;
`

const ThreeTeamOddsTable = ({ odds, activeSport }) => (
  <Wrapper>
    {odds && 
      <div>
        {odds.map(match => <WidgetTeamMatch key={match.Id} match={match} activeSport={activeSport} />)}
      </div>
    }
  </Wrapper>
)

export default ThreeTeamOddsTable
