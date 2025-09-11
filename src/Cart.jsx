import React, { useState } from "react";

const Cart = () => {
  const [cart, setcart] = useState(false);
  const [text, settext] = useState("");

  const list = [
    {
      item1: "one",
      item2: "two",
      item3: "three",
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
      
      <div style={{ display: "flex",gap:"20px" }}>

        <button onClick={addcart}>Add Cart</button>
        <button onClick={removecart}>Remove Cart</button>
        <p>{text || "Cart is empty"}</p>

      </div>

      {cart && (
        <div
          style={{
            backgroundColor: "gray",
            width: "100px",
            padding: "10px 20px",
            color: "white", margin:"20px"
          }}
        >
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
  );
};

export default Cart;
