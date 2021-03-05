import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Navbar from '../pages/navbar'
import Home from '../pages/home'
import Profile from '../pages/profile'
import PageNotFound from '../material-ui/404'

type RoutesType = {
  auth: any
}

const Routes: React.FC<RoutesType> = ({ auth }) => {
  if (auth === 'prefer') {
    return null
  }
  return (
    <>
      <Navbar auth={auth} />
      <Switch>
        <Route exact path='/'>
          {auth ? null : <Home />}
        </Route>

        <Route
          exact
          path='/id:id'
          render={({ match }) => (
            <Redirect to={`/id${match.params.id}/posts`} />
          )}
        />

        <Route
          path='/id:id'
          render={({ match }) => <Profile id={match.params.id} />}
        />

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  )
}

export default Routes
