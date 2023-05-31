
export enum PlayerActionTypes {
    ADD_NEW_ROOM = 'ADD_NEW_ROOM',
}

interface IPlayerState {
    idPlayer1: number | string;
    idPlayer2: number | string;
    idRoom: number | string;
}

interface IPlayerAction {
    type: any;
    payload?: any;
}

const initialState: IPlayerState = {
    idPlayer1: '',
    idPlayer2: '',
    idRoom: '',
}


export const playerReducer = (state: IPlayerState = initialState, action: IPlayerAction): IPlayerState => {
    switch (action.type) {
        case PlayerActionTypes.ADD_NEW_ROOM:
            return {
                ...state,
                idPlayer1: action.payload.idPlayer1,
                idRoom: action.payload.idRoom,
            }
        default:
            return { ...state }
    }
}