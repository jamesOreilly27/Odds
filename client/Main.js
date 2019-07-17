import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Banner, ThreeTeamWidget } from './Components'
import styled from 'styled-components'

const BannerWrapper = styled.div`
@media(max-width: 768px) {
  display: none;
}
`

const Main = () => {
  return (
    <Router>
      <Switch>
        {/* <BannerWrapper>
          <Banner />
        </BannerWrapper> */}
        <ThreeTeamWidget />
      </Switch>
    </Router>
    )
}

export default Main