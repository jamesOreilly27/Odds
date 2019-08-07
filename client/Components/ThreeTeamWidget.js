import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexColumnContainer } from './baseComponents'
import { fetchOddsBySport, updateActiveSport, createGameThunk, gotResultsThunk, getGamesThunk, getFinalGamesThunk, getNonFinalGamesThunk } from '../store'
import { findResult, sortGamesByTime } from './helpers'
import { WidgetNavbar, ThreeTeamOddsTable, OddsTableHeader } from '../Components'

const Wrapper = styled(FlexColumnContainer)`
  width: 100vw;
  height: 700px;
  justify-content: flex-start;
  background-color: #EDEDF2;
`

class ThreeTeamWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [ 'mlb', 'nfl', 'nba', 'nhl' ],
      logos: 'mlb-logos'
    }
  }

  componentDidMount() {
    this.props.getOdds(this.props.activeSport)
    .then(() => {
      return this.props.getResults(this.props.activeSport)
    })
    .then(res => res.payload)
    .then(results => {
      this.props.odds.forEach(game => {
        this.props.createGame(this.props.activeSport, game, findResult(game.ID, results))
      })
    })
    .then(() => {
      return this.props.getGames(this.props.activeSport)
    })
    .then(action => action.payload)
    .then(games => {
      this.props.games.forEach(game => {
        this.props.createGame(this.props.activeSport, game, findResult(game.MatchId, this.props.results))
      })
    })
    .then(() => {
      this.props.getAllGameTypes(this.props.activeSport)
    })
    .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps) {
    if(this.props.activeSport !== prevProps.activeSport) {
      this.props.getOdds(this.props.activeSport)
      .then(() => {
        return this.props.getResults(this.props.activeSport)
      })
      .then(res => res.payload)
      .then(results => {
        this.props.odds.forEach(game => {
          this.props.createGame(this.props.activeSport, game, findResult(game.ID, results))
        })
      })
      .then(() => {
        return this.props.getGames(this.props.activeSport)
      })
      .then(action => action.payload)
      .then(games => {
        this.props.games.forEach(game => {
          this.props.createGame(this.props.activeSport, game, findResult(game.MatchId, this.props.results))
        })
      })
      .then(() => {
        this.props.getAllGameTypes(this.props.activeSport)
      })
      .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <Wrapper>
        <WidgetNavbar options={this.state.options} handleClick={this.props.updateSport} />
          <OddsTableHeader />
          {this.props.nonFinalGames &&
            <ThreeTeamOddsTable games={sortGamesByTime((this.props.nonFinalGames))} activeSport={this.props.activeSport} />
          }
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

export default connect(mapState, mapDispatch)(ThreeTeamWidget)
