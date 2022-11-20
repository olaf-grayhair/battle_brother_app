import {React, useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import { observer } from 'mobx-react-lite';
import state from '../../state/state'
import style from './search.module.scss'

const Search = observer(({setValue}) => {
    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const handleClick = () => {
        // state.setSearchName(search)
        state.heroFilter(search)
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
})

export default Search;
