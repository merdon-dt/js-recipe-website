import React, { useState } from 'react'

const PrimeNumber = () => {
    const [prime,setPrime] = useState ('');
    const [result,setResult] = useState(null);
    
    const findprime = () => {
        const num = Number(prime);
       
        for(let i=2; i< num; i++ ){
            if(num % i == 0) {
                setResult("Not Prime")
                return;
            }

            setResult("prime")
            
        }


    }


  return (
    <div>

        <h1>Find Prime Numbers</h1>

        <input type="text" onChange={(e) => setPrime(e.target.value)} />

        <button onClick={findprime}>checkPrime</button>

        <p>{result}</p>
      
    </div>
  )
}

export default PrimeNumber
