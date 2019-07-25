import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { TeamMatch, Participant } from '../Components'
import { TeamGameWrapper, TeamGameHeader, TeamGameDetails, DetailContainer, NameLogoContainer, TeamOddsContainer } from './TeamSportsStyledComponents'
import { processTime, truncateTeamName, addPlus } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  margin-left: 20px;
  height: 100%;
  padding-bottom: 10px;
`

const GolfNameContainer = styled(FlexRowContainer)`

`

const GolfLineContainer = styled.div`

`

class Match extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.activeSport === 'golf') {
      return <Participant participant={this.props.participant} activeSport={this.props.activeSport} />
    }
    else {
      return <TeamMatch match={this.props.match} activeSport={this.props.activeSport} />
    }
  }
}

const mapState = state => state

export default connect(mapState)(Match)
