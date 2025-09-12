import React, { useState } from 'react'

const Vowels = () => {
    const[word,setword] = useState('');
    const[add,setAdd] = useState(0)

     const check = () => {
    let count =0;
    const vowels = "aeiouAEIOU";

    for(let i=0; i < word.length; i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }

   
        setAdd(count)
    }

  return (
    <div>

        <h3>VOWELS</h3>

        <input type="text" value={word} onChange={(e) => setword(e.target.value)} />
        <button onClick={check}>check</button>
        <p>{add}</p>
      
    </div>
  )
}

export default Vowels
