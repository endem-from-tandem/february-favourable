import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Navbar from '../components/navbar'
import Home from '../pages/home'
import PageNotFound from '../material-ui/404'

type RoutesType = {
  auth: boolean
}

const Routes: React.FC<RoutesType> = ({ auth }) => {
  return (
    <>
      <Navbar auth={auth} />
      <Switch>
        {!auth ? (
          <Route exact path='/'>
            <Home />
          </Route>
        ) : null}
        <Route>
          <PageNotFound />
        </Route>
        :
      </Switch>
    </>
  )
}

export default Routes
