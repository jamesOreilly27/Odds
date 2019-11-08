import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { GridGameContainer } from '../Components'

const Wrapper = styled(FlexRowContainer)`
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90vw;
  margin: 0 3vw;
`

const OddsGrid = ({ games, activeSport }) => (
  <Wrapper>
    {games.map(game => <GridGameContainer key={game.HomeTeam} match={game} activeSport={activeSport} /> )}
  </Wrapper>
)

export default OddsGrid
