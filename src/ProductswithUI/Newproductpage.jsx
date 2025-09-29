import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Newproductpage = () => {

  
  const { category } = useParams();
  const products = JSON.parse(localStorage.getItem("products")) || [];
  
  const categoryProducts = products.filter((p) => p.category === category)
  
  const variants = categoryProducts.flatMap((p) => p.variants);

  const [activeIdx, setActiveIdx] = useState(0);
  const [quan, setquan] = useState(1);

  const activeVariant = variants[activeIdx];
  const otherVariants = variants.filter((i) => i !== activeIdx);

  const increment = () => setquan((q) => q + 1);
  const decrement = () => setquan((q) => ( q > 1 ? q-1 : 1));

  const calculate = () => {

    const price = activeVariant.unit === "g" ? ((activeVariant.baseQuantity * quan) / 1000 )
    : activeVariant.baseQuantity * quan * activeVariant.pricePerunit
    

    const taxAmt = (basePrice * activeVariant.taxRAte)
    const finalprice = price + taxAmt;

    return {
      finalprice,
      taxAmt
    };

  }
  
  const addTocrt = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const basePrice = activeVariant.unit === "g" ?
    ((activeVariant.baseQuantity * quan) / 1000) * activeVariant.pricePerunit
    : activeVariant.baseQuantity * quan * activeVariant.pricePerunit;

    const discountAmt = (basePrice * activeVariant.discount) / 100;
    const priceAfterDiscount = basePrice - discountAmt;

    const taxAmt = (priceAfterDiscount * activeVariant.taxRAte) / 100;
    const final = priceAfterDiscount + taxAmt;

    const cartitem = {
      id: activeVariant.id,
      name: activeVariant.name,
      category: category,
      count: quan,
      price: finalprice,
      basePrice: basePrice,
      discount: activeVariant.discount,
      tax: taxAmt,
      stock: activeVariant.discount,
      unit: activeVariant.unit,
      baseQuantity: activeVariant.baseQuantity,
      img: activeVariant.img,

    };

    cart.push(cartitem);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Item added")
  }


  return (
    <div>
      <div>
        <h1>{activeVariant.category}</h1>
        <h2>{activeVariant.name}</h2>
        <h5>{activeVariant.description}</h5>
        <h5>{activeVariant.nutrition}</h5>

        <p>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </p>

        <h2>Price: {calculate}</h2>
      </div>
      
    </div>
  )
}

export default Newproductpage
