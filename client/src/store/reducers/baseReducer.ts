

export enum BaseActionTypes {
    SOUND_OFF = 'SOUND_OFF',
    SOUND_ON = 'SOUND_ON',
    SET_SOUND = 'SET_SOUND',
}


interface IBaseState {
    sound: boolean;
}

interface IBaseAction {
    type: string;
    payload?: any;
}

const initialState: IBaseState = {
    sound: true,
}


export const baseReducer = (state: IBaseState = initialState, action: IBaseAction): IBaseState => {
    switch (action.type) {
        case BaseActionTypes.SET_SOUND:
            return { ...state, sound: !state.sound }
        default:
            return { ...state }
    }
}