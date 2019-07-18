import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer, FlexButton } from './baseComponents'
import { fetchOddsBySport, updateActiveSport } from '../store'
import { WidgetNavbar, ThreeTeamOddsTable, OddsTableHeader } from '../Components'

const Wrapper = styled(FlexColumnContainer)`
  width: 90%;
  height: 50vh;
  justify-content: flex-start;
`

const Headline = styled(FlexRowContainer)`
  font-size: 24px;
  font-weight: bold;
`

class ThreeTeamWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [ 'mlb', 'nfl', 'nba', 'nhl', 'golf' ],
      logos: 'mlb-logos'
    }
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
        <WidgetNavbar options={this.state.options} handleClick={this.props.updateSport} />
        <OddsTableHeader />
        {this.props.odds &&
          <ThreeTeamOddsTable odds={this.props.odds} activeSport={this.props.activeSport} />
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
  }
})

export default connect(mapState, mapDispatch)(ThreeTeamWidget)
