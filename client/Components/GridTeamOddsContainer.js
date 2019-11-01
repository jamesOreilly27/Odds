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

const Content = styled(FlexColumnContainer)`
  font-size: 27px;
`

const Juice = styled.div`
  font-size: 20px;
`

const GridTeamOddsContainer = ({ lines }) => (
  <Wrapper>
    <LineContainer>
      <Header>
        Moneyline
      </Header>
      <Content>
        {`${addPlus(lines.MoneyLine)}`}
      </Content>
    </LineContainer>
    <LineContainer>
      <Header>
        Spread
      </Header>
      <Content>
        <div>
          {addPlus(lines.PointSpread)}
        </div>
        <Juice>
          {`(${addPlus(lines.PointSpreadLine)})`}
        </Juice>
      </Content>
    </LineContainer>
  </Wrapper>
)

export default GridTeamOddsContainer
