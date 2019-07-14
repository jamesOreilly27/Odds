import React, { Component } from 'react'
import { connect } from 'react-redux'

class BannerSelect extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Hello World</div>
    )
  }
}

const mapState = state => state

export default connect(mapState)(BannerSelect)
