import React, { useState } from 'react'

const Calculator = () => {
     const [num1, setnum1] = useState("");
     const [num2, setnum2] = useState("");
     const [response,setResponse] = useState(null)
     const [result,setResult] = useState(null);

     const checkk = () => {
        const n1= Number(num1);
        const n2 = Number(num2)

        if(response === "add"){
            setResult(n1+n2)
        }
        else if(response === "sub"){
            setResult(n1-n2)
        }
         else if(response === "sub"){
            setResult(n1-n2)
        }
         else if(response === "multi"){
            setResult(n1*n2)
        }
         else if(response === "div"){
            setResult(n1/n2)
        }

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
             <option value="div">
                Divi</option>


        </select>
        
        <button onClick={checkk}>Find</button>

        <p>{result}</p>
      
    </div>
  )
}

export default Calculator
