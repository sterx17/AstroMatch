import React from 'react'
import { InputForm } from './Style'

export const InputText = (props) => {
  return (
    <InputForm>
        <label>Insira seu Nome:</label>
        <input placeholder='Seu nome' value={props.value} onChange={props.onChange}/>
    </InputForm>
  )
}
