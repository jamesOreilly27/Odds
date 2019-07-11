import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { MLBGameWrapper, MLBGameHeader, MLBGameDetails } from './MlbStyledComponents'

const Wrapper = styled(FlexColumnContainer)`
  font-size: 11px;
  width: 120px;
  margin-left: 20px;
  height: 100%;
  padding-bottom: 10px;
`

const GolfNameContainer = styled(FlexRowContainer)`

`

const GolfLineContainer = styled.div`

`

class Match extends Component {
  constructor(props) {
    super(props)
  }

  chooseSport() {
    const match = this.props.odds[0]
    if(this.props.activeSport === 'golf') {
      return (
        <div>
          {this.props.gameOdds.Participant &&
            <Wrapper>
              <GolfNameContainer>
                <div>{this.splitName(this.props.gameOdds.Participant.Name)[0]}</div>
                <div>{this.splitName(this.props.gameOdds.Participant.Name)[1]}</div>
              </GolfNameContainer>
      
              <GolfLineContainer>
                {`+${this.props.gameOdds.MoneyLineHome}`}
              </GolfLineContainer>
            </Wrapper>
          }
        </div>
      )
    }
    else if(this.props.activeSport === 'mlb') {
      return (
        <MLBGameWrapper>
          <MLBGameHeader>
            {this.processTime(match.MatchTime)}
          </MLBGameHeader>

          <MLBGameDetails>
            {console.log(match)}
          </MLBGameDetails>
        </MLBGameWrapper>
      )
    }
    else if(this.props.activeSport === 'nfl') {
      return ( <div> Hello NFL </div> )
    }
  }
  splitName(string) {
    return string.split(' ')
  }

  convertTime(string) {
    return new Date(string)
  }

  processTime(dateString) {
    const date = this.convertTime(dateString)
    let hours = date.getHours()
    //subtract by 12 to convert to 12 hour time
    if(hours > 12) hours = hours - 12

    //convert the UTC 12 hour clock to EST
      //If 4 or less, add 8 to roll back into the 12 hour clock. 0 hour(midnight) becomes 8PM instead of -4
      //if great than 4, subtract 4
    if(hours <= 4) hours = hours + 8
    else if(hours > 4) hours = hours - 4
    const minutes = date.getMinutes()
    return minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`
  }

  render() {
    return this.chooseSport()
  }
}

const mapState = state => state

export default connect(mapState)(Match)
