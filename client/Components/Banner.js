import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport, updateActiveSport } from '../store'
import { Match, BannerSelect } from '../Components'
import styled, { keyframes } from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  width: 500%;
  justify-content: flex-start;
  background-color: #666;
  border-radius: 8px;
`

const SelectWrapper = styled.div`
  width: 61px;
  height: 25px;
  position: relative;
  margin-right: 8px;
  select {
    appearance: none;
    width:100%;
    height: 100%;
    border: none;
    padding-left: 17px;
    font-size: 15px;
    background-color: #666;
    color: #F5F5F5;
  }
`

const easeInBanner = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const MatchContainer = styled(FlexRowContainer)`
  justify-content: flex-start;
  height: 65px;
  width: 2500px;
  animation: ${easeInBanner} 4s ease;
  margin-left: 5px;
  align-items: CENTER;
`

const ClickScrollContainer = styled(FlexRowContainer)`
  width: 15px;
  position: absolute;
  right: 30px;
  top: 0;
  background-color: #8C8C8C;
  height: 50px;
  position: absolute;
  left: 60px;
  top: 16px;
  color: #F5F5F5; 
`

class Banner extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.updateSport(event.target.value)
  }

  componentDidMount() {
    this.props.getOdds(this.props.activeSport)
  }

  componentDidUpdate(prevProps) {
    if(this.props.activeSport !== prevProps.activeSport) {
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
          <ClickScrollContainer>
            {'<'}
          </ClickScrollContainer>
          {this.props.odds &&
            this.props.odds.map(match => {
              return <Match key={match.id} match={match} />
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
