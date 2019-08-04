import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Banner, ThreeTeamWidget, SportsScores } from './Components'
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
        <Route exact path='/widget/banner' component={Banner} />
        <Route exact path='/widget/threeteam' component={ThreeTeamWidget} />
        <Route exact path='/widget/scores/:sport' component={SportsScores}/>
      </Switch>
    </Router>
    )
}

export default Main