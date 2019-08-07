import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TeamMatch, Participant } from '../Components'

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
