import React, { useState } from 'react'

const TimeFind = () => {
    const[time,setTime] = useState('');
    const[show,setShow] = useState(null);

    const findshow = () => {

       const times = time.split(":").map(Number);

        if (times.length !== 1) {
            setShow("Please enter in HH:MM format");
            return;
        }

        const hour = times[0];

     
    
   if(hour>=5 && hour<12 ){
        setShow("hey its Morning had a tea")
    }
    else if(hour>=12 && hour<15){
        setShow("hey its AfterNoon had a lunch")
    }
    else if(hour>=15 && hour<19){
        setShow("hey its Evening had a tea")
    }
    else if( hour>=1 && hour<5 || hour>=19 && hour<=24){
        setShow("Good Night Sweet Dreams")

    }
    else{
        setShow("Please enter the correct time")
    }

    }
  return (
    <div>
        <h1>Find Time</h1>
        <input type="text" onChange={(e) => setTime(e.target.value) } />

        <button onClick={findshow}>Show</button>
        
        <p>{show}</p>
    </div>
  )
}

export default TimeFind
