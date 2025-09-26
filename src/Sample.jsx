import React, { useState } from 'react'

const Sample = () => {
    const [value1,setvalue1] = useState(' ')
    const [value2,setvalue2] = useState(' ')
    const [result,setResult] = useState(' ')
     

    const num1 = Number(value1)
    const num2 = Number(value2)

    const add = () => {
        setResult(num1 + num2)
    }

    const sub = () => {
        setResult(num1 - num2)
    }

    const multi = () => {
        setResult(num1 * num2)
    }

    const divi = () => {
        setResult(num1 / num2)
    }

    
  return(
    <div>
        <input type="text" value={value1} onChange={(e) => setvalue1(e.target.value)}/>
        <input type="text" value={value2}  onChange={(e) => setvalue2(e.target.value)}/>

        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>

        <button onClick={multi}>x</button>

        <button onClick={divi}>/</button>

        <p>{result}</p>

      
            
        </div>

      
    
  )
}

export default Sample
