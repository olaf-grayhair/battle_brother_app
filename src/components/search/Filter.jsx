import {React, useState} from 'react';
import style from './search.module.scss'

const Filter = ({setValue}) => {
    // const [state, setstate] = useState('')

    return (
        <div className={style.filter}>
            <select onChange={(e) => setValue(e.target.value)}>
                <option value="all">All</option>
                <option value="combat">Combat</option>
                <option value="lowborn">Lowborn</option>
                <option value="noble">Noble</option>
            </select>
        </div>
    );
}

export default Filter;
