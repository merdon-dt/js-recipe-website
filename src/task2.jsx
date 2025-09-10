import React, { useState } from 'react'

const AddNumbers = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (!isNaN(n1) && !isNaN(n2)) {
      setResult(n1 + n2);
    } 
  };

  return (
    <div>
      <h2>Add Two Numbers</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
       
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        
      />

      <button onClick={handleAddition}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default AddNumbers;
