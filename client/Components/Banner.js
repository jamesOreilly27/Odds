import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchOddsBySport } from '../store'
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
`

class Banner extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getOdds(this.props.sport)
  }

  render() {
    return (
      <Wrapper>
        <SelectWrapper>
        <select>
          <option value="mlb"> MLB </option>
          <option value="nfl"> NFL </option>
          <option value="nba"> NBA </option>
          <option value="nhl"> NHL </option>
          <option value="golf"> GOLF </option>
        </select>
        </SelectWrapper>

        <MatchContainer>
          {this.props.odds[0] &&
            this.props.odds[0].Odds.map(match => {
              return <Match class="match" key={match.id} details={match} sport={'golf'}/>
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
    dispatch(fetchOddsBySport(sport))
  }
})

export default  connect(mapState, mapDispatch)(Banner)
