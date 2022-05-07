import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
  Navigate,
  Outlet,
} from 'react-router-dom'
import { useGlobal } from '../context'
import { Home, Login, Register } from '../pages'

const Routes = () => {
  const { state } = useGlobal()
  const { isAuthenticated } = state

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} redirect='/login' />
          }
        >
          <Route exact path='/' element={<Home />} />
        </Route>
        <Route exact path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Switch>
    </Router>
  )
}

const PrivateRoute = ({ isAuthenticated, redirect }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to={redirect} />
}

export default Routes
