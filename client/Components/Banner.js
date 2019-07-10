import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport } from '../store'
import { Match } from '../Components'
import styled from 'styled-components'
import { FlexRowContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  background-color: #42ecf5;
  width: 500%;
`

class Banner extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getOdds(this.props.sport)
  }

  render() {
    return (
      <Wrapper>
        { this.props.odds[0] &&
            this.props.odds[0].Odds.map(match => {
              return <Match key={match.id} details={match} />
            })
        }
      </Wrapper>
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
