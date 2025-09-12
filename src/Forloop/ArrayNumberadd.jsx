import React, { useState } from 'react';

function ArrayNumberAdd() {
  const [input, setInput] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

 

  function handle(e) {
    if (e.key === 'Enter') {
      const num = Number(input);
      if (num) {
        const updated = [...numbers, num];
        setNumbers(updated);
        setSum(updated.reduce((a, b) => a + b));
        setInput('');
      } 
    }
  }

  return (
    <div>
      <h2>ARRAY ADD NUMBERS</h2>
      <input
        type="text"
        value={input}
        onChange={((e) => setInput(e.target.value))}
        onKeyDown={handle}
      />

      <p>Array: {numbers.join(', ')}</p>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default ArrayNumberAdd;
