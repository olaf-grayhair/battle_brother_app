import { React, useState } from 'react';
import style from './hero.module.scss'
import { heroes } from '../../utils/heroes';

import hitpoints from '../../assets/images/hitpoints.webp'
import fatigue from '../../assets/images/Fatigue.webp'
import initiative from '../../assets/images/Initiative.webp'
import resolve from '../../assets/images/Resolve.webp'
import meleeSkill from '../../assets/images/meleeSkill.webp'
import rangedSkill from '../../assets/images/rangedSkill.webp'
import meleeDefense from '../../assets/images/meleeDefense.webp'
import rangedDefense from '../../assets/images/rangedDefense.webp'
import background from '../../assets/images/Raider2.webp'
import RoundBtn from '../../UI/button/RoundBtn';
import HeroesCard from './HeroesCard';
import AddBtn from '../../UI/button/AddBtn';
import SearchPopup from '../search/SearchPopup';


const Hero = ({ value }) => {
    const [newHeroArray, setNewHeroArray] = useState([]);
    const [popupActive, setPopupActive] = useState(false);

    const stats = [hitpoints, fatigue, initiative, resolve, meleeSkill, rangedSkill, meleeDefense, rangedDefense]

    const heroFilter = (name) => {
        let res = []
        heroes.filter(el => {
            if (name === '') return el
            if (el.name.toLowerCase().includes(name.toLowerCase())) {
                // console.log(name, 'value', el);
                res.push(el)
            }
            else return el
        })
        // console.log(res, 'res');
        return res
    }

    const checkSkill = (value) => {
        let res
        stats.filter(el => {
            if (value === '') return el
            if (el.toLowerCase().includes(value.toLowerCase())) {
                res = el
            }
            else return el
        })
        return res
    }

    const newResult = heroFilter(value)

    const addHeroes = () => {
        if (newResult !== undefined && newResult !== '' || newResult !== []) {
            setNewHeroArray(el => [...el, ...newResult])
            console.log('it is work');
            // setNewHeroArray(el => [...el, newResult])
        }
    }

    const closeBar = (name) => {
        setNewHeroArray(newHeroArray.filter((el, id) =>
            el.name !== name
        ))
    }

    const showPopup = () => {
        setPopupActive(!popupActive)
    }

    // console.log(newResult, 'newResult', heroFilter(value)   , newHeroArray);
    console.log(newHeroArray, 'setNewHeroArray');

    if (newResult.length === 0) {
        return <div className={style.main}>
            <div className={style.left}>
                <AddBtn handleClick={showPopup}/>
            </div>
            <SearchPopup 
                bool={popupActive} 
                heroFilter={heroFilter}
                setNewHeroArray={setNewHeroArray}
                // addHeroes={addHeroes}
            />
        </div>
    }



    const heroStats = newHeroArray.map(el =>
        <HeroesCard
            element={el}
            closeBar={closeBar}
            checkSkill={checkSkill}
            key={Math.random(el)}
        />
    )

    return (
        <div className={style.main}>
            <div className={style.left}>
                <RoundBtn handleClick={addHeroes} />
                <div className={style.hero}>
                    <HeroesCard
                        array={newResult}
                        closeBar={closeBar}
                        checkSkill={checkSkill}
                    />
                </div>
            </div>

            <div className={style.right}>
                <div className={style.hero}>
                    {heroStats === undefined ? '' : heroStats}
                </div>
            </div>
        </div>
    );
}

export default Hero;
