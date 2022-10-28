import { React, useState } from 'react';
import Background from '../components/background/Background';
import style from './home.module.scss'
import bg1 from '../assets/images/bg1.png'
import Hero from '../components/hero/Hero';
import Search from '../components/search/Search';

const Home = () => {
    const [bg, setBg] = useState('');
    const [value, setValue] = useState('');

    const bgStorage = localStorage.getItem('background')

    return (
        <div className={style.home}
            style={{ backgroundImage: `url(${bgStorage})` === '' ? bg1 : `url(${bgStorage})` }}
        >
            <div className={style.header}>
                <div className={style.container}>
                    <Search setValue={setValue} />
                </div>
            </div>
            <Background setBg={setBg} />
            <Hero value={value} />
        </div>
    );
}

export default Home;
