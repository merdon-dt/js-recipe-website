import React from 'react'

const PrintReverse = () => {
    const reverse = [];

    for(let i=10; i>=1;i--){
        reverse.push(<p>{i}</p>)
    }
  return (
    <div>
        <h3>PRINT REVERSE 1 TO 10 NUMBERS</h3>
         <p>{reverse}</p>
      
    </div>
  )
}

export default PrintReverse
