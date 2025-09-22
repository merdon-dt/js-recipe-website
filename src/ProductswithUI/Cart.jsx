import React, { useEffect, useState } from "react";

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

  const updateCart = (newCart) => {
  newCart = newCart.map((item) => ({
    ...item,
    price:
      item.unit === "g"
        ? (item.baseQuantity / 1000) * item.pricePerUnit
        : item.baseQuantity * item.pricePerUnit,
  }));

  setCart(newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
};

  const increment = (idx) => {
    const handle = [...cart];

    if (handle[idx].unit === "g") {
      handle[idx].baseQuantity += 100;
    } else {
      handle[idx].baseQuantity += 1;
    }
    updateCart(handle);
    localStorage.setItem("cart", JSON.stringify(handle));
  };

  const decrement = (idx) => {
    const handle = [...cart];

    if (handle[idx].unit === "g") {
      handle[idx].baseQuantity = Math.max(100, handle[idx].quantity - 100);
    } else {
      handle[idx].baseQuantity = Math.max(1 , handle[idx].quantity - 1);
    }
    updateCart(handle);
    localStorage.setItem("cart", JSON.stringify(handle));
  };

  const remove = (idx) => {
    const rmv = [...cart];
    rmv.splice(idx, 1);
    updateCart(rmv);
    localStorage.setItem("cart", JSON.stringify(rmv));
  };

  const calculate = (item) => {
     if(item.unit === "g"){
       return(item.baseQuantity / 1000) * item.pricePerUnit
     }
     else{
      return item.baseQuantity * item.pricePerUnit
     }
  }

  return (
    <div className="cart_back">
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart_datas">
          {cart.map((item, i) => (
            <div className="cart_design">
              <div className="flex_cart">
                <div className="cart_con">
                
                  {item.name} [ {item.baseQuantity} {item.unit}]{" "} 
                  <button onClick={() => increment(i)}>+</button>{" "}
                  <button onClick={() => decrement(i)}>-</button> {" "} | Price: {item.price}
                 
                </div>
                 <div className="remove">
                  
                    <button className="cart_but" onClick={() => remove(i)}>x</button>
                  </div>
              </div>
            </div>
          ))}
              
           <h3 style={{marginLeft:"10px"}}>  Total Price:{" "}
  {cart.reduce((total, item) => total + calculate(item), 0)}</h3>
          <button className="Order_but">Place Order</button>
        </div>
      )}
      {/* <button onClick={clearitem}>delete Cart </button> */}
    </div>
  );
};

export default CartPage;
