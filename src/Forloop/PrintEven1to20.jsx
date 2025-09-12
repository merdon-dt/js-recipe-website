import React from 'react'

const PrintEven1to20 = () => {

    const even = [];

    for(let i=1;i<=20;i++){
        if(i%2 == 0){
            even.push(<p>{i}</p>)
        }
    }
  return (
    <div>
        <h3>PRINT EVEN NUMBERS FROM 1 TO 20</h3>
        <p>{even}</p>      
    </div>
  )
}

export default PrintEven1to20
