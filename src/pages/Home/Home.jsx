import { React, useEffect } from 'react';
import Hero from '../../components/hero/Hero';
import {useLocation} from "react-router-dom";
import state from '../../state/state';
import style from './home.module.scss'

const Home = () => {
    const location = useLocation();
    // console.log(location.pathname, 'location');
    useEffect(() => {
        state.addPathName(location.pathname)
    }, [location.pathname]);

    return (
        <div className={style.home}>
            <Hero />
        </div>
    );
}

export default Home;
