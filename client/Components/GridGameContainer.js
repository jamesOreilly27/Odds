import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { GridTeamOddsContainer, GridTotalsContainer } from '../Components'
import { truncateTeamName, processDayMonthTime, splitTeamName, finalOrInProgress } from './helpers'

const Wrapper = styled(FlexRowContainer)`
  @media(max-width: 960px) {
    flex: 0 0 49.5%
  }
  @media(max-width: 640px) {
    flex: 0 0 100%;
  }
  flex: 0 0 33%
  border: 3px solid #EDEDF2;
`

const Container = styled(FlexColumnContainer)`
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 15px 0;
`

const GameDate = styled(FlexRowContainer)`
  margin-bottom: 8px;
  font-size: 20px;
  width: 100%;
  border-bottom: 2px solid #EDEDF2;
`

const TeamsContainer = styled(FlexRowContainer)`
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid #EDEDF2;
  padding: 10px 5px;
`

const Team = styled(FlexColumnContainer)`
  justify-content: flex-start;
  width: 50%;
`

const NameAndLogo = styled(FlexColumnContainer)`
  width: 100%;
  margin-bottom: 20px;
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
  font-size: 15px;
`

const Score = styled(FlexRowContainer)`
  font-size: 30px;
  width: 15px;
  height: 40px;
`

const Amount = styled(FlexRowContainer)`

`

const AtSymbol = styled.div`
  font-size: 30px;
  margin-bottom: 120px;
`

const GridGameContainer = ({ activeSport, match }) => (
  <Wrapper>
    <Container>
      <GameDate>
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
                <Logo src={'/assets/production/' + activeSport + '-logos/' + truncateTeamName(activeSport, match.AwayTeam) + '.png'} />
              }
            </LogoContainer>
            <TeamName>
              <div>{splitTeamName(match.AwayTeam)[0]}</div>
              <div>{splitTeamName(match.AwayTeam)[1]}</div>
            </TeamName>
          </NameAndLogo>
          <Score>
            {match.AwayScore !== null &&
              <Amount>{match.AwayScore}</Amount>
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
        <AtSymbol> @ </AtSymbol>
        <Team>
          <NameAndLogo>
            <LogoContainer>
              {truncateTeamName(activeSport, match.HomeTeam) && 
                <Logo src={'/assets/production/' + activeSport + '-logos/' + truncateTeamName(activeSport, match.HomeTeam) + '.png'} />
              }
            </LogoContainer>
            <TeamName>
              <div>{splitTeamName(match.HomeTeam)[0]}</div>
              <div>{splitTeamName(match.HomeTeam)[1]}</div>
            </TeamName>
          </NameAndLogo>
          <Score>
            {match.HomeScore !== null &&
              <Amount>{match.HomeScore}</Amount>
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

export default GridGameContainer
