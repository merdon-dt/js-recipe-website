import React, { useState } from "react";

const Product2 = () => {
  const [products, setProducts] = useState([
    {
      category: "Apple",
      selectionType: "checkbox", // can select multiple apples
      variants: [
        {
          name: "Red Apple",
          quantity: 1,
          unit: "kg",
          pricePerUnit: 160,
          origin: "Kashmir",
          stock: 50,
          count: 1,
          isSingle: true,
        },
        {
          name: "Green Apple",
          quantity: 500,
          unit: "g",
          pricePerUnit: 140,
          origin: "USA",
          stock: 30,
          count: 1,
          isSingle: true,

        },
        {
          name: "Golden Apple",
          quantity: 1,
          unit: "kg",
          pricePerUnit: 180,
          origin: "Himachal",
          stock: 40,
          count: 1,
          isSingle: true,

        },
      ],
    },
    {
      category: "Banana",
      selectionType: "checkbox",
      variants: [
        {
          name: "Robusta Banana",
          quantity: 1,
          unit: "dozen",
          pricePerUnit: 60,
          origin: "Kerala",
          stock: 100,
          count: 1,
          isSingle: true,

        },
        {
          name: "Yelakki Banana",
          quantity: 500,
          unit: "g",
          pricePerUnit: 45,
          origin: "Tamil Nadu",
          stock: 70,
          count: 1,
          isSingle: true,

        },
      ],
    },
  ]);

  function increment(proidx, varidx) {
    setProducts((p) =>
      p.map((product, i) =>
        i === proidx
          ? {
              ...product,
              variants: product.variants.map((variant, j) =>
                j === varidx
                  ? {
                      ...variant,
                      count: variant.count + 1,
                    }
                  : variant
              ),
            }
          : product
      )
    );
  }
  
  const check = () => {

    {products.map((v) => {
      if(isSingle === true){
        return v.quantity-v.count
      }
    })}
  }


  function decrement(proidx, varidx) {
    setProducts((p) =>
      p.map((product, i) =>
        i === proidx
          ? {
              ...product,
              variants: product.variants.map((variant, j) =>
                j === varidx
                  ? {
                      ...variant,
                      count: Math.max(1,variant.count -1,)
                    }
                  : variant
              ),
            }
          : product
      )
    );
  }

  function decrement () {
    setProducts((p) => 
    p.map((product, i) =>
   ))
  }

  return (
    <div>
      {products.map((pro, proidx) => (
        <div>
          <h1>{pro.category}</h1>
          {pro.variants.map((itm,varidx) => (
            <ul>
              <li>
                {itm.name} - {itm.quantity}
                {itm.unit} {itm.pricePerUnit}
              </li>
              <button onClick={check}>+</button>{" "}
              {itm.count}
              <button onClick={() => decrement(proidx, varidx)}>-</button>
              {}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Product2;

// function handleSelect(product, variant, isChecked) {
//     setSelectedItems((prev) => {
//       const updatedVariant = {
//         ...products
//           .find((p) => p.category === product.category)
//           .variants.find((v) => v.name === variant.name),
//         category: product.category,
//       };

//       if (product.selectionType === "radio") {
//         return prev
//           .filter((item) => item.category !== product.category)
//           .concat(updatedVariant);
//       } else {
//         if (isChecked) {
//           return [...prev, updatedVariant];
//         } else {
//           return prev.filter((item) => item.name !== variant.name);
//         }
//       }
//     });
//   }
