import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { GridOddtypeSection, ScoresContainer } from '../Components'
import { truncateTeamName, processDayMonthTime, splitTeamName, finalOrInProgress, didBetWin, didBetCover, isMoneylinePush, isSpreadPush } from './helpers'

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
  height: 300px;
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

const NameAndLogo = styled(FlexColumnContainer)`
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

const AtSymbol = styled.div`
  font-size: 15px;
`

const GridSection = styled(FlexRowContainer)`
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
`

const OddsSection = styled(FlexColumnContainer)`
  justify-content: space-around;
  height: 125px;
  width: 100%;
  margin-top: 5px;
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
        <GridSection>
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
          <AtSymbol>
            @
          </AtSymbol>
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
        </GridSection>
        <ScoresContainer homeScore={match.HomeScore} awayScore={match.AwayScore} />
        <OddsSection>
          <GridOddtypeSection
            homeLine={match.MoneyLineHome}
            awayLine={match.MoneyLineAway}
            header={'Moneyline'}
            homeScore={match.HomeScore}
            awayScore={match.AwayScore}
          />
          <GridOddtypeSection 
            homeLine={match.PointSpreadHome}
            awayLine={match.PointSpreadAway}
            header={'Spread'}
            homeSpreadJuice={match.PointSpreadHomeLine}
            awaySpreadJuice={match.PointSpreadAwayLine}
            homeScore={match.HomeScore}
            awayScore={match.AwayScore}
          />
          <GridOddtypeSection
            homeLine={match.OverLine}
            awayLine={match.UnderLine}
            header={'Total'}
            homeScore={match.HomeScore}
            awayScore={match.AwayScore}
            total={match.TotalNumber}
          />
        </OddsSection>
      </Container>
    </Wrapper>
  )
}

export default GridGameContainer
