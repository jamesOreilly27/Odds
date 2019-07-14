import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport, updateActiveSport } from '../store'
import { Match, BannerSelect, SelectOption } from '../Components'
import styled, { keyframes } from 'styled-components'
import { FlexRowContainer, FlexColumnContainer, FlexButton } from './baseComponents'

const Wrapper = styled(FlexColumnContainer)`
  align-items: flex-start;
`

const BannerContainer = styled(FlexRowContainer)`
  justify-content: flex-start;
  background-color: #666;
  border-radius: 8px;
  overflow-x: hidden;
  max-height: 65px;

  #match-container {
    transform: ${({ scrollLeft, scrollRight, scrollTo }) => {
      // if(scrollLeft) return `translateX(${scrollTo}px);`
      // if(scrollRight) return `translateX(${scrollTo}px);`
      return `translateX(${scrollTo}px);`
    }}
    transition: transform .5s;
  }
`

const OptionsContainer = styled(FlexColumnContainer)`

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
    this.handleDropDownClick = this.handleDropDownClick.bind(this)
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
    this.state.dropDown ? unicode = '\u25B2' : unicode = '\u25BC'
    return unicode
  }

  handleChange(event) {
    this.props.updateSport(event.target.value)
  }

  handleDropDownClick(event) {
    this.setState({ dropDown: !this.state.dropDown })
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
      <Wrapper>
        <BannerContainer
          scrollLeft={this.state.scrollLeft}
          scrollRight={this.state.scrollRight}
          scrollTo={this.state.scrollTo}
        >
          <BannerSelect handleClick={this.handleDropDownClick} triangle={this.renderTriangle()}/>
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
        </BannerContainer>
        <OptionsContainer>
          {this.state.dropDown &&
            this.state.options.map(option => {
              return <SelectOption content='Hello World' />
            })
          }
        </OptionsContainer>
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
