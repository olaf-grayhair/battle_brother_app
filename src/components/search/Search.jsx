import {React, useState} from 'react';
import style from './search.module.scss'
import { FiSearch } from 'react-icons/fi';

const Search = ({setValue}) => {
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = () => {
        setValue(search)
        setSearch('')
    }
    console.log(search, 'search');
    return (
        <div className={style.search}>
            <input 
                className={style.searchBar}
                type="text" 
                value={search} 
                onChange={onChange} 
            />
            <FiSearch 
                color='black' 
                className={style.icon}
                onClick={handleClick}
            />
        </div>
    );
}

export default Search;
