import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Navbar from '../components/navbar'
import PageNotFound from '../material-ui/404'

type RoutesType = {
  auth: boolean
}

const Routes: React.FC<RoutesType> = ({ auth }) => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'></Route>
        <Route>
          <PageNotFound />{' '}
        </Route>
      </Switch>
    </>
  )
}

export default Routes
