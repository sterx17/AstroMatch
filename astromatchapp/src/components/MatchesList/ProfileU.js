import React from 'react'
import userLogo from '../../assets/user.svg'
import { ProfileUJS } from './Style'

const recuperaLocal = () => {
  let user = localStorage.getItem('aluno')
  return user
}

export const ProfileU = (props) => {

  console.log(props.user)
  return (
    <ProfileUJS>
        <img src={userLogo}/>
        <p>{recuperaLocal()}</p>
    </ProfileUJS>
  )
}
