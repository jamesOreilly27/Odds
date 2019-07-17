import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer, FlexButton } from './baseComponents'
import { fetchOddsBySport, updateActiveSport } from '../store'

const Wrapper = styled(FlexColumnContainer)`

`

const Headline = styled(FlexRowContainer)`
  font-size: 24px;
  font-weight: bold;
`

class ThreeTeamWidget extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   this.props.getOdds(this.props.activeSport)
  // }

  // componentDidUpdate(prevProps) {
  //   if(this.props.activeSport !== prevProps.activeSport) {
  //     this.props.getOdds(this.props.activeSport)
  //   }
  // }

  render() {
    return (
      <Wrapper>
        <Headline>
          Hello World
        </Headline>
      </Wrapper>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
  getOdds(sport) {
    return dispatch(fetchOddsBySport(sport))
  },
  updateSport(sportString) {
    return dispatch(updateActiveSport(sportString))
  }
})

export default connect(mapState, mapDispatch)(ThreeTeamWidget)
