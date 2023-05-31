import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom'
import './style/App.scss';
import { Layout } from './components/Layout/Layout';
import ConnectingSecondPlayerPage from './pages/ConnectingSecondPlayerPage/ConnectingSecondPlayerPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import DataService from "./DataService";
import useInternet from "./hooks/useInternet";
import useWebsocket from "./hooks/useWebsocket";






function App() {

  const { isInternetConnect } = useInternet()
  // const { ws, initWebsocket, endWebsocket } = useWebsocket({ isInternetConnect })

  // useEffect(() => {
  //   // console.log('isInternetConnect: ' + isInternetConnect)
  // }, [isInternetConnect])




  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout/>}>
          <Route index element={<HomePage 
                                          // ws={ws}
                                          // initWebsocket={initWebsocket}
                                          // endWebsocket={endWebsocket}
                                          />} />
          <Route path=':room' element={<ConnectingSecondPlayerPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
