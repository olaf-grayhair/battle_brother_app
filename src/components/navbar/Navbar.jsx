import { React, useState } from 'react';
import { Link } from "react-router-dom"
import Search from '../search/Search';
import style from './navbar.module.scss'

const Navbar = () => {
    const [value, setValue] = useState('');


    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <Search setValue={setValue} />
                <ul >
                    <li className={style.item}>
                        <Link to='/'
                            className={style.item}
                        >Home</Link>
                    </li>
                    <li className={style.item}>
                        <Link to='/heroes'
                            className={style.item}>heroes</Link>
                    </li> 
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
