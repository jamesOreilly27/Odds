import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { ScoresPageGameContainer } from '../Components'

const testGridArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Wrapper = styled(FlexRowContainer)`
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90vw;
  margin: 0 3vw;
`

const OddsGrid = ({ games, activeSport }) => (
  <Wrapper>
    {games.map(game => <ScoresPageGameContainer key={game.HomeTeam} match={game} activeSport={activeSport} /> )}
  </Wrapper>
)

export default OddsGrid
