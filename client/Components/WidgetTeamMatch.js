import React from 'react'
import styled from 'styled-components'
import { FlexRowContainer } from './baseComponents'
import { WidgetMatchOdds } from '../Components'
import { WidgetTeamsWrapper, WidgetTeamDetails, WidgetGameDate } from './WidgetTeamComponents'
import { truncateTeamName, processDayMonthTime } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  justify-content: space-between;
  height: 95px;
  border: 3px solid #EDEDF2;
  width: 99vw;
  background-color: #FFF;
`
const LogoSwitchWrapper = styled(FlexRowContainer)`
  font-weight: bold;
`

const Score = styled(FlexRowContainer)`
  font-weight: bold;
`

const OddsContainer = styled(FlexRowContainer)`
  justify-content: space-evenly;
  border-radius: 10px;
  min-width: 50vw;
  height: 100%;

  background-color: ${({ homeScore }) => {
    if(homeScore !== null) return '#59756F'
    else return 'none'
  }};

  color: ${({ homeScore }) => {
    if(homeScore !== null) return '#F8F8FF'
    else return 'none'
  }};
`

//#0A0A0A
//#06325c
//#002b54

const WidgetTeamMatch = ({ activeSport, match }) => (
  <Wrapper>
    <WidgetTeamsWrapper>
      <WidgetGameDate>
        {match.HomeScore === null ?
          processDayMonthTime(match)
          :
          <div>In Progress</div>
        }
      </WidgetGameDate>
      <WidgetTeamDetails>
        {truncateTeamName(activeSport, match.AwayTeam) && 
          <LogoSwitchWrapper>
            <img src={'/assets/' + props.activeSport + '-logos/' + truncateTeamName(props.activeSport, props.match.AwayTeam) + '.png'} />
            <div>{truncateTeamName(activeSport, match.AwayTeam)}</div>
          </LogoSwitchWrapper>
        }
        <Score> {match.AwayScore} </Score>
      </WidgetTeamDetails>
      <WidgetTeamDetails>
        {truncateTeamName(activeSport, match.HomeTeam) && 
          <LogoSwitchWrapper>
            <img src={'/assets/' + props.activeSport + '-logos/' + truncateTeamName(props.activeSport, props.match.HomeTeam) + '.png'} />
            <div>{truncateTeamName(activeSport, match.HomeTeam)}</div>
          </LogoSwitchWrapper>
        }
        <Score> {match.HomeScore} </Score>
      </WidgetTeamDetails>
    </WidgetTeamsWrapper>

    <OddsContainer homeScore={match.HomeScore}>
      <WidgetMatchOdds lines={{
        MoneyLineHome: match.MoneyLineHome,
        MoneyLineAway: match.MoneyLineAway,
        PointSpreadHome: match.PointSpreadHome,
        PointSpreadHomeLine: match.PointSpreadHomeLine,
        PointSpreadAway: match.PointSpreadAway,
        PointSpreadAwayLine: match.PointSpreadAwayLine,
        TotalNumber: match.TotalNumber,
        OverLine: match.OverLine,
        UnderLine: match.UnderLine
        }}
      />
      {/* <TotalsContainer totalNum={match.TotalNumber} lines={{ OverLine: match.OverLine, UnderLine: match.UnderLine }}/> */}
    </OddsContainer>
  </Wrapper>
)

export default WidgetTeamMatch
