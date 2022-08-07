import React from 'react'
import { MatchesItemJS, ContainerItem } from './Style'
import messageIcon from '../../assets/message.svg'

export const MatchesItem = (props) => {
  return (
    <MatchesItemJS>
        <ContainerItem>
            <img className='profile' src={props.imagem} />
            <p>{props.nome}</p>
        </ContainerItem>
        <button><img src={messageIcon}/></button>
    </MatchesItemJS>
  )
}
