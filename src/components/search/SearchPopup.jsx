import { React, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import state from '../../state/state'
import { heroes } from '../../utils/heroes';
import Filter from './Filter';
import style from './search.module.scss'

const SearchPopup = observer(({ bool}) => {
    const [popupActive, setPopupActive] = useState(false);
    const [value, setValue] = useState('')
    const [boolArray, setBoolArray] = useState([])

    const returIcons = (name) => {
        let res = []
        heroes.filter(el => {
            if (name === 'all') {
                return res.push(el)
            }
            if (el.special.toLowerCase().includes(name.toLowerCase())) {
                res.push(el)
            }
            if(name === 'else' && !el.special.toLowerCase().includes('lowborn') && !el.special.toLowerCase().includes('combat')) {
                res.push(el)
            }

        })
        return res
    }

    const onShow = (id) => {
        setBoolArray(boolArray.map((el, index) => 
        index === id 
        ? el = true
        : el
        ))
        // console.log(boolArray, 'boolArray');
    }

    useEffect(() => {
        setBoolArray([])
        let arr = []
        for(let i = 0; i < returIcons(value).length; i++) {
            arr.push(false)
        }
        setBoolArray(el => [...el, ...arr])
        // console.log(boolArray);
    }, [value]);

    const openHero = (name) => {
        state.heroPopup(name)
    }

    const heroesArray = returIcons(value).map((el, index) =>
        <div
            className={style.heroes}
            key={Math.random(el)}
            onMouseEnter={() => onShow(index)}
            // onMouseLeave={() => setPopupActive(false)}
            onClick={() => openHero(el.name)}
            // onClick={() => openHero(el.name)}
        >
            {/* <div className={
                boolArray[index] === index && boolArray[index] === false 
                ? style.tip 
                : style.tipActive}
            >{el.name}</div>
            {console.log(boolArray[index])} */}
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
})

export default SearchPopup;
