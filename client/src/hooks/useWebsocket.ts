import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { WS_CLOSED, WS_OPENED } from "../store/reducers/internetReducers";
import { useTypedSelector } from "./useTypedSelector";

const wsUrl = 'ws://localhost:5000'

const useWebsocket = () => {
    const dispatchAction = useDispatch()
    const { wsOpened } = useTypedSelector((state) => state.internet['ws'])
    const wsRef: any = useRef()

    const onMessage = (msg: any) => {
        console.log(msg)
    }

    const onOpen = () => {
        console.log('WS client OPENED')
    }

    const onClose = () => {
        console.log('WS client CLOSED')
    }

    const onError = () => {
        console.log('WS client errored')
    }

    const initWebsocket = () => {
        if (wsRef.current) {
            wsRef.current.close()
        }
        wsRef.current = new WebSocket(wsUrl)
        // console.log(wsRef.current)
        dispatchAction({ type: WS_OPENED })

    }

    const endWebsocket = () => {
        if (wsRef.current) {
            wsRef.current.close()
            onClose()
            wsRef.current.removeEventListener('message', onMessage)
            wsRef.current.removeEventListener('open', onOpen)
            wsRef.current.removeEventListener('close', onClose)
            wsRef.current.removeEventListener('error', onError)
            wsRef.current = null  // Надо ли ? Надо чтоб end функция не совершала лишние действия при каждом клике в холостую
            if (wsOpened) dispatchAction({ type: WS_CLOSED })
        }
    }

    useEffect(() => {
        if (wsOpened && wsRef.current) {
            wsRef.current.addEventListener('message', onMessage)
            wsRef.current.addEventListener('open', onOpen)
            wsRef.current.addEventListener('close', onClose)
            wsRef.current.addEventListener('error', onError)
        }
    }, [wsOpened])

    return {
        ws: wsRef.current,
        initWebsocket,
        endWebsocket
    }
}

export default useWebsocket