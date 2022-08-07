import React from 'react'
import { ButtonJS } from './Style'

export const Button = (props) => {
  return (
    <ButtonJS onClick={props.botaoEscolhaPositiva}>
      <img src={props.imagem} alt='Botão de Recusar Perfil'/>
    </ButtonJS>
  )
}
