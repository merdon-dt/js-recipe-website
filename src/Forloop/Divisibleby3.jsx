import React, { useEffect, useState } from "react";

const Divisibleby3 = () => {
  const [divi, setDivi] = useState([]);

  useEffect(() => {
    const num = [];

    for (let i = 1; i <= 50; i++) {
      if (i % 3 == 0) {
        num.push(i);
      }
    }
    setDivi(num);
  },[]);

  return (
    <div>
        <h3>NUMBERS DIVISIBLE BY 3 </h3>
        {divi.map((value) => (
            <p>{value}</p>
        ))}
    </div>
  )
 
}

export default Divisibleby3;
