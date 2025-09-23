import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";


const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // const clearitem = () => {
  //   localStorage.removeItem("cart")
  //   setCart([])
  // }
   // const increment = (idx) => {
  //   const handle = [...cart];

  //   if (handle[idx].unit === "g") {
  //     handle[idx].baseQuantity += 100;
  //   } else {
  //     handle[idx].baseQuantity += 1;
  //   }
  //   updateCart(handle);
  // };

  const updateCart = (newCart) => {
  newCart = newCart.map((item) => ({
    ...item,
    price:
      item.unit === "g"
        ? (item.baseQuantity * item.count) / 1000 * item.pricePerUnit
        : item.baseQuantity * item.count * item.pricePerUnit,
  }));

  setCart(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
};

const increment = (idx) => {
  const handle = [...cart];
  if (handle[idx].count < handle[idx].stock) {
    handle[idx].count += 1;
    updateCart(handle);
  } else {
    toast.warning("Out of Stock")
  }
};

const decrement = (idx) => {
  const handle = [...cart];
  handle[idx].count = Math.max(1, handle[idx].count - 1);
  updateCart(handle);
};

const calculate = (item) => {
  return item.unit === "g"
    ? (item.baseQuantity * item.count) / 1000 * item.pricePerUnit
    : item.baseQuantity * item.count * item.pricePerUnit;
};

   const remove = (idx) => {
    const rmv = [...cart];
    rmv.splice(idx, 1);
    updateCart(rmv);
    localStorage.setItem("cart", JSON.stringify(rmv));
  };

  return (
    <div>
      <div className="cart_back">
        {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          
           {cart.map((item, i) => (
  <div className="cart_design" key={i}>
    <div className="flex_cart">
      <div className="cart_con">
        {item.name} {" "} 
        <button 
          onClick={() => increment(i)} 
        >
          +
        </button>{" "} 
        {item.count} {" "} 
        <button onClick={() => decrement(i)}>-</button> {" "} 

        | Price: {item.price.toFixed(2)} {" "} 
        | 
            <span style={{color:"red"}}>Stock left: {item.stock}</span>
        
      </div>
      <div className="remove">
        <button className="cart_but" onClick={() => remove(i)}>x</button>
      </div>
    </div>


  </div>
))}

<h3 style={{marginLeft:"10px"}}>  Total Price:{" "}
           {cart.reduce((total, item) => total + calculate(item), 0)}</h3>
           
        </div>
     
           )}
      {/* <button onClick={clearitem}>delete Cart </button> */}
      
    </div>
    <ToastContainer/>
    </div>
  );
};

export default CartPage;