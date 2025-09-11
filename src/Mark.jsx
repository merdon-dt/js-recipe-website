import React, { useState } from 'react'

const Mark = () => {
    const [mark,setMark] = useState('')
    const [result,setResult] = useState(null)

    const checkk = () => {
        const m1 = Number(mark)

        if(m1 >=90){
            setResult("A grade")
        }
        else if (m1 >=75){
            setResult("B grade")
        }
         else if (m1 >=50){
            setResult("B grade")
        }
         else{
            setResult("fail")
        }
    }

  return (
    <div>

        <input type="text" onChange={(e) => setMark(e.target.value)} />
        <button onClick={checkk}>Check</button>

        <p>{result}</p>
      
    </div>
  )
}

export default Mark
