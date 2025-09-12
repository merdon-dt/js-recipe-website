import React, { useState } from "react";
import './Cart.css'

const Cart = () => {
  const [cart,setcart] = useState([]);


  const addcart = (item) => {
    setcart([...cart,item]);
    
  };

  return (
    <div>
        <h1>Cart task</h1>

       <div className="divmainbox">
         <div className="divbox" onClick={() => addcart("apple")}>Apple</div>
        <div className="divbox" onClick={() => addcart("banana")}>Banana</div>

        <div className="divbox" onClick={() => addcart("mango")}>Mango</div>

       </div>
        

        <div className="box">
        {cart.length === 0 ? (
           <p>No Cart Items</p>
         ) : (
            cart.map((c) => (
                <p>{c}</p>
            ))
         )
         }
         </div>

         <button disabled={cart.length === 0}>Checkbox</button>
      
    </div>
  );
};

export default Cart;
