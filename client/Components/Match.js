import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { TeamGameWrapper, TeamGameHeader, TeamGameDetails, DetailContainer, NameLogoContainer, TeamOddsContainer } from './TeamSportsStyledComponents'
import { processTime, truncateTeamName, addPlus } from './helpers'

const Wrapper = styled(FlexColumnContainer)`
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
    if(this.props.activeSport === 'golf') {
      return (
        <div>
          {this.props.match.Participant &&
            <Wrapper>
              <GolfNameContainer>
                <div>{this.splitName(this.props.match.Participant.Name)[0]}</div>
                <div>{this.splitName(this.props.match.Participant.Name)[1]}</div>
              </GolfNameContainer>
      
              <GolfLineContainer>
                {`+${this.props.match.MoneyLineHome}`}
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
                {processTime(this.props.match.MatchTime)}
              </TeamGameHeader>

              <TeamGameDetails>
                <DetailContainer>
                {truncateTeamName(this.props.activeSport, this.props.match.HomeTeam) &&
                <div>
                  <NameLogoContainer>
                    <img src={require(`../../public/assets/${this.props.activeSport}-logos/${truncateTeamName(this.props.activeSport, this.props.match.HomeTeam)}.png`)} />
                    <div>{truncateTeamName(this.props.activeSport, this.props.match.HomeTeam)}</div>
                  </NameLogoContainer>
                </div>
                }
                {truncateTeamName(this.props.activeSport, this.props.match.AwayTeam) &&
                <div>
                  <NameLogoContainer>
                    <img src={require(`../../public/assets/${this.props.activeSport}-logos/${truncateTeamName(this.props.activeSport, this.props.match.AwayTeam)}.png`)} />
                    <div>{truncateTeamName(this.props.activeSport, this.props.match.AwayTeam)}</div>
                  </NameLogoContainer>
                </div>
                }
                </DetailContainer>
                <TeamOddsContainer>
                  <div>{this.chooseLine(true)}</div>
                  <div>{this.chooseLine(false)}</div>
                </TeamOddsContainer>
              </TeamGameDetails>
        </TeamGameWrapper>
      )
    }
  }

  chooseLine(home) {
    if(home) {
      if(this.props.activeSport === 'mlb' || this.props.activeSport === 'nhl') {
        return addPlus(this.props.match.MoneyLineHome)
      }
      else if(this.props.activeSport === 'nfl' || this.props.activeSport === 'nba') {
        return addPlus(this.props.match.PointSpreadHome)
      }
    }
    else {
      if(this.props.activeSport === 'mlb' || this.props.activeSport === 'nhl') {
        return addPlus(this.props.match.MoneyLineAway)
      }
      else if(this.props.activeSport === 'nfl' || this.props.activeSport === 'nba') {
        return addPlus(this.props.match.PointSpreadAway)
      }
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
