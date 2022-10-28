import { React, useState } from 'react';
import { Link } from "react-router-dom"
import Search from '../search/Search';
import style from './navbar.module.scss'

const Navbar = () => {
    const [value, setValue] = useState('');


    return (
        <div className={style.navbar}>
            <div className={style.container}>
                <ul >
                    <li className={style.item}>
                        <Link to='/'
                            className={style.item}
                        >Home</Link>
                    </li>
                    <li className={style.item}>
                        <Link to='/compare'
                            className={style.item}>Compare</Link>
                    </li>
                    <li>
                        <Link to='/skills' className={style.item} >Skills</Link>
                    </li>
                </ul>
                <Search setValue={setValue} />
            </div>
        </div>
    );
}

export default Navbar;
