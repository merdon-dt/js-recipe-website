import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const clearitem = () => {
    localStorage.removeItem("cart")
    setCart([])
  }

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} - {item.quantity} {item.unit}  <button
                        onClick={() => increment(productIndex, variantIndex)}
                      >
                        +
                      </button>{" "}
                      <button
                        onClick={() => decrement(productIndex, variantIndex)}
                      >
                        -
                      </button>
            </li>
          ))}
        </ul>
        
      )}
      <button onClick={clearitem}>delete Cart </button>
    </div>
  );
};

export default CartPage