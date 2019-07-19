import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport, updateActiveSport } from '../store'
import { Match, BannerSelect, SelectOption, DateSection } from '../Components'
import styled, { keyframes } from 'styled-components'
import { FlexRowContainer, FlexColumnContainer, FlexButton } from './baseComponents'
import { getDatesArray, filterOddsByDay, truncateTeamName } from './helpers'

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
  left: 90px;
  top: 11px;
`

const RightClickScrollContainer = styled(ClickScrollContainer)`
  right: 110px;
  top: 11px;
`

class Banner extends Component {
  constructor(props) {
    super(props)
    this.handleDropDownClick = this.handleDropDownClick.bind(this)
    this.handleSelectClick = this.handleSelectClick.bind(this)
    this.mouseDownLeft= this.mouseDownLeft.bind(this)
    this.mouseUpLeft = this.mouseUpLeft.bind(this)
    this.mouseDownRight= this.mouseDownRight.bind(this)
    this.mouseUpRight = this.mouseUpRight.bind(this)
    
    this.state = {
      intervalCount: 0,
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
    this.setState({ dropDown: false })
  }

  setNumOfDateSections(odds) {
    getDatesArray(odds)
  }


  mouseDownLeft() {
      const left = setInterval(() => {
        if(this.state.scrollTo > -1215) {
          this.setState({ scrollTo: this.state.scrollTo - 10 })
        }
      }, 20)
    this.setState({ intervalCount: this.state.intervalCount + 1})
  }

  mouseUpLeft() { 
    clearInterval(this.state.intervalCount)
  }

  mouseDownRight() {
      const right = setInterval(() => {
        if(this.state.scrollTo < 0) {
          this.setState({ scrollTo: this.state.scrollTo + 10 })
        }
      }, 20)
    this.setState({ intervalCount: this.state.intervalCount + 1})
  }

  mouseUpRight(event) { clearInterval(this.state.intervalCount) }

  componentDidMount() {
    this.props.getOdds(this.props.activeSport)
  }

  componentDidUpdate(prevProps) {
    if(this.props.activeSport !== prevProps.activeSport) {
      this.props.getOdds(this.props.activeSport)
    }
  }

  render() {
    let left;
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

        <LeftClickScrollContainer
          onMouseDown={this.mouseDownLeft}
          onMouseUp={this.mouseUpLeft}
        >
          {'<'}
        </LeftClickScrollContainer>

        <RightClickScrollContainer onMouseDown={this.mouseDownRight} onMouseUp={this.mouseUpRight}>
          {'>'}
        </RightClickScrollContainer>

        <MatchContainer id="match-container" dropDown={this.state.dropDown}>
          {this.props.odds &&
            getDatesArray(this.props.odds).map(date => {
              if(truncateTeamName(this.props.activeSport, this.props.odds[0]['HomeTeam'])) {
                return <DateSection key={date} date={date} odds={filterOddsByDay(this.props.odds, date)} />
              }
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
