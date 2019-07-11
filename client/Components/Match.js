import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'

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
        <div>HELLO WORLD</div>
      )
    }
    else if(this.props.activeSport === 'nfl') {
      return ( <div> Hello NFL </div> )
    }
  }
  splitName(string) {
    return string.split(' ')
  }

  render() {
    return this.chooseSport()
  }
}

const mapState = state => state

export default connect(mapState)(Match)
