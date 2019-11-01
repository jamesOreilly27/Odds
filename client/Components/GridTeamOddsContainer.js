import React from 'react'
import styled from 'styled-components'
import { FlexColumnContainer, FlexRowContainer } from './baseComponents'
import { addPlus } from './helpers'

const Wrapper = styled(FlexColumnContainer)`

`

const LineContainer = styled(FlexColumnContainer)`
  margin-top: 15px;
`

const Header = styled.div`
  font-size: 20px;
`

const Content = styled.div`
  font-size: 27px;
`

const GridTeamOddsContainer = ({ lines }) => (
  <Wrapper>
    <LineContainer>
      <Header>
        Moneyline
      </Header>
      <Content>
        {lines.MoneyLine}
      </Content>
    </LineContainer>
    <LineContainer>
      <Header>
        Spread
      </Header>
      <Content>
        {`${addPlus(lines.PointSpread)} (${addPlus(lines.PointSpreadLine)})`}
      </Content>
    </LineContainer>
  </Wrapper>
)

export default GridTeamOddsContainer
