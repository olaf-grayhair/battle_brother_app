import {React, useEffect} from 'react';
import Stats from '../../components/list/Stats';
import state from '../../state/state';
import {useLocation} from "react-router-dom";
import style from './heroes.module.scss'

const Heroes = () => {
    const location = useLocation();

    useEffect(() => {
        state.addPathName(location.pathname)
    }, [location.pathname]);

    return (
        <div className={style.list}>
            <Stats/>
        </div>
    );
}

export default Heroes;
