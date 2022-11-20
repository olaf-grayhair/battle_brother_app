import { React, useState, useEffect } from 'react';
import { observer } from "mobx-react-lite"
import state from '../../state/state'
import HeroesCard from './HeroesCard';
import AddBtn from '../../UI/button/AddBtn';
import SearchPopup from '../search/SearchPopup';
import style from './hero.module.scss'



const Hero = observer(() => {
    const [popupActive, setPopupActive] = useState(false);

    useEffect(() => {
        state.setHerosArray()
    }, [state.searchArray, state.popupArray, state.compareHeroArray]);

    const showPopup = () => {
        setPopupActive(!popupActive)
    }

    const closeRightBar = (name) => {
        state.closeRight(name)
    }

    const closeLeftBar = (name) => {
        state.closeLeft(name)
    }

    const noDuble = () => {
        const table = {};
        return state.compareHeroArray.filter(({ name }) => (!table[name] && (table[name] = 1)));
    }

    return (
        <div className={style.main}>
            <div className={style.popupBlock}>
                <AddBtn handleClick={showPopup} />
                <SearchPopup
                    bool={popupActive}
                    heroFilter={state.heroFilter}
                />
            </div>

            <div className={style.left}>
                {state.setHeroes.length === 0
                    ? ''
                    : <div className={style.hero}>
                        <HeroesCard
                            array={state.setHeroes}
                            closeBar={closeLeftBar}
                            checkSkill={state.checkSkill}
                        />
                    </div>
                }
            </div>

            <div className={style.right}>
                <div className={style.hero}>
                    {state.compareHeroArray.length < 1
                        ? ''
                        :
                        <HeroesCard
                            array={noDuble()}
                            closeBar={closeRightBar}
                            checkSkill={state.checkSkill}
                        />
                    }
                </div>
            </div>
        </div>
    );
})

export default Hero;
