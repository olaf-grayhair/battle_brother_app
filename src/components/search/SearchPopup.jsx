import { React, useState } from 'react';
import style from './search.module.scss'
import { heroes } from '../../utils/heroes';
import Filter from './Filter';

const SearchPopup = ({ bool, heroFilter, addHeroes, setNewHeroArray }) => {
    const [popupActive, setPopupActive] = useState(false);
    const [value, setValue] = useState('')

    const onShow = (name) => {
        let res = heroes.map(el => el.name === name ? setPopupActive(true) : setPopupActive(false))

        return res.name
    }

    const returIcons = (name) => {
        let res = []
        heroes.filter(el => {
            if (name === 'all') {
                return res.push(el)
            }
            if (el.special.toLowerCase().includes(name.toLowerCase())) {
                res.push(el)
            }
        })
        return res
    }

    const openHero = (name) => {
        let arr = heroFilter(name)
        // addHeroes()
        setNewHeroArray(el => [...el, ...arr])
        console.log(name);
        console.log(arr, 'arr');
    }

    console.log(returIcons(value), 'searchPopup', value);

    const heroesArray = returIcons(value).map(el =>
        <div
            className={style.heroes}
            key={Math.random(el)}
            // onMouseEnter={() => onShow(el.name)}
            // onMouseLeave={() => setPopupActive(false)}
            onClick={() => openHero(el.name)}
        >
            {/* <div className={popupActive === false ? style.tip : style.tipActive}>{el.name}</div> */}

            {/* <div className={style.tip}>{el.name}</div> */}
            <img className={style.icon} src={el.img} alt={el.img} />
        </div>
    )

    return (
        <div className={bool === true ? style.active : style.popup}>
            <Filter setValue={setValue} />
            <div className={style.wrap}>
                {heroesArray}
            </div>
        </div>
    );
}

export default SearchPopup;
