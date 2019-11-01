import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
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

const GridGameContainer = ({ activeSport, match }) => (
  <Wrapper>
    {match.HomeTeam}
  </Wrapper>
)

export default GridGameContainer
