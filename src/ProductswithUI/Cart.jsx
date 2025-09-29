import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Products from "./Products";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCart(savedCart);
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
    const updatedCart = newCart.map((item) => {
     const basePrice =
        item.unit === "g"
          ? ((item.baseQuantity * item.count) / 1000) * item.pricePerUnit
          : item.baseQuantity * item.count * item.pricePerUnit;

          const price =  basePrice;
          const discountAmount = item.discount
        ? (price * item.discount) / 100
        : 0;

      const priceAfterDiscount = price - discountAmount;

      const taxAmount = item.taxRate
        ? (priceAfterDiscount * item.taxRate) / 100
        : 0;

      const finalPrice = priceAfterDiscount + taxAmount;

      return {
        ...item,
        basePrice,
        discountAmount,
        taxAmount,
        finalPrice,
        price,
      };
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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

                     Price: {item.price.toFixed(2)} <br />
                    {item.discount ? (
                      <span>Discount ({item.discount}%): -{item.discountAmount.toFixed(2)}</span>
                    ) : null}
                    <br />
                    {item.taxRate ? (
                      <span>
                        Tax ({item.taxRate}%): +{item.taxAmount.toFixed(2)}
                      </span>
                    ) : null}
                    <br />
                    <b>Final Price: {item.finalPrice.toFixed(2)}</b>
                  
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
              Total Price:{" "}
              {cart
                .reduce((total, item) => total + item.finalPrice, 0)
                .toFixed(2)}
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


