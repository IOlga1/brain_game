export const INTERNET_ONLINE = 'INTERNET_ONLINE'
export const INTERNET_OFFLINE = 'INTERNET_OFFLINE'

export const WS_CONNECTING = 'WS_CONNECTING'
export const WS_OPENED = 'WS_OPENED'
export const WS_CLOSED = 'WS_CLOSED'


interface IInitialConnectState {
    internet: {
        isInternetConnect: boolean;
    };
    ws: {
        wsConnecting: boolean;
        wsOpened: boolean;
    }
}

const initialConnectState: IInitialConnectState = {
    internet: {
        isInternetConnect: false
    },
    ws: {
        wsConnecting: false,
        wsOpened: false
    }
}

export const internetReducer = (state = initialConnectState, action: any) => {
    switch (action.type) {
        case INTERNET_ONLINE:
            return { ...state, internet: { isInternetConnect: true } }
        case INTERNET_OFFLINE:
            return { ...state, internet: { isInternetConnect: false } }

        case WS_CONNECTING:
            return { ...state, ws: { wsConnecting: true } }
        case WS_OPENED:
            return { ...state, ws: { wsConnecting: false, wsOpened: true } }
        case WS_CLOSED:
            return { ...state, ws: { wsConnecting: false, wsOpened: false } }
        default:
            return { ...state }
    }
}

export default internetReducer