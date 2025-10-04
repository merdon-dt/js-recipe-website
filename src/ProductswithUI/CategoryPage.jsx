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

 const increment = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingQty = cart
      .filter(
        (item) =>
          item.name === activeVariant.name &&
          item.category === categoryName
      )
      .reduce((sum, item) => sum + item.count, 0);

    if (existingQty + quan < activeVariant.stock) {
      setquan((q) => q + 1);
    } else {
      toast.error("Reached maximum stock limit!");
    }
  };

  const decrement = () => setquan((q) => (q > 1 ? q - 1 : 1));


  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productsAll = JSON.parse(localStorage.getItem("products")) || [];

    const product = productsAll.find((p) => p.category === categoryName);
    if (!product) return;

    const realVariant = product.variants.find((v) => v.name === activeVariant.name);
    if (!realVariant) return;

    const qty = quan;

    const alreadyInCart = cart
      .filter((item) => item.name === realVariant.name && item.category === categoryName)
      .reduce((s, it) => s + (it.count || 0), 0);

    if (alreadyInCart + qty > (realVariant.stock || 0)) {
      toast.error("Not enough stock!");
      return;
    }

    const totalQuantity = realVariant.baseQuantity * qty;
    const basePrice =
      realVariant.unit === "g"
        ? (realVariant.pricePerUnit / 1000) * totalQuantity
        : realVariant.pricePerUnit * totalQuantity;

    const discountAmt = realVariant.discount ? (basePrice * realVariant.discount) / 100 : 0;
    const priceAfterDiscount = basePrice - discountAmt;
    const tax = priceAfterDiscount * (realVariant.taxRate || 0);
    const finalPrice = priceAfterDiscount + tax;

    const newItem = {
      name: realVariant.name,
      category: categoryName,
      count: qty,
      quantity: totalQuantity,
      baseQuantity: realVariant.baseQuantity,
      unit: realVariant.unit,
      pricePerUnit: realVariant.pricePerUnit,
      basePrice,
      discountAmt,
      tax,
      price: finalPrice,
      discount: realVariant.discount ?? 0,
      taxRate: realVariant.taxRate ?? 0,
      img: realVariant.img ?? null,
    };

    const mergeable = product.isInCart === false;

    if (mergeable) {
      const idx = cart.findIndex((it) => it.name === newItem.name && it.category === newItem.category);
      if (idx >= 0) {
        cart[idx] = {

          ...cart[idx],
          count: cart[idx].count + newItem.count,
          quantity: cart[idx].quantity + newItem.quantity,
          basePrice: cart[idx].basePrice + newItem.basePrice,
          discountAmt: cart[idx].discountAmt + newItem.discountAmt,
          tax: cart[idx].tax + newItem.tax,
          price: cart[idx].price + newItem.price,
        };
      } else {
        cart.push(newItem);
      }
    } else {
      cart.push(newItem);
    }

    realVariant.stock = Math.max(0, (realVariant.stock || 0) - qty);
    localStorage.setItem("products", JSON.stringify(productsAll));

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

          <p style={{ fontSize: "14px", color: "red", marginTop: "5px" }}>
            {products.find((p) => p.category === categoryName)?.isInCart
              ? "This product will be added as a separate item in the cart."
              : "This product will merge with existing items in the cart."}
          </p>
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
