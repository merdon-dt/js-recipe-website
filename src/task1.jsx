import React, { use, useState } from 'react'

const task = () => {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [result,setResult] = useState(null);

  const n1 = Number(num1);
  const n2 = Number(num2);

  return (
    <div>
        <input type="number" value={num1} 
        onChange={(e) => setnum1(e.target.value)} />
         <input type="number" value={num2} 
        onChange={(e) => setnum2(e.target.value)} />
    
    <button onClick={() => setResult(n1+n2)}>add</button>
    <button onClick={() => setResult(n1-n2)}>sub</button>

    <button onClick={() => setResult(n1*n2)}>multi</button>

    <button onClick={() => setResult(n1/n2)}>div</button>

        

        
     
        <p>{result}</p>
    
    </div>
  )
}

export default task
