import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Navbar from '../components/navbar'

type RoutesType = {
  auth: boolean
}

const Routes: React.FC<RoutesType> = ({ auth }) => {
  return (
    <Switch>
      <Navbar />
      <Route></Route>
    </Switch>
  )
}

export default Routes
