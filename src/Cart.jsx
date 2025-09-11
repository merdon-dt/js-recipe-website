import React, { useState } from "react";
import './Cart.css'

const Cart = () => {
  const [cart, setcart] = useState(false);
  const [text, settext] = useState("");

  const list = [
    {
      item1: "item1",
      item2: "item2",
      item3: "item3",
    },
  ];

  const addcart = () => {
    setcart(true);
    settext("Proceed to checkout");
  };

  const removecart = () => {
    setcart(false);
    settext("cart Empty");
  };
  return (
    <div>
        <h1>Cart task</h1>
      
      <div className="cart">

        <button onClick={addcart}>Add Cart</button>
        <button onClick={removecart}>Remove Cart</button>
        <p>{text || "Cart is empty"}</p>

      </div>

       <div>
      {cart && (
        <div  className="box">
          {list.map((listt) => (
            <>
              <p>{listt.item1}</p>
              <p>{listt.item2}</p>
              <p>{listt.item3}</p>
            </>
          ))}
        </div>
      )}
      </div>

    </div>
  );
};

export default Cart;
