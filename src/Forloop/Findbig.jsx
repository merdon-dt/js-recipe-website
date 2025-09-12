import React, { useState } from 'react';

const FindLargest = () => {
  const [numbers] = useState([5, 20, 8, 99, 13, 42]);
  const [largest, setLargest] = useState(null);

  const findLargest = () => {

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }

    setLargest(max);
  };

  return (
    <div>
        <h3>FIND LARGEST IN ARRAY</h3>
      <p>Array: {numbers.join(', ')}</p>
      <button onClick={findLargest}>Find Largest</button>
     <p>Largest number: {largest}</p>
    </div>
  );
};

export default FindLargest;
