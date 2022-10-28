import React from 'react';
import style from './btn.module.scss'
import { GoPlus } from 'react-icons/go';


const AddBtn = ({handleClick}) => {
    return (
        <button className={style.addBtn} 
            onClick={handleClick}
            >
            <GoPlus size={48} />
        </button>
    );
}

export default AddBtn;
