import React from 'react'
import logo from '../../assets/astronaut.png'
import cross from '../../assets/cross.png'
import heart from '../../assets/heart.png'
import { ButtonContainer } from './Style'
import { UiControllers } from '../MultiPage/UiControllers'
import { Profile } from './Profile'
import { Button } from './Button'

export const ChoiceScreen = (props) => {
  return (
    <div>
        <Profile imagem={props.imagem} nome={props.nome} idade={props.idade} bio={props.bio} />
        <ButtonContainer>
          <Button imagem={cross} />
          <Button imagem={logo}/>
          <Button botaoEscolhaPositiva={props.botaoEscolhaPositiva} imagem={heart}/>  
        </ButtonContainer>
        <UiControllers onClick={props.onClick} />
    </div>
  )
}
