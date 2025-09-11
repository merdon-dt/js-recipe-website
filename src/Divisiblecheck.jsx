import React, { useState } from 'react'

const Divisiblecheck = () => {
   const [num,setNum] = useState("")
   const [result,setResult] = useState(null);
   
   const find = () => {
    const number = Number(num)

    if(number % 3 == 0 && number % 5 == 0){
        setResult("Is divisible")
    }
    else{
        setResult("Not Divisible")
    }
   }

  return (
    <div>
        <h1>find number 3 and 5  divisible</h1>

        <input type="text" onChange={(e) => setNum(e.target.value)} />

        <button onClick={find}>Find</button>

        <p>{result}</p>

      
    </div>
  )
}

export default Divisiblecheck
