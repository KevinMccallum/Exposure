import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'
import Create from './pages/Create'
import PostDetail from './pages/PostDetail'


const AppRouter = () => (
  <Router>
    <NavBar>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/login' component={Login}></Route>
        <PrivateRoute exact path='/profile' component={Profile}></PrivateRoute>
        <PrivateRoute exact path='/create' component={Create}></PrivateRoute>
        <PrivateRoute exact path='/post/:id' component={PostDetail}></PrivateRoute>
      </Switch>
    </NavBar>
  </Router>
)

export default AppRouter