import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexColumnContainer, FlexButton } from './baseComponents'

const Wrapper = styled(FlexButton)`
  height: 100%;
  color: ${({ location }) => {
    let color;
    location ? color = '#0A0A0A' : color = '#F8F8FF'
    return color;
  }};
  width: 50%;
`

const Container = styled(FlexColumnContainer)`
  height: 60%;
  width: 30%;
  border-bottom: ${({ location, activeSport, value }) => {
    if(location === 'three-team' && value === activeSport) return '3px solid black'
    else return 'none'
  }}
  font-weight: bold;
`

class SelectOption extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Wrapper onClick={() => { return this.props.handleClick(this.props.value)}} location={this.props.location}>
        <Container location={this.props.location} activeSport={this.props.activeSport} value={this.props.value}>
          {this.props.value.toUpperCase()}
        </Container>
      </Wrapper>
    )
  }
}

const mapState = state => state

export default connect(mapState)(SelectOption)
