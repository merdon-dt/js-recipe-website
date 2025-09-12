import React, { useEffect, useState } from "react";

const Print1to10 = () => {
  const [num, setnum] = useState([]);

  useEffect(() => {
    const store = [];
    for (let i = 1; i <= 10; i++) {
      store.push(i);
    }
    setnum(store);
  }, []);

  return (
    <div>
      <h3>PRINT NUMBERS 1 TO 10</h3>
      {num.map((nums) => (
        <p>{nums}</p>
      ))}
    </div>
  );
};

export default Print1to10;
