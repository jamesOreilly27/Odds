import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'

const testGridArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Wrapper = styled(FlexRowContainer)`
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90vw;
  margin: 0 3vw;
`

const GameContainer = styled(FlexRowContainer)`
  @media(max-width: 960px) {
    flex: 0 0 49.5%
  }
  @media(max-width: 640px) {
    flex: 0 0 100%;
  }
  flex: 0 0 33%
  border: 3px solid #EDEDF2;
  height: 30vh;
`

const OddsGrid = ({ games, activeSport }) => (
  <Wrapper>
    {testGridArr.map(test => <GameContainer key={test}> {test} </GameContainer> )}
  </Wrapper>
)

export default OddsGrid
