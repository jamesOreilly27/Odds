import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Banner } from './Components'

const Main = () => {
  return (
    <Router>
      <Switch>
        <Banner />
      </Switch>
    </Router>
    )
}

export default Main