import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport, updateActiveSport } from '../store'
import { Match, BannerSelect, SelectOption, DateSection } from '../Components'
import styled, { keyframes } from 'styled-components'
import { FlexRowContainer, FlexColumnContainer, FlexButton } from './baseComponents'
import { getDatesArray, filterOddsByDay } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  align-items: flex-start;
  margin-top: -8px;
`

const BannerContainer = styled(FlexRowContainer)`
  justify-content: flex-start;
  margin-top: -7px;
  background-color: #374044;
  overflow-x: hidden;
  max-height: 65px;
  height: 65px;

  #match-container {
    transform: ${({ scrollLeft, scrollRight, scrollTo }) => {
      // if(scrollLeft) return `translateX(${scrollTo}px);`
      // if(scrollRight) return `translateX(${scrollTo}px);`
      return `translateX(${scrollTo}px);`
    }}
    transition: transform .5s;
  }
`

const easeInBanner = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const Menu = styled(FlexRowContainer)`
  height: 100%
  background-color: ${({ dropDown }) => {
    let color = ''
    !dropDown ? color = 'none' : color = 'black'
    return color
  }}
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
  height: 65px;
  width: 2500px;
  animation: ${easeInBanner} 5s ease;
  margin-left: 20px;
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
  left: 83px;
  top: 8px;
`

const RightClickScrollContainer = styled(ClickScrollContainer)`
  right: 15px;
  top: 8px;
`

class Banner extends Component {
  constructor(props) {
    super(props)
    this.handleDropDownClick = this.handleDropDownClick.bind(this)
    this.handleSelectClick = this.handleSelectClick.bind(this)
    this.mouseDownLeft= this.mouseDownLeft.bind(this)
    this.mouseUpLeft = this.mouseUpLeft.bind(this)
    this.mouseDownRight= this.mouseDownLeft.bind(this)
    this.mouseUpRight = this.mouseUpLeft.bind(this)
    
    this.state = {
      scrollLeft: false,
      scrollRight: false,
      scrollTo: 0,
      dropDown: false,
      options: [ 'mlb', 'nfl', 'nba', 'nhl', 'golf' ]
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
  }

  setNumOfDateSections(odds) {
    getDatesArray(odds)
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
    if(this.props.odds) filterOddsByDay(this.props.odds, new Date().getDate() + 1)
    return (
      <BannerContainer
        scrollLeft={this.state.scrollLeft}
        scrollRight={this.state.scrollRight}
        scrollTo={this.state.scrollTo}
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

        <LeftClickScrollContainer onMouseDown={this.mouseDownLeft} onMouseUp={this.mouseUpLeft}>
          {'<'}
        </LeftClickScrollContainer>

        <RightClickScrollContainer onMouseDown={this.mouseDownRight} onMouseUp={this.mouseUpRight}>
          {'>'}
        </RightClickScrollContainer>

        <MatchContainer id="match-container" dropDown={this.state.dropDown}>
          {this.props.odds &&
            getDatesArray(this.props.odds).map(date => {
              return <DateSection key={date} date={date} odds={filterOddsByDay(this.props.odds, date)} />
            })
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
  }
})

export default  connect(mapState, mapDispatch)(Banner)
