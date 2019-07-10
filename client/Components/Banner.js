import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport } from '../store'

class Banner extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getOdds('golf')
  }

  render() {
    return (
      <h1>Hello World</h1>
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
