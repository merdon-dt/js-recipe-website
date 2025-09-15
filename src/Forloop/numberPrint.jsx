import React, { useState } from 'react'

const numberPrint = () => {
    const [num,setnum] = useState('');
    const [show,setShow] = useState(false)


    const result = () => {

        let pattern = [];
        let number ="";
        for (let i=1; i<=num; i++){
            number += i
             pattern.push(<div>{number}</div>)

        }
        return pattern;

    }

  return (
    <div>
        <h3>NUMBER PRINT 1 12 123</h3>
        <input type="number"  onChange={(e) => setnum(e.target.value)} />
        <button onClick={() => setShow(true)}>Show</button>
        <p>{show && result()}</p>
      
    </div>
  )
}

export default numberPrint
