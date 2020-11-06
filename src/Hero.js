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
    position: relative;
    box-shadow: inset 0px 0px 60px 20px rgba(0,0,0,.5);

    &::before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${pr => pr.theme.primaryColor};
        opacity: .3;
        z-index: 1;
    }
    div > h1,h2{
        color: #FFF;
        position: relative;
        z-index: 2;
        text-shadow: 5px 30px rgba(0,0,0,.9)
        padding: 5px;
        
    }
    div h1{
        font-size: 5rem;
        margin-bottom: 5px;
    }
    div h2{
        font-size: 2rem;
    }
` 

export default function Hero(props){
    const {image} = props;



    return(
        <StyleHero style={{backgroundImage: `url('${image}')`}}>
            <DateClock />
        </StyleHero>
    )
}


