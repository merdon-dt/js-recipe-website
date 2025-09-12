import React from 'react'

const Arraynumber = () => {
    const  number = [10,20,30,40,50];
  return (
    <div>
        <h3>ARRY NUMBERS</h3>
        {number.map((num) => (
            <p>{num}</p>
        ))}
      
    </div>
  )
}

export default Arraynumber
