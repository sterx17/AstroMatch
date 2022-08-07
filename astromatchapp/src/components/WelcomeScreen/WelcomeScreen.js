import React from 'react'
import logo from '../../assets/astronaut.png'
import { InputText } from './InputText'
import { StartButton } from './StartButton'
import { WelcomeScreenJS } from './Style'

export const WelcomeScreen = (props) => {
  return (
    <WelcomeScreenJS>
        <img src={logo}></img>
        <h1>Bem vindo ao AstroMatch...</h1>
        <InputText value={props.value} onChange={props.onChange} />
        <StartButton onClick={props.onClick} />
    </WelcomeScreenJS>
  )
}
