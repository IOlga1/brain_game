import { useEffect } from "react";
import { useTypedSelector } from "./useTypedSelector";
import { useDispatch } from "react-redux";
import { INTERNET_OFFLINE, INTERNET_ONLINE } from "../store/reducers/internetReducers";


const useInternet = () => {
    const dispatchAction = useDispatch()
    const isInternetConnect = useTypedSelector((state) => state.internet['internet']['isInternetConnect'])

    useEffect(() => {
        const handleOnline = () => {
            dispatchAction({
                type: INTERNET_ONLINE,
            })
        }

        const handleOffline = () => {
            dispatchAction({
                type: INTERNET_OFFLINE,
            })
        }

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [dispatchAction])

    useEffect(() => {
        if (window.navigator.onLine && !isInternetConnect) {
            dispatchAction({
                type: INTERNET_ONLINE,
            })
        } else if (!window.navigator.onLine && isInternetConnect) {
            dispatchAction({
                type: INTERNET_OFFLINE,
            })
        }
    })

    return {
        isInternetConnect
    }
}

export default useInternet