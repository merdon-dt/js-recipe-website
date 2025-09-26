import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Products from "./Products";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // checkout

  const clearitem = () => {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    cart.forEach((cartitem) => {
      products = products.map((p) => ({
        ...p,
        variants: p.variants.map((v) =>
          v.name === cartitem.name
            ? { ...v, stock: Math.max(0, v.stock - cartitem.count) }
            : v
        ),
      }));
    });

    localStorage.setItem("products", JSON.stringify(products));
    localStorage.removeItem("cart");
    setCart([]);
  };

  const updateCart = (newCart) => {
    newCart = newCart.map((item) => {
    
     const base =
        item.unit === "g"
          ? ((item.baseQuantity * item.count) / 1000) * item.pricePerUnit
          : item.baseQuantity * item.count * item.pricePerUnit;

          const price = item.discount ? base - (base * item.discount) / 100 : base;

          return {
            ...item,
            price: price

          };
    });

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increment = (idx) => {
    const handle = [...cart];
    if (handle[idx].count < handle[idx].stock) {
      handle[idx].count += 1;
      updateCart(handle);
    } else {
      toast.warning("Out of Stock");
    }
  };

  const decrement = (idx) => {
    const handle = [...cart];
    handle[idx].count = Math.max(1, handle[idx].count - 1);
    updateCart(handle);
  };

  const calculate = (item) => {
     const base = item.unit === "g"
      ? ((item.baseQuantity * item.count) / 1000) * item.pricePerUnit
      : item.baseQuantity * item.count * item.pricePerUnit;

      return item.discount
      ? base - (base * item.discount) / 100 : base
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
                    {item.name} <button onClick={() => increment(i)}>+</button>{" "}
                    {item.count} <button onClick={() => decrement(i)}>-</button>{" "}
                    | Price: {item.price.toFixed(2)}  {item.discount ?  `(Discount: ${item.discount}%)` : ""}
                    <span style={{ color: "red" }}>
                      Stock left: {item.stock}
                    </span>
                  </div>
                  <div className="remove">
                    <button className="cart_but" onClick={() => remove(i)}>
                      x
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <h3 style={{ marginLeft: "10px" }}>
              {" "}
              Total Price:{" "}
              {cart.reduce((total, item) => total + calculate(item), 0)}
            </h3>
          </div>
        )}
        <button onClick={clearitem}>Checkout</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartPage;
