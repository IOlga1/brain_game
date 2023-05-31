import {createStore} from 'redux';
import { rootReducer } from './reducers'


export const store: any = createStore(rootReducer)