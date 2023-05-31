import './ConnectingSecondPlayerPage.scss'
// import imgCopy from '../../assets/img/copy.svg'
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect } from "react";
import ButtonIcon from '../../components/UI/button/ButtonIcon/ButtonIcon';
import useSound from 'use-sound';
import audioClick from '../../assets/audio/click_button.mp3';



function ConnectingSecondPlayerPage() {
  // const room = useTypedSelector(state => state.player)
  const { idRoom } = useTypedSelector(state => state.player)
  const currentURL = window.location.href;
  // console.log(currentURL)
  const navigate = useNavigate();
  const currentRoom = localStorage.getItem('idRoom')
  const { sound } = useTypedSelector(state => state.base)
  const [play] = useSound(audioClick)
  // !currentRoom && navigate('/') // пока без проверок хранилища на п2
  

  useEffect(() => {

  }, [])

  const copyText = async (event: MouseEvent) => {
    sound && play()
    const currentURL = window.location.href;
    await navigator.clipboard.writeText(currentURL)
    console.log('текст скопирован (сделать мини-модалку)')
}

  return (
    <div className='connecting_second_player_page_wrap'>
      <h2>Отправьте ссылку на игру второму игроку</h2>
      <div className='sharing_link_input_wrap'>
        <p className='sharing_link'>{currentURL}</p>
        <ButtonIcon icon={'COPY_TEXT'} onClick={copyText}/>
      </div>
    </div>
  );
}

export default ConnectingSecondPlayerPage;