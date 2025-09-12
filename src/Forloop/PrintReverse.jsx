import React, { useEffect, useState } from 'react'

const PrintReverse = () => {
    const [num,setnum] = useState([])
    useEffect(() => {
           const reverse = [];

    for(let i=10; i>=1;i--){
        reverse.push(i)
    }
    setnum(reverse)
    },[])
   
  return (
    <div>
        <h3>PRINT REVERSE 1 TO 10 NUMBERS</h3>
        {num.map((nums) => (
            <p>{nums}</p>
        ))}
      
    </div>
  )
}

export default PrintReverse
