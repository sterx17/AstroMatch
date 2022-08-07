import { React, useState, useEffect } from 'react'
import { ProfileJS, Bio } from './Style'
import lista from '../../assets/Mocks/Dados.json'


export const Profile = (props) => {



  return (
    <ProfileJS>
      <img src={props.imagem} />
      <Bio>
        <h3>{props.nome}, {props.idade}</h3>
        <p>{props.bio}</p>
      </Bio>
    </ProfileJS>
  )
}
