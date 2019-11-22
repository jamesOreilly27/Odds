import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { GridGameContainer } from '../Components'

const Wrapper = styled(FlexRowContainer)`
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 90vw;
  margin: 0 3vw;
`

class OddsGrid extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if(this.props.games.length !== prevProps.games.length) {
      top.postMessage(document.getElementById('wrapper').clientHeight, '*')
    }
  }

  render() {
    return (
      <Wrapper id="wrapper">
        {this.props.games.map(game => <GridGameContainer key={game.HomeTeam} match={game} activeSport={this.props.activeSport} /> )}
      </Wrapper>
    )
  }
}

export default OddsGrid
