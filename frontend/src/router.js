import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/signup' component={Signup}></Route>
    </Switch>
  </Router>
)

export default AppRouter