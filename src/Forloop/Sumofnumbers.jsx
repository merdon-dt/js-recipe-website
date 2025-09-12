import React from 'react'

const Sumofnumbers = () => {
    const sum =[];
    let add=0;

    for(let i=1 ;i<=100;i++){
        sum.push(<p>{i}</p>)
        add +=i
      

    }
  return (
    <div>
        <h3>SUM 1 TO 100 NUMBERS</h3>

        {/* <p>{sum}</p> */}
        <p>Sum : {add}</p>
      
    </div>
  )
}

export default Sumofnumbers
