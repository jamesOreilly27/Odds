import React from 'react'
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

const splitName = string => string.split(' ')

const chooseSport = props => {
  if(props.sport === 'golf') {
    return (
      <Wrapper>

        <GolfNameContainer>
          <div>{splitName(props.details.Participant.Name)[0]}</div>
          <div>{splitName(props.details.Participant.Name)[1]}</div>
        </GolfNameContainer>

        <GolfLineContainer>
          {`+${props.details.MoneyLineHome}`}
        </GolfLineContainer>
        
      </Wrapper>
    )
  }
}

const Match = props => chooseSport(props)

export default Match
