import React, { useState } from "react";
import "./Product.css";

const Products = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const [products, setProducts] = useState([
  {
    category: "Apple",
    selectionType: "checkbox", // can select multiple apples
    variants: [
      { name: "Red Apple", quantity: 1, unit: "kg", pricePerUnit: 160, origin: "Kashmir", stock: 50 },
      { name: "Green Apple", quantity: 500, unit: "g", pricePerUnit: 140, origin: "USA", stock: 30 },
      { name: "Golden Apple", quantity: 1, unit: "kg", pricePerUnit: 180, origin: "Himachal", stock: 40 }
    ]
  },
  {
    category: "Banana",
    selectionType: "checkbox",
    variants: [
      { name: "Robusta Banana", quantity: 1, unit: "dozen", pricePerUnit: 60, origin: "Kerala", stock: 100 },
      { name: "Yelakki Banana", quantity: 500, unit: "g", pricePerUnit: 45, origin: "Tamil Nadu", stock: 70 }
    ]
  },
  {
    category: "Milk",
    selectionType: "radio", // pick one fat % type
    variants: [
      { name: "Cow Milk", quantity: 1, unit: "litre", pricePerUnit: 60, fat: "3.5%", stock: 200 },
      { name: "Buffalo Milk", quantity: 2, unit: "litre", pricePerUnit: 70, fat: "6%", stock: 150 },
      { name: "Organic Cow Milk", quantity: 1, unit: "litre", pricePerUnit: 75, fat: "4%", stock: 80 }
    ]
  },
  {
    category: "Bread",
    selectionType: "radio", // pick one bread type
    variants: [
      { name: "White Bread", quantity: 1, unit: "loaf", pricePerUnit: 40, expiry: "3 days", stock: 80 },
      { name: "Brown Bread", quantity: 1, unit: "loaf", pricePerUnit: 50, expiry: "4 days", stock: 60 },
      { name: "Multigrain Bread", quantity: 1, unit: "loaf", pricePerUnit: 55, expiry: "5 days", stock: 45 }
    ]
  },
  {
    category: "Butter",
    selectionType: "radio", // salted/unsalted/herb → pick one
    variants: [
      { name: "Salted Butter", quantity: 500, unit: "g", pricePerUnit: 120, brand: "Amul", stock: 40 },
      { name: "Unsalted Butter", quantity: 250, unit: "g", pricePerUnit: 100, brand: "Britannia", stock: 25 },
      { name: "Herb Butter", quantity: 200, unit: "g", pricePerUnit: 150, brand: "Local", stock: 20 }
    ]
  },
  {
    category: "Cheese",
    selectionType: "checkbox", // people might buy multiple cheese types
    variants: [
      { name: "Cheddar Cheese", quantity: 400, unit: "g", pricePerUnit: 200, brand: "Amul", stock: 30 },
      { name: "Mozzarella Cheese", quantity: 250, unit: "g", pricePerUnit: 220, brand: "Go Cheese", stock: 20 },
      { name: "Parmesan Cheese", quantity: 200, unit: "g", pricePerUnit: 350, brand: "Imported", stock: 15 }
    ]
  },
  {
    category: "Orange",
    selectionType: "radio", // usually one orange type
    variants: [
      { name: "Nagpur Orange", quantity: 1, unit: "kg", pricePerUnit: 100, season: "Winter", stock: 70 },
      { name: "Kinnow Orange", quantity: 1, unit: "kg", pricePerUnit: 120, season: "Spring", stock: 50 }
    ]
  },
  {
    category: "Juice",
    selectionType: "radio", // pick one flavor
    variants: [
      { name: "Mango Juice", quantity: 1, unit: "litre", pricePerUnit: 120, brand: "Tropicana", stock: 90 },
      { name: "Orange Juice", quantity: 1, unit: "litre", pricePerUnit: 110, brand: "Real", stock: 75 },
      { name: "Apple Juice", quantity: 1, unit: "litre", pricePerUnit: 130, brand: "B-Natural", stock: 60 }
    ]
  },
  {
    category: "Snacks",
    selectionType: "checkbox", // can select multiple snacks
    variants: [
      { name: "Potato Chips", quantity: 200, unit: "g", pricePerUnit: 50, brand: "Lays", stock: 120 },
      { name: "Nachos", quantity: 150, unit: "g", pricePerUnit: 60, brand: "Doritos", stock: 60 },
      { name: "Masala Peanuts", quantity: 250, unit: "g", pricePerUnit: 80, brand: "Haldiram's", stock: 40 }
    ]
  },
  {
    category: "Tomato",
    selectionType: "radio", // hybrid OR cherry
    variants: [
      { name: "Hybrid Tomato", quantity: 1, unit: "kg", pricePerUnit: 80, origin: "Local Farm", stock: 100 },
      { name: "Cherry Tomato", quantity: 250, unit: "g", pricePerUnit: 90, origin: "Hydroponic", stock: 50 }
    ]
  },
  {
    category: "Cucumber",
    selectionType: "radio", // english or desi
    variants: [
      { name: "English Cucumber", quantity: 500, unit: "g", pricePerUnit: 50, origin: "Hydroponic", stock: 90 },
      { name: "Desi Cucumber", quantity: 1, unit: "kg", pricePerUnit: 70, origin: "Local Farm", stock: 75 }
    ]
  }
]);

  function increment(productIndex, variantIndex) {
    setProducts((p) =>
      p.map((product, i) =>
        i === productIndex
          ? 
          {
              ...product,
              variants: product.variants.map((variant, j) =>
                j === variantIndex
                  ? 
                  {
                      ...variant,
                      quantity:
                        variant.unit === "g"
                          ? variant.quantity + 100
                          : variant.quantity + 1,
                    }

                    : variant
              ),
            }

          : product
      )
    );
  }

//   function decrement(productIndex, variantIndex) {
//     setProducts((p) => p.map((product,i) =>
//     i === productIndex ? {

//     }
// ))
   
//   }


  

  return (
    <div>
      <div className="productback">
        <div className="product_content">
          {products.map((product, productIndex) => (
            <div className="main_content">
              <div className="heading">
                <h3 className="head_product">{product.category}</h3>
                <button>Add to Cart</button>
              </div>
              <ul className="list">
                {product.variants.map((type, variantIndex) => (
                  <div>
                    <li>
                      <input 
                        type={product.selectionType}
                        name={product.category}
                       
                       
                        style={{ accentColor: "black" }}
                      />{" "}

                      {type.name} {type.quantity}{type.unit} <button
                        onClick={() => increment(productIndex, variantIndex)}
                      >
                        +
                      </button>{" "}
                      <button
                        onClick={() => decrement(productIndex, variantIndex)}
                      >
                        -
                      </button>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;