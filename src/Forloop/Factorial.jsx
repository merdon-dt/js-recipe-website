import React, { useEffect, useState } from 'react'

const Factorial = () => {
    const[fact,Setfact] = useState("");

     const factorial = (n) => {
        let add = 1;
        if(n<1){
            return ""
        }
        
        for(let i=1;i<=n;i++){
           add *=i
         } 

         return add;

     }

     
     
  return (
    <div>
        <h3>FIND FACTORIAL</h3>
        <input type="text" value={fact} onChange={(e) =>Setfact(e.target.value)} />
        <p>Factorial number:{factorial(fact)}</p>
      
    </div>
  )
}

export default Factorial
