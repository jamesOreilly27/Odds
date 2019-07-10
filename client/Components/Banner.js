import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport } from '../store'
import { Match } from '../Components'

class Banner extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getOdds(this.props.sport)
  }

  render() {
    return (
      <div>
        { this.props.odds[0] &&
            this.props.odds[0].Odds.map(match => {
              return <Match key={match.id} details={match} />
            })
        }
      </div>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
  getOdds(sport) {
    dispatch(fetchOddsBySport(sport))
  }
})

export default  connect(mapState, mapDispatch)(Banner)
