import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from 'react-router-dom';
import { PlayerActionTypes } from '../../store/reducers/playerReducer';
import { internetReducer } from '../../store/reducers/internetReducers';
import useWebsocket from "../../hooks/useWebsocket";
import useInternet from "../../hooks/useInternet";
import ButtonMain from "../../components/UI/button/ButtonMain/ButtonMain";
import ButtonIcon from "../../components/UI/button/ButtonIcon/ButtonIcon";



function HomePage() {
  // const { isInternetConnect } = useInternet()
  const { isInternetConnect } = useTypedSelector(state => state.internet['internet'])
  console.log(isInternetConnect)
  const { ws, initWebsocket, endWebsocket } = useWebsocket() // возможно нужно в главный компонент и при переходе к след странице будут проблемы
  const { wsOpened } = useTypedSelector(state => state.internet['ws']) 
  const navigate = useNavigate();
  const [isSend, setIsSend] = useState(false)



  useEffect(() => {
    console.log('wsOpened: ' + wsOpened)
      // currentRoom && navigate('/' + currentRoom)
  })

  const handlerStart = () => {
    console.log('start')

    if (isSend) return
    initWebsocket()
    setIsSend(!isSend)
    console.log('send')
  }



  return (
    <div className="home_page_wrap">
      НАПОЛНЕНИЕ
      <button type="button" onClick={initWebsocket}>open</button>
      <button type="button" onClick={endWebsocket}>close</button>
      {isInternetConnect ? <p className="status_online">INTERNET ONline</p> : <p className="status_offline">INTERNET OFFline</p>}
      {wsOpened ? <p className="status_online">WebSocket ONline</p> : <p className="status_offline">WebSocket OFFline</p>}
      <br/><br/>
      {wsOpened && isInternetConnect ? <p className="status_online">ALL ONline</p> : <p className="status_offline">ALL OFFline</p>}

      <ButtonMain onClick={handlerStart}>Start</ButtonMain>

    </div>
  );
}

export default HomePage;