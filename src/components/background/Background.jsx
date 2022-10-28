import React from 'react';
import style from './background.module.scss'
import bg1 from '../../assets/images/bg1.png'
import bg2 from '../../assets/images/bg2.jpg'
import bg3 from '../../assets/images/bg3.jpg'


const Background = ({setBg}) => {
    const hide = (element) => {
        localStorage.removeItem('background');
        setBg(element)
        localStorage.setItem('background', element)
    }

    const bg = [bg1, bg2, bg3]

    const bgImg = bg.map(el => 
    <img className={style.img} 
        src={el} 
        alt={el} 
        key={Math.random()}
        onClick={()=> hide(el)}
    />)

    return (
        <div className={style.background}>
            {bgImg}
        </div>
    );
}

export default Background;
