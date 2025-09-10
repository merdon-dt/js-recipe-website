import React, { useState } from 'react'

const task = () => {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const[result, setResult] = useState(null);

   const answer =() => {
       setResult(num1 +  num2 )
   }

  return (
    <div>
        <input type="number" value={num1} 
        onChange={(e) => setnum1(e.target.value)} />
         <input type="number" value={num2} 
        onChange={(e) => setnum2(e.target.value)} />

        <button onClick={answer}>result</button>

        
      {result !== null && (
        <p>{result}</p>
      ) }
    </div>
  )
}

export default task
