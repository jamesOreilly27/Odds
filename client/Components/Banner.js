import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport, updateActiveSport } from '../store'
import { Match } from '../Components'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  width: 500%;
  justify-content: flex-start
`

const SelectWrapper = styled.div`
  width: 100px
`

const MatchContainer = styled(FlexRowContainer)`
  background-color: #42ecf5;
  justify-content: flex-start;
  height: 65px;
  width: 2500px;
`

class Banner extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    // event.persist()
    // this.props.getOdds(event.target.value)
    // .then(() => {
    //   this.props.updateSport(event.target.value)
    // })
    // .catch(error => console.log(error))
    this.props.updateSport(event.target.value)
  }

  componentDidMount() {
    this.props.getOdds(this.props.activeSport)
  }

  componentDidUpdate(prevProps) {
    if(this.props.activeSport !== prevProps.activeSport) {
      console.log('HOLLLLOOO NURSE')
      this.props.getOdds(this.props.activeSport)
    }
  }

  render() {
    return (
      <Wrapper>
        <SelectWrapper>
        <select onChange={this.handleChange}>
          <option value="mlb"> MLB </option>
          <option value="nfl"> NFL </option>
          <option value="nba"> NBA </option>
          <option value="nhl"> NHL </option>
          <option value="golf"> GOLF </option>
        </select>
        </SelectWrapper>

        <MatchContainer>
          {this.props.odds[0] &&
            this.props.odds[0].Odds.map(gameOdds => {
              return <Match key={gameOdds.id} gameOdds={gameOdds} />
            })
          }
        </MatchContainer>
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
  }
})

export default  connect(mapState, mapDispatch)(Banner)
