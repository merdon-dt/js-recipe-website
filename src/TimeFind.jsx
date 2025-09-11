import React, { useState } from 'react'

const TimeFind = () => {
    const[time,setTime] = useState('');
    const[show,setShow] = useState(null);

    const findshow = () => {

         if(time>=5 && time<12 ){
        setShow("hey its Morning had a tea")
    }
    else if(time>=12 && time<15){
        setShow("hey its AfterNoon had a lunch")
    }
    else if(time>=15 && time<19){
        setShow("hey its Evening had a tea")
    }
    else{
        setShow("Good Night Sweet Dreams")

    }

    }
  return (
    <div>
        <input type="text" onChange={(e) => setTime(e.target.value) } />

        <button onClick={findshow}>Show</button>
        
        <p>{show}</p>
    </div>
  )
}

export default TimeFind
