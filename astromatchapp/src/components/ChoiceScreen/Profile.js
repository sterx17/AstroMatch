import React from 'react'
import { ProfileJS, Bio } from './Style'
import lista from '../../assets/Mocks/Dados.json'

export const Profile = () => {
  return (
    <ProfileJS>
      <img src={lista.profile.photo} />
      <Bio>
        <h3>{lista.profile.name}, {lista.profile.age}</h3>
        <p>{lista.profile.bio}</p>
      </Bio>
    </ProfileJS>
  )
}
