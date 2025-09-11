import React, { useState } from 'react'

const TimeFormat = () => {
    const time = new Date();
    const hour = String(time.getHours());
    const min = String(time.getMinutes());
    const sec = String(time.getSeconds());
    // const abc = String(time.getTimezoneOffset())
    // const [findday,setFindDay] = useState(null);

    let find =""

    if(hour>=5 && hour<12 ){
        find = "Morning"
    }
    else if(hour>=12 && hour<15){
        find ="Afternoon"
    }
    else if(hour>=15 && hour<19){
        find ="Evening"
    }
    else{
        find ="Night"

    }


  return (
    <div>

        <h2>Find Time</h2>

        <p>Time: {hour}:{min}:{sec}</p>
        <p>{find}</p>


      
    </div>
  )
}

export default TimeFormat
