import React from 'react';

const Fibonacci = () => {

    const fib = [0,1];
    for (let i = 2; i < 6; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
   

 

  return (
    <div>
      <h2>First 6 Fibonacci Numbers:</h2>
      <ul>
        {fib.map((num) => (
         <p>{num}</p>
        ))}
      </ul>
    </div>
  );
};

export default Fibonacci;
