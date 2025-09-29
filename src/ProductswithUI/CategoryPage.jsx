import { useParams } from "react-router-dom";
import "./category.css";
import { useState } from "react";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const categoryProducts = products.filter((p) => p.category === categoryName);

  const variants = categoryProducts.flatMap((p) => p.variants);

  const [activeIdx, setActiveIdx] = useState(0);

  const activeVariant = variants[activeIdx];
  const otherVariants = variants.filter((i) => i !== activeIdx);

  return (
    <div>
      
        <div className="Productlist">
              <img src={activeVariant.img} height={400} width={400} alt="" />
              <div>
                <h1>{activeVariant.category}</h1>
                 <h3>{activeVariant.name} </h3>
                <p>{activeVariant.description}</p>
               
                <h3> </h3>{" "}
                {/* <div>Tax ({(v.taxRate * 100).toFixed(0)}%)</div> */}
                <p>
                  Select Quantity:
                  <button onClick={() => increment(i)}>+</button> {activeVariant.count}{" "}
                  <button onClick={() => decrement(i)}>-</button>
                </p>
                <h3 style={{ color: "green" }}>
                  Price:{" "}
                  {(activeVariant.unit === "g"
                    ? ((activeVariant.baseQuantity * activeVariant.count) / 1000) * activeVariant.pricePerUnit
                    : activeVariant.baseQuantity * activeVariant.count * activeVariant.pricePerUnit
                  ).toFixed(2)}{" "}
                  <span style={{ color: "red" }}>
                    (discount: {activeVariant.discount}%)
                  </span>
                </h3>
                <h4>Select Variants</h4>
              </div>
            </div>


      <div >
        {otherVariants.map((v, i) => (
          <div
            key={i}
            className="option"
            onClick={() =>
              setActiveIdx(variants.findIndex((x) => x.name === v.name))
            }
          >
            <label>{v.name}</label>
      

            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
