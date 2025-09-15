import React, { useState } from "react";

const Starprinting = () => {
  const [star, setstar] = useState("");
  const [result, setResult] = useState(false);

  const answer = () => {
    let count = []
    let stars = "";
    for (let i = 1; i <= star; i++) {
     stars += "*";
      count.push(<div>{stars}</div>)
    }
    return count;
   
  };

  return (
    <div>
        <h3>STAR PATTERN PRINTING</h3>
      <input
        type="text"
        value={star}
        onChange={(e) => setstar(e.target.value)}
      />
      <button onClick={() => setResult(true)}>doo</button>
      <p>{result && answer()}</p>
    </div>
  );
  
};

export default Starprinting;
