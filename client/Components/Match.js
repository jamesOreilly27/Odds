import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { TeamMatch, Participant } from '../Components'
import { TeamGameWrapper, TeamGameHeader, TeamGameDetails, DetailContainer, NameLogoContainer, TeamOddsContainer } from './TeamSportsStyledComponents'
import { processTime, truncateTeamName, addPlus } from './helpers'

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
