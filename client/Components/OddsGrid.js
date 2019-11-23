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
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    }

    this.updateDimensions = this.updateDimensions.bind(this)
  }

  sendMessage(element) {
    console.log('FIRING', element.clientHeight)
    top.postMessage(element.clientHeight, '*')
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  componentDidUpdate(prevProps, prevState) {
    const container = document.getElementById('wrapper')
    if(this.props.games.length !== prevProps.games.length) {
      this.sendMessage(container)
    }
    if(
        this.state.height !== prevState.height ||
        this.state.width !== prevState.width
      ) {
        this.sendMessage(container)
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
