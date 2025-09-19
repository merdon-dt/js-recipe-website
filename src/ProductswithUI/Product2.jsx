import React, { useState } from 'react'

const Product2 = () => {
  const [products] = useState([
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
          },
          {
            name: "Green Apple",
            quantity: 500,
            unit: "g",
            pricePerUnit: 140,
            origin: "USA",
            stock: 30,
          },
          {
            name: "Golden Apple",
            quantity: 1,
            unit: "kg",
            pricePerUnit: 180,
            origin: "Himachal",
            stock: 40,
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
          },
          {
            name: "Yelakki Banana",
            quantity: 500,
            unit: "g",
            pricePerUnit: 45,
            origin: "Tamil Nadu",
            stock: 70,
          },
        ],
      },
    ])

  return (
    <div>

      {
        products.map((pro) => (
          <div>
            <h1>{pro.category}</h1>
            {pro.variants.map((itm) => (
              <ul>
                <li>{itm.name} - {itm.quantity}{itm.unit} {itm.pricePerUnit}</li> 
                <button onClick={() =>increment(Product2, variantIndex)}>+</button><button>-</button>
              </ul>
            ))}
          </div>

        
        ))
      }
      
    </div>
  )
}

export default Product2
