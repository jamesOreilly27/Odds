import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { FlexRowContainer, FlexColumnContainer } from './baseComponents'
import { WidgetMatchOdds, TotalsContainer } from '../Components'
import { WidgetTeamsWrapper, WidgetTeamDetails, WidgetGameDate, ROT } from './WidgetTeamComponents'
import { processTime, truncateTeamName, addPlus, processDayMonthTime } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  justify-content: space-between;
  height: 95px;
  border: 3px solid #EDEDF2;
  width: 100vw;
  background-color: #FFF;
`
const LogoSwitchWrapper = styled(FlexRowContainer)`

`

const Score = styled(FlexRowContainer)`
  font-weight: bold;
`

const OddsContainer = styled(FlexRowContainer)`
  justify-content: space-evenly;
  min-width: 60vw;
  height: 100%;
`

const WidgetTeamMatch = ({ activeSport, match }) => (
  <Wrapper>
    <WidgetTeamsWrapper>
      <WidgetGameDate>
        {processDayMonthTime(match)}
      </WidgetGameDate>
      {/* <WidgetTeamDetails>
        {truncateTeamName(activeSport, match.HomeTeam) && 
          <LogoSwitchWrapper>
            <ROT>{match.HomeROT}</ROT>
            <img src={require(`../../public/assets/${activeSport}-logos/${truncateTeamName(activeSport, match.HomeTeam)}.png`)} />
            <div>{truncateTeamName(activeSport, match.HomeTeam)}</div>
          </LogoSwitchWrapper>
        }
        <Score> 0 </Score>
      </WidgetTeamDetails> */}
      <WidgetTeamDetails>
        {truncateTeamName(activeSport, match.AwayTeam) && 
          <LogoSwitchWrapper>
            <ROT>{match.AwayROT}</ROT>
            <img src={require(`../../public/assets/${activeSport}-logos/${truncateTeamName(activeSport, match.AwayTeam)}.png`)} />
            <div>{truncateTeamName(activeSport, match.AwayTeam)}</div>
          </LogoSwitchWrapper>
        }
        <Score> 0 </Score>
      </WidgetTeamDetails>
      <WidgetTeamDetails>
        {truncateTeamName(activeSport, match.HomeTeam) && 
          <LogoSwitchWrapper>
            <ROT>{match.HomeROT}</ROT>
            <img src={require(`../../public/assets/${activeSport}-logos/${truncateTeamName(activeSport, match.HomeTeam)}.png`)} />
            <div>{truncateTeamName(activeSport, match.HomeTeam)}</div>
          </LogoSwitchWrapper>
        }
        <Score> 0 </Score>
      </WidgetTeamDetails>
    </WidgetTeamsWrapper>

    <OddsContainer>
      <WidgetMatchOdds lines={match.Odds} />
      <TotalsContainer lines={match.Odds} />
    </OddsContainer>
  </Wrapper>
)

export default WidgetTeamMatch
