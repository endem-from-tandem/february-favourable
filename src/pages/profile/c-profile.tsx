import React from 'react'
import Profile from './profile'

type CProfileType = {
  id: any
}

const ProfileContainer: React.FC<CProfileType> = ({ id }) => {
  return <Profile />
}

export default ProfileContainer
