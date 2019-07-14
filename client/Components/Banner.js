import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport, updateActiveSport } from '../store'
import { Match, BannerSelect } from '../Components'
import styled, { keyframes } from 'styled-components'
import { FlexRowContainer, FlexColumnContainer, FlexButton } from './baseComponents'

const Wrapper = styled(FlexRowContainer)`
  justify-content: flex-start;
  background-color: #666;
  border-radius: 8px;
  overflow-x: hidden;
  
  #match-container {
    transform: ${({ scrollLeft, scrollRight, scrollTo }) => {
      // if(scrollLeft) return `translateX(${scrollTo}px);`
      // if(scrollRight) return `translateX(${scrollTo}px);`
      return `translateX(${scrollTo}px);`
    }}
    transition: transform .5s;
  }
`

const SelectWrapper = styled.div`
  width: 61px;
  height: 25px;
  position: relative;
  margin-right: 12px;
  select {
    appearance: none;
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
  flex-wrap: no-wrap;
  overflow-x: visible;
  height: 65px;
  width: 2500px;
  animation: ${easeInBanner} 5s ease;
  margin-left: 5px;
  align-items: center;
`

const ClickScrollContainer = styled(FlexButton)`
  width: 15px;
  position: absolute;
  background-color: #2E2D2D;
  height: 50px;
  color: #F5F5F5;
  z-index: 3;

  &:hover {
    background-color: #424141;
    transition: all .4s;
  }
`

const LeftClickScrollContainer = styled(ClickScrollContainer)`
  left: 69px;
  top: 15px;
`

const RightClickScrollContainer = styled(ClickScrollContainer)`
  right: 15px;
  top: 15px;
`

class Banner extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.mouseDownLeft= this.mouseDownLeft.bind(this)
    this.mouseUpLeft = this.mouseUpLeft.bind(this)
    this.mouseDownRight= this.mouseDownLeft.bind(this)
    this.mouseUpRight = this.mouseUpLeft.bind(this)
    
    this.state = { scrollLeft: false, scrollRight: false, scrollTo: 0 }
  }

  handleChange(event) {
    this.props.updateSport(event.target.value)
  }


  mouseDownLeft(event) { this.setState({ scrollLeft: true }) }

  mouseUpLeft(event) { this.setState({ scrollLeft: false }) }

  mouseDownRight(event) { this.setState({ scrollRight: true }) }

  mouseUpRight(event) { this.setState({ scrollRight: false }) }

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
      <Wrapper
        scrollLeft={this.state.scrollLeft}
        scrollRight={this.state.scrollRight}
        scrollTo={this.state.scrollTo}
      >
        {/* <SelectWrapper>
        <select onChange={this.handleChange}>
          <option value="mlb"> MLB </option>
          <option value="nfl"> NFL </option>
          <option value="nba"> NBA </option>
          <option value="nhl"> NHL </option>
          <option value="golf"> GOLF </option>
        </select>
        </SelectWrapper> */}
        <BannerSelect />
        <LeftClickScrollContainer onMouseDown={this.mouseDownLeft} onMouseUp={this.mouseUpLeft}>
          {'<'}
        </LeftClickScrollContainer>

        <RightClickScrollContainer onMouseDown={this.mouseDownRight} onMouseUp={this.mouseUpRight}>
          {'>'}
        </RightClickScrollContainer>

        <MatchContainer id="match-container">
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
