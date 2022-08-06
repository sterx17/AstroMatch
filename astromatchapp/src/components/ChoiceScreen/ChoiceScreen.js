import React from 'react'
import logo from '../../assets/astronaut.png'
import cross from '../../assets/cross.png'
import heart from '../../assets/heart.png'
import { ButtonContainer } from './Style'
import { UiControllers } from '../MultiPage/UiControllers'
import { Profile } from './Profile'
import { Button } from './Button'

export const ChoiceScreen = () => {
  return (
    <div>
        <Profile />
        <ButtonContainer>
          <Button imagem={cross} />
          <Button imagem={logo}/>
          <Button imagem={heart}/>  
        </ButtonContainer>
        <UiControllers />
    </div>
  )
}
