import React, { useState } from 'react'

const Reversestring = () => {
    const [text, setText] = useState('');
    
         
    let reverse = "";
    for( let i = text.length-1; i>=0;i--){
        reverse += text[i];
    }


  return (
    <div>
        <h3>REVERSED STRING</h3>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <p>{text}</p>
         <p>Reversed:{reverse}</p>
      
    </div>
  )
}

export default Reversestring
