import React, { useState } from "react";

const Printtotalprice = () => {
  const [age, setage] = useState(0);
  const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 30000 },
  ];

  const addage = () => {
    let add = 0;
    for (let i = 0; i < products.length; i++) {
      add += products[i].price;
    }
    setage(add);
  };

  return (
    <div>
        <h3>PRODUCTS TOTAL PRICE</h3>
        {products.map((pr) => (
            <p>{pr.name}: {pr.price}</p>
        ))}
      <button onClick={addage}>Add</button>
      <p>{age}</p>
    </div>
  );
};

export default Printtotalprice;
