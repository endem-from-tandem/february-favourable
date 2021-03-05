import React from 'react'
import { Route } from 'react-router-dom'

import Posts from '../pages/profile/posts'

const ProfileRoutes = () => {
  return (
    <>
      <Route path='/:id/posts'>
        <Posts />
      </Route>
      <Route path='/:id/images'>
        <div>I M A G E S</div>
      </Route>
      <Route path='/:id/friends'>
        <div>F R I E N D S</div>
      </Route>
    </>
  )
}

export default ProfileRoutes
