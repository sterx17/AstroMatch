import React from 'react'
import { StartButtonJS } from './Style'

export const StartButton = (props) => {
  return (
    <StartButtonJS>
        <button onClick={props.onClick}>COMEÇAR</button>
    </StartButtonJS>
  )
}
