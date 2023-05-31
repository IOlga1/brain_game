import React from 'react'
import useSound from 'use-sound'
import classes from './ButtonMain.module.scss'
import audioClick from '../../../../assets/audio/click_button.mp3'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'



export default function ButtonMain({children, ...props} :any) {
  const [play] = useSound(audioClick)
  const { sound } = useTypedSelector(state => state.base)

  const handlerMouseDown = () => {
    sound && play()
  }

  return (
    <button {...props} className={classes.button_main} onMouseDown={handlerMouseDown}>
        {children}
    </button>
  )
}
