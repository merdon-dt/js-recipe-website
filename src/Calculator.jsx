import React, { useState } from 'react'

const Calculator = () => {
     const [num1, setnum1] = useState("");
     const [num2, setnum2] = useState("");
     const [response,setResponse] = useState(null)
     const [result,setResult] = useState(null);

     function calculate (num1,num2,fun){
      const response ={
        add: (a,b) => a+b,
        sub:(a,b) => a-b,
        multi:(a,b) => a*b,
        div:(a,b) => a/b
      }
      return respone[fun](num1,num2)
     }
     const checkk = () => {
        const n1= Number(num1);
        const n2 = Number(num2);
        setResult(calculate(n1,n2,response))
     }

  return (
    <div>
        <h1>Calculator</h1>
         <input type="number" value={num1} 
        onChange={(e) => setnum1(e.target.value)} />
         <input type="number" value={num2} 
        onChange={(e) => setnum2(e.target.value)} />

        <select name="" id="" onChange={(e) => setResponse(e.target.value)}>
            <option value=""> Select</option>
            <option value="add">Add</option>

            <option value="sub">Sub</option>

            <option value="multi">Multi</option>
             <option value="div">Divi</option>


        </select>
        
        <button onClick={checkk}>Find</button>

        <p>{result}</p>
      
    </div>
  )
}

export default Calculator
