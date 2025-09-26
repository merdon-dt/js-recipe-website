import React, { useEffect, useMemo, useState } from "react";
import "./Product.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const [products, setProducts] = useState(() => {
    try {
      const stored = localStorage.getItem("products");
      if (stored && stored !== "undefined") {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Failed", e);
    }

    return [
      {
        category: "Apple",
        selectionType: "checkbox", // can select multiple apples
        variants: [
          {
            name: "Red Apple",
            baseQuantity: 1,
            unit: "kg",
            pricePerUnit: 160,
            origin: "Kashmir",
            stock: 8,
            count: 1,
            isSingle: true,
            discount: 10,
          },
          {
            name: "Green Apple",
            baseQuantity: 500,
            unit: "g",
            pricePerUnit: 140,
            origin: "USA",
            stock: 7,
            count: 1,
            isSingle: true,
            discount: 20,
          },
          {
            name: "Golden Apple",
            baseQuantity: 1,
            unit: "kg",
            pricePerUnit: 180,
            origin: "Himachal",
            stock: 8,
            count: 1,
            isSingle: true,
            discount: 10,
          },
        ],
      },
      {
        category: "Banana",
        selectionType: "checkbox",
        variants: [
          {
            name: "Robusta Banana",
            baseQuantity: 1,
            unit: "dozen",
            pricePerUnit: 60,
            origin: "Kerala",
            stock: 10,
            count: 1,
            isSingle: true,
            discount: 10,
          },
          {
            name: "Yelakki Banana",
            baseQuantity: 500,
            unit: "g",
            pricePerUnit: 45,
            origin: "Tamil Nadu",
            stock: 7,
            count: 1,
            isSingle: true,
            discount: 10,
          },
        ],
      },
      {
        category: "Milk",
        selectionType: "radio", // pick one fat % type
        variants: [
          {
            name: "Cow Milk",
            baseQuantity: 1,
            unit: "litre",
            pricePerUnit: 60,
            fat: "3.5%",
            stock: 9,
            count: 1,
            isSingle: true,
            discount: 10,
          },
          {
            name: "Buffalo Milk",
            baseQuantity: 2,
            unit: "litre",
            pricePerUnit: 70,
            fat: "6%",
            stock: 8,
            count: 1,
            isSingle: true,
            discount: 10,
          },
          {
            name: "Organic Cow Milk",
            baseQuantity: 1,
            unit: "litre",
            pricePerUnit: 75,
            fat: "4%",
            stock: 8,
            count: 1,
            isSingle: true,
            discount: 30,
          },
        ],
      },
      {
        category: "Bread",
        selectionType: "radio", // pick one bread type
        variants: [
          {
            name: "White Bread",
            baseQuantity: 1,
            unit: "loaf",
            pricePerUnit: 40,
            expiry: "3 days",
            stock: 8,
            count: 1,
            isSingle: true,
            discount: 10,
          },
          {
            name: "Brown Bread",
            baseQuantity: 1,
            unit: "loaf",
            pricePerUnit: 50,
            expiry: "4 days",
            stock: 6,
            count: 1,
            isSingle: true,
            discount: 20,
          },
          {
            name: "Multigrain Bread",
            baseQuantity: 1,
            unit: "loaf",
            pricePerUnit: 55,
            expiry: "5 days",
            stock: 5,
            count: 1,
            isSingle: true,
            discount: 30,
          },
        ],
      },
      {
        category: "Butter",
        selectionType: "radio", // salted/unsalted/herb → pick one
        variants: [
          {
            name: "Salted Butter",
            baseQuantity: 500,
            unit: "g",
            pricePerUnit: 120,
            brand: "Amul",
            stock: 6,
            count: 1,
            isSingle: true,
            discount: 20,
          },
          {
            name: "Unsalted Butter",
            baseQuantity: 250,
            unit: "g",
            pricePerUnit: 100,
            brand: "Britannia",
            stock: 8,
            count: 1,
            isSingle: true,
            discount: 10,
          },
          {
            name: "Herb Butter",
            baseQuantity: 200,
            unit: "g",
            pricePerUnit: 150,
            brand: "Local",
            stock: 8,
            count: 1,
            isSingle: true,
            discount: 20,
          },
        ],
      },
      {
        category: "Cheese",
        selectionType: "checkbox", // people might buy multiple cheese types
        variants: [
          {
            name: "Cheddar Cheese",
            baseQuantity: 400,
            unit: "g",
            pricePerUnit: 200,
            brand: "Amul",
            stock: 6,
            count: 1,
            isSingle: true,
            discount: 10,
          },
          {
            name: "Mozzarella Cheese",
            baseQuantity: 250,
            unit: "g",
            pricePerUnit: 220,
            brand: "Go Cheese",
            stock: 7,
            count: 1,
            isSingle: true,
            discount: 40,
          },
          {
            name: "Parmesan Cheese",
            baseQuantity: 200,
            unit: "g",
            pricePerUnit: 350,
            brand: "Imported",
            stock: 9,
            count: 1,
            isSingle: true,
            discount: 30,
          },
        ],
      },
      {
        category: "Orange",
        selectionType: "radio", // usually one orange type
        variants: [
          {
            name: "Nagpur Orange",
            baseQuantity: 1,
            unit: "kg",
            pricePerUnit: 100,
            season: "Winter",
            stock: 7,
            count: 1,
            isSingle: true,
            discount: 20,
          },
          {
            name: "Kinnow Orange",
            baseQuantity: 1,
            unit: "kg",
            pricePerUnit: 120,
            season: "Spring",
            stock: 5,
            count: 1,
            isSingle: true,
            discount: 50,
          },
        ],
      },
      {
        category: "Juice",
        selectionType: "radio", // pick one flavor
        variants: [
          {
            name: "Mango Juice",
            baseQuantity: 1,
            unit: "litre",
            pricePerUnit: 120,
            brand: "Tropicana",
            stock: 9,
            count: 1,
            isSingle: true,
            discount: 30,
          },
          {
            name: "Orange Juice",
            baseQuantity: 1,
            unit: "litre",
            pricePerUnit: 110,
            brand: "Real",
            stock: 7,
            count: 1,
            isSingle: true,
            discount: 30,
          },
          {
            name: "Apple Juice",
            baseQuantity: 1,
            unit: "litre",
            pricePerUnit: 130,
            brand: "B-Natural",
            stock: 6,
            count: 1,
            isSingle: true,
            discount: 40,
          },
        ],
      },
      {
        category: "Snacks",
        selectionType: "checkbox", // can select multiple snacks
        variants: [
          {
            name: "Potato Chips",
            baseQuantity: 200,
            unit: "g",
            pricePerUnit: 50,
            brand: "Lays",
            stock: 8,
            count: 1,
            isSingle: true,
            discount: 20,
          },
          {
            name: "Nachos",
            baseQuantity: 150,
            unit: "g",
            pricePerUnit: 60,
            brand: "Doritos",
            stock: 6,
            count: 1,
            isSingle: true,
            discount: 40,
          },
          {
            name: "Masala Peanuts",
            baseQuantity: 250,
            unit: "g",
            pricePerUnit: 80,
            brand: "Haldiram's",
            stock: 5,
            count: 1,
            isSingle: true,
            discount: 20,
          },
        ],
      },
      {
        category: "Tomato",
        selectionType: "radio", // hybrid OR cherry
        variants: [
          {
            name: "Hybrid Tomato",
            baseQuantity: 1,
            unit: "kg",
            pricePerUnit: 80,
            origin: "Local Farm",
            stock: 10,
            count: 1,
            isSingle: true,
            discount: 40,
          },
          {
            name: "Cherry Tomato",
            baseQuantity: 250,
            unit: "g",
            pricePerUnit: 90,
            origin: "Hydroponic",
            stock: 5,
            count: 1,
            isSingle: true,
            discount: 10,
          },
        ],
      },
      {
        category: "Cucumber",
        selectionType: "radio", // english or desi
        variants: [
          {
            name: "English Cucumber",
            baseQuantity: 500,
            unit: "g",
            pricePerUnit: 50,
            origin: "Hydroponic",
            stock: 9,
            count: 1,
            isSingle: true,
            discount: 20,
          },
          {
            name: "Desi Cucumber",
            baseQuantity: 1,
            unit: "kg",
            pricePerUnit: 70,
            origin: "Local Farm",
            stock: 7,
            count: 1,
            isSingle: true,
            discount: 10,
          },
        ],
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const [search, setsearch] = useState("");

  //count increment

  function increment(productIndex, variantIndex) {
    setProducts((p) =>
      p.map((product, i) =>
        i === productIndex
          ? {
              ...product,
              variants: product.variants.map((variant, j) => {
                if (j === variantIndex) {
                  if (variant.count < variant.stock) {
                    if (variant.isSingle && variant.count === 1) {
                      return { ...variant, isSingle: false, count: 2 };
                    }
                    return { ...variant, count: variant.count + 1 };
                  } else {
                    toast.warn("Out of stock");
                  }
                }
                return variant;
              }),
            }
          : product
      )
    );
  }

  //count decrement

  function decrement(productIndex, variantIndex) {
    setProducts((p) =>
      p.map((product, i) =>
        i === productIndex
          ? {
              ...product,
              variants: product.variants.map((variant, j) => {
                if (j === variantIndex) {
                  if (!variant.isSingle && variant.count === 2) {
                    return { ...variant, isSingle: true, count: 1 };
                  }
                  return { ...variant, count: Math.max(1, variant.count - 1) };
                }
                return variant;
              }),
            }
          : product
      )
    );
  }

  //Add cart

  function addToCart(variants) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const latest = variants.map((variant) => {
      const product = products.find((p) => p.category === variant.category);
      const realVariant = product.variants.find((v) => v.name === variant.name);

      let quantity, price;

      if (realVariant.unit === "g") {
        if (realVariant.isSingle && realVariant.count === 1) {
          quantity = realVariant.baseQuantity;
          price = (realVariant.pricePerUnit / 1000) * realVariant.baseQuantity;
        } else {
          quantity = realVariant.baseQuantity * realVariant.count;
          price = (realVariant.pricePerUnit / 1000) * quantity;
        }
      } else {
        quantity = realVariant.baseQuantity * realVariant.count;
        price = quantity * realVariant.pricePerUnit;
      }

      return {
        ...realVariant,
        category: product.category,
        quantity,
        price,
      };
    });

    latest.forEach((variant) => {
      const existing = cart.find((item) => item.name === variant.name);

      if (existing) {
        existing.quantity = variant.quantity;
        existing.price = variant.price;
      } else {
        cart.push({ ...variant });
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Items Added");
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  }

  // for check and radio select

  function handleSelect(product, variant, isChecked) {
    setSelectedItems((prev) => {
      const updatedVariant = {
        ...products
          .find((p) => p.category === product.category)
          .variants.find((v) => v.name === variant.name),
        category: product.category,
      };

      if (product.selectionType === "radio") {
        return prev
          .filter((item) => item.category !== product.category)
          .concat(updatedVariant);
      } else {
        if (isChecked) {
          return [...prev, updatedVariant];
        } else {
          return prev.filter((item) => item.name !== variant.name);
        }
      }
    });
  }

  // price

  function calculate(variant) {
    let price = 0;

    if (variant.unit === "g" && !variant.isSingle) {
      if (variant.count === 1) {
        price = (variant.pricePerUnit / 1000) * variant.baseQuantity;
      } else {
        const perGramPrice = variant.pricePerUnit / 1000;
        const totalGrams = variant.baseQuantity * variant.count;
        price = perGramPrice * totalGrams;
      }
    } else {
      price = variant.pricePerUnit * variant.count;
    }

    if (variant.discount) {
      price = price - (price * variant.discount) / 100;
    }

    return price;
  }

  //sort and filter

  // NEW: compute sortedProducts
  const sortedProducts = useMemo(() => {
    if (!search) return products;

    // Put categories with matching variants first
    const match = [];
    const rest = [];

    products.forEach((product) => {
      const hasMatch = product.variants.some((v) =>
        v.name.toLowerCase().includes(search.toLowerCase())
      );
      if (hasMatch) {
        match.push(product);
      } else {
        rest.push(product);
      }
    });

    return [...match, ...rest];
  }, [products, search]);

  return (
    <div>
      <div className="productback">
        <div className="product_content">
          <div>
            <div className="search">
              <input
                type="text"
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                placeholder=" search here..."
              />
            </div>
            {products.map((product, productIndex) => (
              <div className="main_content" key={productIndex}>
                {sortedProducts.map((product, productIndex) => (
                  <div className="main_content" key={productIndex}>
                    <div className="heading">
                      <h3 className="head_product">{product.category}</h3>
                    </div>
                    <ul className="list">
                      {product.variants.map((type, variantIndex) => (
                        <div key={variantIndex}>
                          <li>
                            <label>
                              <input
                                className="input"
                                type={product.selectionType}
                                name={product.category}
                                checked={selectedItems.some(
                                  (item) => item.name === type.name
                                )}
                                onChange={(e) =>
                                  handleSelect(product, type, e.target.checked)
                                }
                                style={{ accentColor: "black" }}
                              />{" "}
                              {type.name} {type.baseQuantity} {type.unit}{" "}
                              <span className="pro_price">
                                Price: ₹{calculate(type).toFixed(2)}{" "}
                                {type.discount > 0 && (
                                  <span
                                    style={{
                                      color: "green",
                                      marginLeft: "10px",
                                    }}
                                  >
                                    ({type.discount}% OFF)
                                  </span>
                                )}
                              </span>
                            </label>

                            {selectedItems.some(
                              (item) => item.name === type.name
                            ) && (
                              <div className="sec_half">
                                <button
                                  onClick={() =>
                                    increment(productIndex, variantIndex)
                                  }
                                >
                                  +
                                </button>{" "}
                                {type.count}{" "}
                                <button
                                  onClick={() =>
                                    decrement(productIndex, variantIndex)
                                  }
                                >
                                  -
                                </button>{" "}
                              </div>
                            )}
                            <span style={{ color: "red", marginLeft: "20px" }}>
                              {" "}
                              {type.count > 5 ? (
                                <span style={{ color: "red" }}>
                                  {" "}
                                  Stock Left:{type.stock - type.count}
                                </span>
                              ) : null}
                            </span>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="cart_foot">
          {products.map((product) => (
           
          ))}
        </div> */}
      </div>
      {/* {products.reduce((total, item) => total + item.baseQuantity * item.count, 0)} */}
      <div className="Add_cart">
        <button onClick={() => addToCart(selectedItems)}> Add to Cart </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Products;
