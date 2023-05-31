import React from 'react'
import useSound from 'use-sound'
import audioClick from '../../../../assets/audio/click_button.mp3'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

import imgSettings from '../../../../assets/img/settings.svg';
import imgSound from '../../../../assets/img/music-icon.svg';
import imgNoSound from '../../../../assets/img/nomusic-icon.svg';
import imgCopyText from '../../../../assets/img/copy.svg'




enum ICONS {
  'SETTINGS' = imgSettings,
  'SOUND' = imgSound,
  'NO_SOUND' = imgNoSound,
  'COPY_TEXT' = imgCopyText,
}

export default function ButtonIcon({ icon, text, ...props }: any) {
  const [play] = useSound(audioClick)
  const { sound } = useTypedSelector(state => state.base)

  const handlerMouseDown = () => {
    if ((icon !== 'SOUND' && sound) || (icon === 'NO_SOUND' && !sound)) {
      play() 

    }
  }

  return (
    <button {...props} onMouseDown={handlerMouseDown}>
      <img src={ICONS[icon]} width="20px" alt="" />
    </button>
  )
}
