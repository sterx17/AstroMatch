import React from 'react'
import { UiControllers } from '../MultiPage/UiControllers'
import { Profile } from './Profile'
import { Button } from './Button'

export const ChoiceScreen = () => {
  return (
    <div>
        <Profile />
        <div>
          <Button />
          <Button />
          <Button />  
        </div>
        <UiControllers />
    </div>
  )
}
