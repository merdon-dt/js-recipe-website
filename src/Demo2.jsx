import React, { useState } from 'react'

const Demo2 = () => {
    const [even,seteven] = useState("")
    const [result,setresult] = useState()
    
    const findeven = () =>{
       let num = Number(even)

       if(num%2 == 0){
        setresult("even")
          
       }

       else{
        setresult("odd")
       }
    }

  return (
    <div>

        <input type="text" value={even} onChange={(e) => seteven(e.target.value)} />
        <button onClick={findeven}>check</button>
        <p>{result}</p>
      
    </div>
  )
}

export default Demo2
