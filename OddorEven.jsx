import React, { useState } from 'react'

const OddorEven = () => {
  const [num,setNum] = useState('')
  const [result,setresult] = useState(null)

  const check = () =>{
    if(Number(num) % 2 ===0){
        setresult("even")
    }
    else{
        setresult("odd")
    }
  }
 

  return (
    <div>
        <input type="number" 
        value={num}
        onChange={(e) => setNum(e.target.value)} />
       
      <button onClick={check}>check</button>

      <p>{result}</p>
    </div>
  )
}

export default OddorEven
