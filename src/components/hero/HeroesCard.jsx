import React from 'react';
import style from './hero.module.scss'
import { AiFillCloseCircle } from 'react-icons/ai';


import level from '../../assets/images/Level.png'
import gold from '../../assets/images/gold.png'


const HeroesCard = ({ element, closeBar, checkSkill, array }) => {

    // array.map(element => <div className={style.items} key={Math.random(element)}>
    //     <div className={style.title}>
    //         <div className={style.container}>
    //             <img className={style.icon} src={element.img} alt="" />
    //             <b>{element.name}</b>
    //         </div>
    //         <div className={style.container}>
    //             <img className={style.smalIcon} src={gold} alt="" />
    //             <b>{element.price}</b>
    //         </div>
    //         <div className={style.container}>
    //             <img className={style.smalIcon} src={level} alt="" />
    //             <b>{element.level}</b>
    //         </div>
    //         <div className={style.container}>
    //             <b className={style.special}>{element.special}</b>
    //             <img className={style.smalIcon}
    //                 src={element.specialIcon} alt="" />
    //         </div>
    //         <AiFillCloseCircle
    //             onClick={() => closeBar(element.name)}
    //             className={style.close}
    //         />
    //     </div>
    //     <div className={style.skills}>{element.stats.map(val =>
    //         <div className={style.stats} key={Math.random(element)}>
    //             <img className={style.icon} src={checkSkill(val.skill)} />
    //             <div className={style.bar}>
    //                 <div className={style.text}>{val.min}</div>
    //                 /
    //                 <div className={style.text}>{val.max}</div>
    //             </div>
    //         </div>
    //     )}
    //     </div>
    // </div>)
    console.log(element, 'heroesCard');
    return (
        array.map(element =>
            <div className={style.items} key={Math.random(element)}>
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
                            src={element.specialIcon} alt="" />
                    </div>
                    <AiFillCloseCircle
                        onClick={() => closeBar(element.name)}
                        className={style.close}
                    />
                </div>
                <div className={style.skills}>{element.stats.map(val =>
                    <div className={style.stats} key={Math.random(element)}>
                        <img className={style.icon} src={checkSkill(val.skill)} />
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
}

export default HeroesCard;
