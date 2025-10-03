import { useParams } from "react-router-dom";
import "./category.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem("products")) || [];

  const categoryProducts = products.filter((p) => p.category === categoryName);

  const variants = categoryProducts.flatMap((p) => p.variants);

  const [activeIdx, setActiveIdx] = useState(0);
  const [quan, setquan] = useState(1);

  const activeVariant = variants[activeIdx];
  const otherVariants = variants.filter((i) => i !== activeIdx);

  const increment = () => setquan((q) => q + 1);
  const decrement = () => setquan((q) => (q > 1 ? q - 1 : 1));

  const addToCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

 
  const newItem = {
    ...activeVariant,
    category: categoryName,
  };

  if (activeVariant.isInCart === false) {
    const existingIndex = cart.findIndex(
      (item) =>
        item.name === newItem.name && item.category === newItem.category
    );

    if (existingIndex !== -1) {
      const existingItem = cart[existingIndex];
      cart[existingIndex] = {
        ...existingItem,
        count: existingItem.count + newItem.count,
        quantity: existingItem.quantity + newItem.quantity,
        basePrice: existingItem.basePrice + newItem.basePrice,
        discountAmt: existingItem.discountAmt + newItem.discountAmt,
        tax: existingItem.tax + newItem.tax,
        price: existingItem.price + newItem.price,
      };
    } else {
      cart.push(newItem); 
    }
  } else {
    cart.push(newItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Item Added");

  setTimeout(() => navigate("/cart"), 1000);
};

  const calculatePrice = () => {
    const basePrice =
      activeVariant.unit === "g"
        ? ((activeVariant.baseQuantity * quan) / 1000) *
          activeVariant.pricePerUnit
        : activeVariant.baseQuantity * quan * activeVariant.pricePerUnit;
    const finalPrice = basePrice;

    return { finalPrice };
  };
  
  return (
    <div>
      <div className="Productlist">
        <img src={activeVariant.img} height={400} width={400} alt="" />
        <div>
          <h1>{activeVariant.category}</h1>
          <h2>{activeVariant.name} </h2>
          <h5>{activeVariant.description}</h5>
          <h5>Nutrition: {activeVariant.nutrition}</h5>
          <h3> </h3> {/* <div>Tax ({(v.taxRate * 100).toFixed(0)}%)</div> */}
          <p>
            Select Quantity: <button onClick={increment}>+</button> {quan}{" "}
            <button onClick={decrement}>-</button>
          </p>
          <h2 style={{ color: "green" }}>
            Price: {calculatePrice().finalPrice}{" "}
            <span style={{ fontSize: "16px" }}>
              {" "}
              + (withTax: {activeVariant.taxRate})
            </span>
          </h2>
          <h3 style={{ color: "red" }}>{activeVariant.discount}% OFF</h3>
          <button className="cartbut" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="Product_select">
        <h3>Select Varient - </h3>
        {otherVariants.map((v, i) => (
          <div
            key={i}
            className="option"
            onClick={() => {
              setActiveIdx(variants.findIndex((x) => x.name === v.name)),
                setquan(1);
            }}
          >
            <div className="product_item">
              <p>{v.name}</p>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CategoryPage;
