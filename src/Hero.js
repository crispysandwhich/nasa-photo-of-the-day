import React from 'react'
import style from 'styled-components';
import DateClock from './components/dateClock'


const StyleHero = style.div` 
    background: no-repeat center center/cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
` 

export default function Hero(props){
    const image = props.image;

    console.log(image)


    return(
        <StyleHero style={{backgroundImage: `url('${image}')`}}>
            <DateClock />
        </StyleHero>
    )
}


