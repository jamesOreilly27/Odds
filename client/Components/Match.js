import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { TeamGameWrapper, TeamGameHeader, TeamGameDetails, DetailContainer } from './TeamSportsStyledComponents'
import { processTime, truncateTeamName } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
  font-size: 11px;
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
    else {
      return (
        <TeamGameWrapper>
          <TeamGameHeader>
            {processTime(match.MatchTime)}
          </TeamGameHeader>

          <TeamGameDetails>
            {console.log(match)}
            <DetailContainer>
              <div>{truncateTeamName(this.props.activeSport, match.HomeTeam)}</div>
              <div>{truncateTeamName(this.props.activeSport, match.AwayTeam)}</div>
            </DetailContainer>
            <DetailContainer>
              <div>{this.props.gameOdds.MoneyLineHome}</div>
              <div>{this.props.gameOdds.MoneyLineAway}</div>
            </DetailContainer>
          </TeamGameDetails>
        </TeamGameWrapper>
      )
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
