import { useParams } from "react-router-dom";
import "./category.css";
import { useState } from "react";

const CategoryPage = () => {
  const [cartdata, setcartdata] = useState([]);

  const { categoryName } = useParams();
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const categoryProducts = products.filter((p) => p.category === categoryName);

  const updateCart = (newCart) => {
    newCart = newCart.map((item) => {
        const Pricewithtax = item.price * item.count;

        const finalprice = item.discount 
        ?
        Pricewithtax - (Pricewithtax * item.discount) / 100
        : Pricewithtax;

        return {
            ...item,
            Pricewithtax,
            finalprice
        };
    });

    setcartdata(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increment = (idx) => {
    const handle = [...cartdata];
    if (handle[idx].count < handle[idx].stock) {
      handle[idx].count += 1;
      updateCart(handle);
    } else {
      toast.warning("Out of Stock");
    }
  };

  const decrement = (idx) => {
    const handle = [...cartdata];
    handle[idx].count = Math.max(1, handle[idx].count - 1);
    updateCart(handle);
  };

  return (
    <div>
      {categoryProducts.map((product) => (
        <div className="">
          <h2>{product.category}</h2>
          {product.variants.map((v, i) => (
            <div className="Productlist" key={i}>
              <img src={v.img} height={400} width={400} alt="" />
              <div>
                <h1>{product.category}</h1>
                <p>{v.description}</p>
                <h3>{v.name} </h3>
                <h3> </h3>{" "}
                {/* <div>Tax ({(v.taxRate * 100).toFixed(0)}%)</div> */}
                <p>
                  Select Quantity:
                  <button onClick={() => increment(i)}>+</button> {v.count}{" "}
                  <button onClick={() => decrement(i)}>-</button>
                </p>
                <h3 style={{ color: "green" }}>
                  Price:{" "}
                  {(v.unit === "g"
                    ? ((v.baseQuantity * v.count) / 1000) * v.pricePerUnit
                    : v.baseQuantity * v.count * v.pricePerUnit
                  ).toFixed(2)}{" "}
                  <span style={{ color: "red" }}>
                    (diccount: {v.discount}%)
                  </span>
                </h3>
                <h4>Select Variants</h4>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default CategoryPage;
