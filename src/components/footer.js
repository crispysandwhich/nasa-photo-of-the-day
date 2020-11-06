import React from 'react'
import style from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "../index.css";





const StyleFooter = style.div`
    background-color: rgba(0,0,0,.95);
    width: 100%;

    footer{
        max-width: 1450px;
        margin: 0 auto;
        padding: 15px;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    
` 




export default function FooterBabe(props){

    const {title, explanation}  = props;


    return(
        <StyleFooter>
            <footer>
                <div className="gadget">
                        <p>{explanation}</p>
                </div>
                <div className="content">
                    <h2>NASA API</h2>
                    <p>{title}</p>
                    <h6>Made with <FontAwesomeIcon icon="heart-broken" /> <a href="https://www.ghostieve.com" target="_blank" rel="noopener noreferrer">de_gentleman</a> </h6>
                </div>
                <ul className="social">
                    <li>
                        <a href="https://twitter.com/lyub12"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UCsjJ3UyuSIbZTtaxaL-R6wQ"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/lyub_kovbel/"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/crispysandwhich"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                    </li>
                </ul>
            </footer>
        </StyleFooter>
    )
}
