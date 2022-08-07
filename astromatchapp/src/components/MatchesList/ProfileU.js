import React from 'react'
import userLogo from '../../assets/user.svg'
import { ProfileUJS } from './Style'

export const ProfileU = () => {
  return (
    <ProfileUJS>
        <img src={userLogo}/>
        <p>Usuário</p>
    </ProfileUJS>
  )
}
