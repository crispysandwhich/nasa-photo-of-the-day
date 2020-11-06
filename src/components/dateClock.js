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
    let time = new Date().toLocaleTimeString();

    const [Ctime, setCtime] = useState(time)

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }

    setInterval(updateTime, 1000)

    return (
        <h2>{time}</h2>
    )
}