import React from 'react'



export default function DateClock(){



    return(
        
         <DateTimeBlock />
        
    )
}




function DateTimeBlock(){

    return(
        <div>
            <DateBlock />
            <TimeBlock />
        </div>
    )
}

function DateBlock(){
    const d = new Date().getDate();
    const m = new Date().getMonth() + 1;
    const y = new Date().getFullYear();
    
    const date = `${m}/${d}/${y} `
    return(
        <h1>{date}</h1>
    )
}

function TimeBlock(){
    const day = new Date()
    return (
        <h2>{day.getHours()} : {day.getMinutes()}</h2>
    )
}