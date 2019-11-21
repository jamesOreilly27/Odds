import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { GridTeamOddsContainer, GridTotalsContainer } from '../Components'
import { truncateTeamName, processDayMonthTime, splitTeamName, finalOrInProgress } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  @media(max-width: 960px) {
    flex: 0 0 33%
  }
  @media(max-width: 640px) {
    flex: 0 0 50%;
  }
  @media(max-width: 450px) {
    flex: 0 0 85%;
    margin: 0 7.5%;
  }
  flex: 0 0 25%
  border: 3px solid #EDEDF2;
  height: 350px;
`

const Container = styled(FlexColumnContainer)`
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  `

const GameDate = styled(FlexRowContainer)`
  margin-bottom: 8px;
  font-size: 20px;
  width: 100%;
  border-bottom: 2px solid #EDEDF2;
  background-color: ${({ inProgress }) => {
    let color
    inProgress ? color = '#59756F' : color = "#FFF"
    return color
  }}
  color: ${({ inProgress }) => {
    let color
    inProgress ? color = "#F8F8FF" : color = "#0A0A0A"
    return color
  }}
  `

const TeamsContainer = styled(FlexRowContainer)`
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid #EDEDF2;
  padding: 0 5px;
`

const Team = styled(FlexColumnContainer)`
  justify-content: flex-start;
  width: 50%;
`

const NameAndLogo = styled(FlexColumnContainer)`
  width: 100%;
  margin-bottom: 12px;
`

const LogoContainer = styled(FlexRowContainer)`
  
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
`

const TeamName = styled(FlexColumnContainer)`
  height: 100%;
  font-weight: bold;
  font-size: 10px;
`

const Score = styled(FlexRowContainer)`
  font-size: 21px;
  width: 15px;
`

const Amount = styled(FlexRowContainer)`
  height: 27px;
`

const AtSymbol = styled.div`
  font-size: 15px;
  flex: 1;
`

const OddsHeader = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
  flex: 1;
`

const MiddleGround = styled(FlexColumnContainer)`
  height: 200px;
  justify-content: flex-start;
  margin-left: 10px;
`

const GridGameContainer = ({ activeSport, match }) => {
  let inProgress = false
  if(match.HomeScore !== null) inProgress = true
  return (
    <Wrapper>
      <Container>
        <GameDate inProgress={inProgress}>
          {match.HomeScore === null ? 
            processDayMonthTime(match)
            :
            finalOrInProgress(match)
          }
        </GameDate>
        <TeamsContainer>
          <Team>
            <NameAndLogo>
              <LogoContainer>
                {truncateTeamName(activeSport, match.AwayTeam) && 
                  <Logo src={'/assets/production/large/' + activeSport + '-logos/' + truncateTeamName(activeSport, match.AwayTeam) + '.png'} />
                }
              </LogoContainer>
              <TeamName>
                <div>{splitTeamName(match.AwayTeam)[0]}</div>
                <div>{splitTeamName(match.AwayTeam)[1]}</div>
              </TeamName>
            </NameAndLogo>
            <Score>
              {match.AwayScore !== null ?
                <Amount>{match.AwayScore}</Amount>
                :
                <Amount></Amount>
              }
            </Score>
            <GridTeamOddsContainer
              lines={{
                MoneyLine: match.MoneyLineAway,
                PointSpread: match.PointSpreadAway,
                PointSpreadLine: match.PointSpreadAwayLine
              }}
              final={match.Final}
              homeScore={match.HomeScore}
              awayScore={match.AwayScore}
            />
          </Team>
          <MiddleGround>
            <AtSymbol> @ </AtSymbol>
            <OddsHeader>Score</OddsHeader>
            <OddsHeader>Moneyline</OddsHeader>
            <OddsHeader>Spread</OddsHeader>
          </MiddleGround>
          <Team>
            <NameAndLogo>
              <LogoContainer>
                {truncateTeamName(activeSport, match.HomeTeam) && 
                  <Logo src={'/assets/production/large/' + activeSport + '-logos/' + truncateTeamName(activeSport, match.HomeTeam) + '.png'} />
                }
              </LogoContainer>
              <TeamName>
                <div>{splitTeamName(match.HomeTeam)[0]}</div>
                <div>{splitTeamName(match.HomeTeam)[1]}</div>
              </TeamName>
            </NameAndLogo>
            <Score>
              {match.HomeScore !== null ?
                <Amount>{match.HomeScore}</Amount>
                :
                <Amount></Amount>
              }
            </Score>
            <GridTeamOddsContainer
              lines={{
                MoneyLine: match.MoneyLineHome,
                PointSpread: match.PointSpreadHome,
                PointSpreadLine: match.PointSpreadHomeLine
              }}
              final={match.Final}
              homeScore={match.HomeScore}
              awayScore={match.AwayScore}
              home
            />
          </Team>
        </TeamsContainer>
        <GridTotalsContainer
          totals={{
            TotalNumber: match.TotalNumber,
            OverLine: match.OverLine,
            UnderLine: match.UnderLine
          }}
          final={match.Final}
          homeScore={match.HomeScore}
          awayScore={match.AwayScore}
        />
      </Container>
    </Wrapper>
  )
}

export default GridGameContainer
