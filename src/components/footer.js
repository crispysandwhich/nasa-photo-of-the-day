import React from 'react'
// import style from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function FooterBabe(props){

    const title  = props.title;


    return(
        <footer>
           <div></div>
           <div>
                <h2>NASA API</h2>
                <p>{title}</p>
           </div>
           <ul>
               <li>
                   <a href="https://twitter.com/lyub12">twitter</a>
               </li>
               <li>
                   <a href="https://www.youtube.com/channel/UCsjJ3UyuSIbZTtaxaL-R6wQ">youtube</a>
               </li>
               <li>
                   <a href="https://www.instagram.com/lyub_kovbel/">instagram</a>
               </li>
               <li>
                   <a href="https://github.com/crispysandwhich"><FontAwesomeIcon icon={['fab', 'github']} /></a>
               </li>
           </ul>
        </footer>
    )
}
