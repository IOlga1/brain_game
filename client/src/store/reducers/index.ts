import { combineReducers } from 'redux';
import { baseReducer } from './baseReducer';
import internetReducer from './internetReducers';
import { playerReducer } from './playerReducer';


export const rootReducer = combineReducers({
    internet: internetReducer,
    base: baseReducer,
    player: playerReducer,
})

export type RootState = ReturnType<typeof rootReducer>