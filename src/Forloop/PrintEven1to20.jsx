import React, { useEffect, useState } from 'react'

const PrintEven1to20 = () => {

    const [num,setnum] = useState([])

   useEffect(() => {
     const even = [];

    for(let i=1;i<=20;i++){
        if(i%2 == 0){
            even.push(<p>{i}</p>)
        }
    }
    setnum(even)
   },[])
  return (
    <div>
        <h3>PRINT EVEN NUMBERS FROM 1 TO 20</h3>
        {num.map((nums) => (
            <p>{nums}</p>
        ))

        }     
    </div>
  )
}

export default PrintEven1to20
