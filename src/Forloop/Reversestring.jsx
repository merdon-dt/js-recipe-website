import React, { useState } from 'react'

const Reversestring = () => {
    const [text, setText] = useState('');
    const reverse = (str) => str.split("").reverse().join("");

  return (
    <div>
        <h3>REVERSED STRING</h3>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <p>{text}</p>
         <p>Reversed:{reverse(text)}</p>
      
    </div>
  )
}

export default Reversestring
