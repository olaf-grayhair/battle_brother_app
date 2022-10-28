import React from 'react';
import style from './btn.module.scss'
import { GoPlus } from 'react-icons/go';

const RoundBtn = ({handleClick}) => {
    return (
        <button className={style.roundBtn} 
            onClick={handleClick}>
            <GoPlus size={28} />
        </button>
    );
}

export default RoundBtn;
