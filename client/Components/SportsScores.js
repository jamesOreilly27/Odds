import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer, FlexButton } from './baseComponents'
import { fetchOddsBySport, updateActiveSport, createGameThunk, gotResultsThunk, getGamesThunk, getFinalGamesThunk, getNonFinalGamesThunk } from '../store'
import { truncateTeamName, findResult, sortGamesByTime } from './helpers'

const Wrapper = styled(FlexColumnContainer)`

`

class SportsScore extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getOdds(this.props.match.params.sport)
  }

  render() {
    return (
      <Wrapper>
        Hello World
      </Wrapper>
    )
  }
}

const mapState = state => state

const mapDispatch = dispatch => ({
  getOdds(sport) {
    return dispatch(fetchOddsBySport(sport))
  },
  createGame(sport, game, result) {
    return dispatch(createGameThunk(sport, game, result))
  },
  getResults(sport) {
    return dispatch(gotResultsThunk(sport))
  },
  getGames(sport) {
    return dispatch(getGamesThunk(sport))
  },
  getAllGameTypes(sport) {
    return dispatch(getGamesThunk(sport))
    .then(() => dispatch(getFinalGamesThunk(sport)))
    .then(() => dispatch(getNonFinalGamesThunk(sport)))
    .catch(error => console.log(error))
  }
})


export default connect(mapState, mapDispatch)(SportsScore)
