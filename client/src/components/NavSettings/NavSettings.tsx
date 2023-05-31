import { useDispatch } from 'react-redux';
import useSound from 'use-sound';
import ButtonIcon from '../UI/button/ButtonIcon/ButtonIcon';
import './NavSettings.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { BaseActionTypes, baseReducer } from '../../store/reducers/baseReducer';




function NavSettings() {
    const dispatch = useDispatch()
    const { sound } = useTypedSelector(state => state.base)
    
    const setSettings = (event: MouseEvent): void => {
        console.log('SET')
    }

    const setSound = (event: MouseEvent): void => {
        dispatch({type: BaseActionTypes.SET_SOUND})
    }


    return (
        <div className="nav_wrap">

            <ButtonIcon onClick={setSettings} icon={'SETTINGS'} />

            <ButtonIcon onClick={setSound} icon={sound ? 'SOUND' : 'NO_SOUND'} />
            
        </div>
    );
}

export default NavSettings;