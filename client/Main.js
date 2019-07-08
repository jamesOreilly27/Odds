import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Main = () => {
  return (
    <Router>
      <Switch>
        <h1>Hello World</h1>
      </Switch>
    </Router>
    )
}

export default Main