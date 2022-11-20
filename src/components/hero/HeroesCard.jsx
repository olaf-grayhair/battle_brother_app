import { React, useState, useEffect } from 'react';
import state from '../../state/state'

import style from './hero.module.scss'
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaWindowMinimize } from 'react-icons/fa';
import { FiMaximize } from 'react-icons/fi';

import level from '../../assets/images/Level.png'
import gold from '../../assets/images/gold.png'
import RoundBtn from '../../UI/button/RoundBtn';
import { observer } from 'mobx-react-lite';


const HeroesCard = observer(({ closeBar, checkSkill, array, flagHeroes }) => {
    const [show, setShow] = useState(false);
    const [arrShow, setArrShow] = useState([]);

    useEffect(() => {
        setArrShow(array)
    }, [array, state.compareHeroArray]);


    const hideStats = (name) => {
        setShow(!show)
        setArrShow(arrShow.map(el => el.name === name ? { ...el, bool: show } : el))
    }

    const close = (name) => {
        closeBar(name)
    }

    const addHeroes = (name) => {
        state.addHeroes(name)
    }

    return (
        arrShow.map((element, index) =>
            <div className={style.items} key={Math.random(element)}>
                <div className={style.compare}>
                    {flagHeroes === true
                        ? <RoundBtn
                            handleClick={() => addHeroes(element.name)}
                        />
                        : ''
                    }

                </div>
                <div className={style.window}>
                    {element.bool === true
                        ? <FaWindowMinimize
                            onClick={() => hideStats(element.name)}
                            className={style.minimize}
                        />
                        : <FiMaximize
                            onClick={() => hideStats(element.name)}
                            className={style.maximise}
                        />
                    }

                    <AiFillCloseCircle
                        onClick={() => close(element.name)}
                        className={style.close}
                    />
                </div>
                <div className={style.title}>
                    <div className={style.container}>
                        <img className={style.icon} src={element.img} alt="" />
                        <b>{element.name}</b>
                    </div>
                    <div className={style.container}>
                        <img className={style.smalIcon} src={gold} alt="" />
                        <b>{element.price}</b>
                    </div>
                    <div className={style.container}>
                        <img className={style.smalIcon} src={level} alt="" />
                        <b>{element.level}</b>
                    </div>
                    <div className={style.container}>
                        <b className={style.special}>{element.special}</b>
                        <img className={style.smalIcon}
                            src={element.specialIcon} alt={element.specialIcon} />
                    </div>
                </div>
                <div className={element.bool !== true ? style.skills : style.active}>{element.stats.map(val =>
                    <div className={style.stats} key={Math.random(element)}>
                        <img className={style.skillIcon} src={checkSkill(val.skill)} />
                        <div className={style.bar}>
                            <div className={style.text}>{val.min}</div>
                            /
                            <div className={style.text}>{val.max}</div>
                        </div>
                    </div>
                )}
                </div>
            </div>)
    );
})

export default HeroesCard;
