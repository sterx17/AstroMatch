import React from 'react'
import refreshButton from '../../assets/refresh.svg'
import userButton from '../../assets/user.svg'
import { UiControllerJS } from './Style'

export const UiControllers = () => {
  return (
    <UiControllerJS>
      <button>
        <img className='cross' src={refreshButton} alt='' />
      </button>
      <button>
        <img src={userButton} alt='' />
      </button>
    </UiControllerJS>
  )
}
