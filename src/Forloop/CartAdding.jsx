import React, { useState } from "react";
import "../Cart.css";

const CartAdding = () => {
  const orders = [
    { name: "Apple", quantity: 1, unit: "kg", pricePerUnit: 150 },
    { name: "Banana", quantity: 2, unit: "kg", pricePerUnit: 50 },
    { name: "Milk", quantity: 3, unit: "litre", pricePerUnit: 60 },
    { name: "Bread", quantity: 4, unit: "loaf", pricePerUnit: 40 },
    { name: "Butter", quantity: 5, unit: "pack", pricePerUnit: 120 },
  ];

  const cartitem = () => {
     return (
        <div>
      {orders.map((b) => (
        <>
          <p>{b.name}</p>
          <ul>
            <li>
              {b.quantity} {b.unit}
            </li>
            <li>pricePerUnit:{b.pricePerUnit}</li>
            <p>
               price of {b.name} {b.pricePerUnit * b.quantity}
            </p>
          </ul>
        </>
      ))}
    </div>
     )
  };

  return (
    <div>
      <p>{cartitem()}</p>

      <strong>Total price of the orders: {orders.reduce((a,c) => a+c.pricePerUnit*c.quantity, 0)}</strong>
    </div>
  );
};

export default CartAdding;
