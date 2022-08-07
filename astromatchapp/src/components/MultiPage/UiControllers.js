import React from 'react'
import refreshButton from '../../assets/refresh.svg'
import userButton from '../../assets/user.svg'
import { UiControllerJS } from './Style'

export const UiControllers = (props) => {
  return (
    <UiControllerJS>
      <button>
        <img className='cross' src={refreshButton} alt='Botão de Recomeçar os Matches' />
      </button>
      <button onClick={props.onClick}>
        <img src={userButton} alt='Botão Ir para Tela de Matches do Usuário' />
      </button>
    </UiControllerJS>
  )
}
