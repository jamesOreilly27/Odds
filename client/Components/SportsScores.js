import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexColumnContainer } from './baseComponents'
import { fetchOddsBySport, createGameThunk, gotResultsThunk, getGamesThunk, getFinalGamesThunk, getNonFinalGamesThunk } from '../store'
import { findResult, sortGamesByTime, filterOutOldGames, combineGameArrays } from './helpers'
import { ThreeTeamOddsTable, OddsTableHeader, OddsGrid } from '../Components'

const Wrapper = styled(FlexColumnContainer)`
  
`

class SportsScore extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const sport = this.props.match.params.sport
    this.props.getOdds(sport)
    .then(() => {
      return this.props.getResults(sport)
    })
    .then(res => res.payload)
    .then(results => {
      this.props.odds.forEach(game => {
        this.props.createGame(sport, game, findResult(game.ID, results))
      })
    })
    .then(() => {
      return this.props.getGames(sport)
    })
    .then(action => action.payload)
    .then(games => {
      this.props.games.forEach(game => {
        this.props.createGame(sport, game, findResult(game.MatchId, this.props.results))
      })
    })
    .then(() => {
      this.props.getAllGameTypes(sport)
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Wrapper>
        {this.props.finalGames && this.props.nonFinalGames &&
          <OddsGrid games={sortGamesByTime(combineGameArrays(filterOutOldGames(this.props.finalGames), this.props.nonFinalGames))} activeSport={this.props.match.params.sport} />
        }
        {/* {this.props.nonFinalGames && 
          <OddsGrid games={sortGamesByTime(this.props.nonFinalGames)} activeSport={this.props.match.params.sport} />
        } */}
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
