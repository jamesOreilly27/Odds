import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport, updateActiveSport, createGameThunk, gotResultsThunk, getGamesThunk, getFinalGamesThunk, getNonFinalGamesThunk } from '../store'
import { BannerSelect, SelectOption, DateSection, GolfContainer } from '../Components'
import styled, { keyframes } from 'styled-components'
import { FlexRowContainer, FlexColumnContainer, FlexButton } from './baseComponents'
import { getDatesArray, filterOddsByDay, truncateTeamName, findResult, sortGamesByTime, filterOutOldGames, combineGameArrays } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  align-items: flex-start;
  margin-top: -8px;
`

const BannerContainer = styled(FlexRowContainer)`
  justify-content: flex-start;
  margin-top: -7px;
  background-color: #374044;
  overflow-x: hidden;
  max-height: 80px;
  height: 80px;
  border-bottom: 1px solid ##15181A;

  #match-container {
    transform: ${({ scrollTo }) => {
      return `translateX(${scrollTo}px);`
    }}
  }
`

const easeInBanner = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Menu = styled(FlexRowContainer)`
  height: 100%
  background-color: #374044;
  z-index: 5;
  `

const OptionsContainer = styled(FlexRowContainer)`
  justify-content: space-around;
  height: 100%;
  width: 260px;
`

const MatchContainer = styled(FlexRowContainer)`
  justify-content: flex-start;
  flex-wrap: no-wrap;
  overflow-x: visible;
  height: 80px;
  width: 2500px;
  animation: ${easeInBanner} 5s ease;
  align-items: center;
`

const ClickScrollContainer = styled(FlexButton)`
  width: 15px;
  position: absolute;
  background-color: #15181A;
  height: 60px;
  color: #F5F5F5;
  z-index: 3;

  &:hover {
    background-color: #202528;
    transition: all .4s;
  }
`

const LeftClickScrollContainer = styled(ClickScrollContainer)`
  left: 75px;
  top: 7px;
`

const RightClickScrollContainer = styled(ClickScrollContainer)`
  right: 20px;
  top: 7px;
`

let test;

class Banner extends Component {
  constructor(props) {
    super(props)
    this.handleDropDownClick = this.handleDropDownClick.bind(this)
    this.handleSelectClick = this.handleSelectClick.bind(this)
    this.mouseDownLeft= this.mouseDownLeft.bind(this)
    this.mouseUp = this.mouseUp.bind(this)
    this.mouseDownRight= this.mouseDownRight.bind(this)
    
    this.state = {
      intervalCount: 0,
      scrollTo: 0,
      dropDown: false,
      options: [ 'mlb', 'nfl', 'nba', 'nhl' ]
    }
  }

  renderTriangle() {
    let unicode = ''
    this.state.dropDown ? unicode = '<' : unicode = '>'
    return unicode
  }

  handleDropDownClick(event) {
    this.setState({ dropDown: !this.state.dropDown })
  }

  handleSelectClick(sportString) {
    this.props.updateSport(sportString)
    this.setState({ dropDown: false })
  }

  setNumOfDateSections(odds) {
    getDatesArray(odds)
  }


  mouseDownLeft() {
    if(test) clearInterval(test)
    test = setInterval(() => {
      if(this.state.scrollTo < 0) {
        this.setState({ scrollTo: this.state.scrollTo + 10 })
      }
    }, 20)
    this.setState({ intervalCount: this.state.intervalCount + 1})
  }

  mouseUp() { 
    clearInterval(test)
  }

  mouseDownRight() {
    if(test) clearInterval(test)
    test = setInterval(() => {
      if(this.state.scrollTo > -this.props.games.length*120) {
        this.setState({ scrollTo: this.state.scrollTo - 10 })
      }
    }, 20)
    this.setState({ intervalCount: this.state.intervalCount + 1})
  }

  componentDidMount() {
    top.postMessage(`${this.props.activeSport}`, '*')
    if(this.props.activeSport !== 'golf') {

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
    else {
      this.props.getOdds(this.props.activeSport)
    }
  }
  
  componentDidUpdate(prevProps) {
    if(this.props.activeSport !== prevProps.activeSport) {
      top.postMessage(`${this.props.activeSport}`, '*')
      if(this.props.activeSport !== 'golf') {
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
          this.props.getAllGameTypes(this.props.activeSport)
        })
        .catch(err => console.log(err))
      }
      else {
        this.props.getOdds(this.props.activeSport)
      }
    }
  }

  render() {
    return (
      <BannerContainer
        scrollLeft={this.state.scrollLeft}
        scrollRight={this.state.scrollRight}
        scrollTo={this.state.scrollTo}
        onMouseUp={this.mouseUp}
      >
        <Menu dropDown={this.state.dropDown}>
          <BannerSelect handleClick={this.handleDropDownClick} triangle={this.renderTriangle()}/>
            {this.state.dropDown &&
              <OptionsContainer>
                {this.state.options.map(option => {
                  if(option !== this.props.activeSport) {
                    return <SelectOption value={option} handleClick={this.handleSelectClick} />
                  }
                })}
              </OptionsContainer>
            }
        </Menu>
        {this.props.nonFinalGames && this.props.finalGames &&
          <div>
          <LeftClickScrollContainer
            onMouseDown={this.mouseDownLeft}
            onMouseUp={this.mouseUp}
            onTouchStart={this.mouseDownLeft}
            onTouchEnd={this.mouseUp}
          >
            {'<'}
          </LeftClickScrollContainer>

          <RightClickScrollContainer
            onMouseDown={this.mouseDownRight}
            onMouseUp={this.mouseUp}
            onTouchStart={this.mouseDownRight}
            onTouchEnd={this.mouseUp}
          >
            {'>'}
          </RightClickScrollContainer>
          </div>
        }

        <MatchContainer id="match-container" dropDown={this.state.dropDown}>
          {this.props.nonFinalGames && this.props.finalGames &&
            this.props.activeSport !== 'golf' ?
            getDatesArray(combineGameArrays(filterOutOldGames(this.props.finalGames), this.props.nonFinalGames)).map(date => {
              if(this.props.nonFinalGames[0] && truncateTeamName(this.props.activeSport, this.props.nonFinalGames[0]['HomeTeam'])) {
                return <DateSection key={date.month / date.date} date={date} games={sortGamesByTime(filterOddsByDay(combineGameArrays(filterOutOldGames(this.props.finalGames), this.props.nonFinalGames), date))} />
              }
            })
            :
            <GolfContainer odds={this.props.odds} />
          }
        </MatchContainer>
      </BannerContainer>
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

export default  connect(mapState, mapDispatch)(Banner)
