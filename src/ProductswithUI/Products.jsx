import React, { useEffect, useMemo, useState } from "react";
import "./Product.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { image } from "../assets/assests";

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
        selectionType: "checkbox",
       
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
            taxRate: 0.12,
            discount: 10,
            description:
              "Sweet and juicy apples with a vibrant red hue, grown in the pristine valleys of Kashmir.",
            nutrition: "Rich in fiber, Vitamin C, and antioxidants.",
            bestUses: "Ideal for eating raw, making pies, or juicing.",
            storageTip:
              "Keep refrigerated to maintain crispness up to 2 weeks.",
            packaging: "Packed in ventilated paper-based trays.",
            harvestSeason: "October to December",
            img: image.Apple,
             isInCart: false,
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
            taxRate: 0.05,
            discount: 40,
            description: "Tangy, firm apples perfect for salads and snacking.",
            nutrition: "Low in sugar and high in dietary fiber.",
            bestUses: "Great for green salads, smoothies, and baking.",
            storageTip: "Store in cool dry place or refrigerate for freshness.",
            packaging: "Biodegradable bag with moisture control lining.",
            harvestSeason: "August to October",
            img: image.Apple,
             isInCart: false,
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
            taxRate: 0.12,
            discount: 20,
            description:
              "Golden-skinned apples with a mellow sweetness, sourced from high-altitude orchards.",
            nutrition: "Packed with potassium, vitamin K, and dietary fiber.",
            bestUses: "Perfect for making applesauce, desserts, or eating raw.",
            storageTip: "Keep in refrigerator crisper drawer.",
            packaging: "Eco-friendly mesh bags.",
            harvestSeason: "September to November",
            img: image.Apple,
             isInCart: true,
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
            taxRate: 0.12,
            description:
              "Large-sized bananas known for their creaminess and rich taste.",
            nutrition: "High in potassium, magnesium, and vitamin B6.",
            bestUses: "Perfect for shakes, baking, or direct consumption.",
            storageTip:
              "Keep at room temperature; avoid refrigeration before ripening.",
            packaging: "Wrapped in banana leaf eco packs.",
            harvestSeason: "Year-round",
            img: image.Banana,
            isInCart: true,

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
            taxRate: 0.12,
            description:
              "Small, sweet bananas with a distinct aroma and thin peel.",
            nutrition: "Natural energy booster, high in fiber.",
            bestUses: "Snack for kids, religious offerings, and desserts.",
            storageTip: "Store in a cool dry place; do not refrigerate.",
            packaging: "Natural jute wrap with cushioning.",
            harvestSeason: "March to November",
            img: image.Banana,
            isInCart: false,
 
          },
        ],
      },
      {
        category: "Milk",
        selectionType: "radio",
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
            taxRate: 0.05,
            description: "Freshly sourced cow milk with balanced fat content.",
            nutrition: "Rich in calcium, protein, and B-vitamins.",
            bestUses: "Drinking, tea/coffee, and cooking.",
            storageTip: "Refrigerate below 4°C and consume within 3 days.",
            packaging: "HDPE bottle, tamper-evident seal.",
            processInfo: "Pasteurized and homogenized",
            img: image.Milk,
            isInCart: false,

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
            taxRate: 0.07,
            description: "Creamier, high-fat buffalo milk for rich taste.",
            nutrition: "Excellent source of calcium and protein.",
            bestUses: "Ideal for making paneer, sweets, and curd.",
            storageTip: "Consume within 2 days of opening.",
            packaging: "2L pouch with thermal insulation.",
            processInfo: "Double pasteurized",
            img: image.Milk,
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
            taxRate: 0.05,
            description: "Milk from free-range cows fed on organic grass.",
            nutrition: "High in Omega-3 fatty acids and antioxidants.",
            bestUses: "Daily drinking, suitable for children.",
            storageTip: "Keep refrigerated and shake before use.",
            packaging: "Glass bottle, reusable.",
            processInfo: "Unprocessed, A2 certified",
            img: image.Milk,
            isInCart: false,

          },
        ],
      },
      {
        category: "Bread",
        selectionType: "radio",
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
            taxRate: 0.1,
            description: "Soft, fluffy white bread baked fresh daily.",
            nutrition: "Fortified with iron and folic acid.",
            bestUses: "Ideal for sandwiches and toasts.",
            storageTip: "Keep in airtight bag at room temperature.",
            packaging: "Plastic wrap with easy-seal clip.",
            ingredients: "Refined wheat flour, yeast, sugar, salt",
            img: image.Bread,
            isInCart: true,

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
            taxRate: 0.08,
            description:
              "Made with whole wheat flour and bran for added fiber.",
            nutrition: "High in fiber, helps in digestion.",
            bestUses: "Great for healthy sandwiches and breakfast.",
            storageTip: "Keep in bread box or refrigerator.",
            packaging: "Brown paper wrap with transparent window.",
            ingredients: "Whole wheat flour, bran, vegetable oil",
            img: image.Bread,
            isInCart: true,

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
            taxRate: 0.05,
            description:
              "Enriched with 7 grains for added nutrition and taste.",
            nutrition: "High in protein, omega-3, and complex carbs.",
            bestUses: "Perfect with soups, dips, or toasted.",
            storageTip: "Refrigerate after opening.",
            packaging: "Zip-lock recyclable plastic wrap.",
            ingredients: "Wheat, oats, barley, flaxseeds, millet",
            img: image.Bread,
            isInCart: true,

          },
        ],
      },
      {
        category: "Butter",
        selectionType: "radio",
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
            taxRate: 0.12,
            description: "Classic salted butter made from pure cow’s milk.",
            nutrition: "Contains saturated fats, vitamin A, and calcium.",
            bestUses: "Perfect for spreading, baking, and sautéing.",
            storageTip: "Keep refrigerated and consume within 15 days.",
            packaging: "Foil-wrapped brick in paper box.",
            ingredients: "Pasteurized cream, salt",
            isInCart: false,

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
            taxRate: 0.15,
            description: "Pure, creamy butter with no added salt.",
            nutrition: "Ideal for controlled sodium intake.",
            bestUses: "Best for baking and making sauces.",
            storageTip: "Refrigerate and keep sealed after use.",
            packaging: "Butter paper and cardboard sleeve.",
            ingredients: "Pasteurized cream",
            isInCart: false,

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
            taxRate: 0.08,
            description:
              "Flavored with fresh herbs like parsley, oregano, and thyme.",
            nutrition: "Adds flavor and aroma with minimal carbs.",
            bestUses: "Topping on breads, steaks, and vegetables.",
            storageTip: "Keep refrigerated; use within 7 days of opening.",
            packaging: "Glass jar with resealable lid.",
            ingredients: "Butter, mixed herbs, garlic",
           isInCart: false,
 
          },
        ],
      },

      {
        category: "Cheese",
        selectionType: "checkbox",
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
            taxRate: 0.15,
            description: "Firm textured, matured cheese with sharp taste.",
            nutrition: "High in calcium, protein, and vitamin D.",
            bestUses: "Ideal for sandwiches, grilled cheese, and burgers.",
            storageTip: "Wrap tightly and refrigerate.",
            packaging: "Vacuum-sealed block.",
            origin: "India",
            isInCart: false,

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
            taxRate: 0.05,
            description: "Soft and stretchy cheese perfect for pizzas.",
            nutrition: "Rich in protein and calcium, moderate fat content.",
            bestUses: "Pizza, lasagna, baked pasta.",
            storageTip: "Store in chiller tray, use within 3 days of opening.",
            packaging: "Resealable zip pouch.",
            origin: "India",
            isInCart: false,

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
            taxRate: 0.0,
            description: "Hard, aged cheese with a nutty, salty flavor.",
            nutrition: "High in protein and calcium, low moisture content.",
            bestUses: "Grated over pasta, risotto, or salads.",
            storageTip: "Wrap in wax paper, then foil and refrigerate.",
            packaging: "Wax paper in vacuum pack.",
            origin: "Italy",
            isInCart: false,

          },
        ],
      },
      {
        category: "Orange",
        selectionType: "radio",
        isInCart: false,
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
            taxRate: 0.0,
            description:
              "Juicy oranges with sweet-sour balance, native to Nagpur.",
            nutrition: "Excellent source of Vitamin C and antioxidants.",
            bestUses: "Juicing, salads, or eating fresh.",
            storageTip: "Store in a cool, dry place or refrigerate.",
            packaging: "Paper carton with mesh ventilation.",
            harvestSeason: "December to February",
            isInCart: false,

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
            taxRate: 0.12,
            description:
              "Hybrid mandarin with a bright orange peel and rich pulp.",
            nutrition: "Rich in Vitamin A, B6, and C.",
            bestUses: "Juice extraction, fruit bowls, desserts.",
            storageTip: "Refrigerate for prolonged shelf life.",
            packaging: "Recyclable net bag.",
            harvestSeason: "March to April",
           isInCart: false,

          },
        ],
      },
      {
        category: "Juice",
        selectionType: "radio",
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
            taxRate: 0.12,
            description: "Tropical mango juice with no added preservatives.",
            nutrition: "High in natural sugars and Vitamin A.",
            bestUses: "Chilled summer beverage or smoothie base.",
            storageTip: "Refrigerate after opening; consume within 3 days.",
            packaging: "Tetra Pak with cap.",
            ingredients: "Mango pulp, water, sugar",
        isInCart: false,

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
            taxRate: 0.07,
            description: "Pulpy orange juice with tangy sweetness.",
            nutrition: "Loaded with Vitamin C, folate, and potassium.",
            bestUses: "Great for breakfast or immunity boost.",
            storageTip: "Keep chilled and shake before use.",
            packaging: "PET bottle with tamper-proof seal.",
            ingredients: "Orange juice concentrate, water",
            isInCart: false,

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
            taxRate: 0.07,
            description:
              "Sweet and smooth apple juice made from Himachal apples.",
            nutrition: "Natural sugars, vitamin C, polyphenols.",
            bestUses: "Cold drink, detox blends, lunch packs.",
            storageTip: "Once opened, refrigerate and use in 48 hours.",
            packaging: "Tetra Pak with screw cap.",
            ingredients: "Apple juice concentrate, water, citric acid",
            isInCart: false,

          },
        ],
      },
      {
        category: "Snacks",
        selectionType: "checkbox",
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
            taxRate: 0.1,
            description:
              "Crispy, salted potato chips made from premium potatoes.",
            nutrition: "High in carbs, moderate fat, low protein.",
            bestUses: "Snack-time, parties, with dips.",
            storageTip: "Store in a cool place; keep sealed.",
            packaging: "Nitrogen-sealed foil pouch.",
            flavor: "Classic salted",
            isInCart: true,

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
            taxRate: 0,
            description:
              "Crunchy corn tortilla chips with a bold cheesy flavor.",
            nutrition: "Source of carbs and sodium; low protein.",
            bestUses: "Movie nights, with salsa or cheese dip.",
            storageTip: "Seal tightly after opening.",
            packaging: "Resealable pack.",
            flavor: "Cheese",
            isInCart: true,

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
            taxRate: 0.12,
            description: "Spicy, crunchy peanuts coated with tangy masala.",
            nutrition: "High protein, high fat, spicy flavor.",
            bestUses: "Tea-time snack, party munchie.",
            storageTip: "Store in airtight container.",
            packaging: "Foil pouch with zip-lock.",
            flavor: "Spicy Masala",
            isInCart: true,

          },
        ],
      },
      {
        category: "Tomato",
        selectionType: "radio",
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
            taxRate: 0.05,
            description:
              "Plump, juicy tomatoes with consistent size and deep red color.",
            nutrition: "Rich in lycopene, vitamin A, and C.",
            bestUses: "Cooking, gravies, ketchup making.",
            storageTip: "Store at room temp; avoid fridge unless overripe.",
            packaging: "Paper tray with netting.",
            harvestSeason: "Year-round",
           isInCart: false,

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
            taxRate: 0.12,
            description:
              "Sweet, bite-sized tomatoes grown using hydroponic methods.",
            nutrition: "Low in calories, rich in antioxidants.",
            bestUses: "Salads, garnishes, skewers.",
            storageTip: "Keep refrigerated in original pack.",
            packaging: "Plastic punnet box.",
            harvestSeason: "All seasons",
            isInCart: false,

          },
        ],
      },
      {
        category: "Cucumber",
        selectionType: "radio",
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
            taxRate: 0.12,
            description: "Long, seedless cucumbers with smooth skin.",
            nutrition: "Hydrating, low-calorie, rich in silica.",
            bestUses: "Salads, sandwiches, detox water.",
            storageTip: "Wrap in paper towel and refrigerate.",
            packaging: "Plastic sleeve wrap.",
            harvestSeason: "Year-round (greenhouse)",
            isInCart: true,

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
            taxRate: 0.12,
            description:
              "Traditional variety with crunchy texture and mild flavor.",
            nutrition: "Excellent for hydration, good fiber source.",
            bestUses: "Salads, raita, traditional dishes.",
            storageTip: "Keep in fridge crisper tray.",
            packaging: "Net bag with paper lining.",
            harvestSeason: "Summer to early monsoon",
            isInCart: true,

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

 function addToCart(variants) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  variants.forEach((variant) => {
    const product = products.find((p) => p.category === variant.category);
    if (!product) return;

    const realVariant = product.variants.find((v) => v.name === variant.name);
    if (!realVariant) return;

    const qty = realVariant.count ?? 1;
    const totalQuantity = realVariant.baseQuantity * qty;

    const basePrice =
      realVariant.unit === "g"
        ? (realVariant.pricePerUnit / 1000) * totalQuantity
        : realVariant.pricePerUnit * totalQuantity;

    const discountAmt = realVariant.discount
      ? (basePrice * realVariant.discount) / 100
      : 0;

    const priceAfterDiscount = basePrice - discountAmt;
    const tax = priceAfterDiscount * (realVariant.taxRate || 0);
    const finalPrice = priceAfterDiscount + tax;

    const newItem = {
      ...realVariant,
      category: product.category,
      count: qty,
      quantity: totalQuantity,
      basePrice,
      discountAmt,
      tax,
      price: finalPrice,
    };

    if (realVariant.isInCart === false) {
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
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  toast.success("Items Added");

  setTimeout(() => navigate("/cart"), 1000);
}
  

  function handleSelect(product, variant, isChecked) {
    setSelectedItems((prev) => {
      const updatedVariant = {
        ...products
          .find((p) => p.category === product.category)
          .variants.find((v) => v.name === variant.name),
        category: product.category,
        count: 1,
        isSingle: true,
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
    if (isChecked) {
      setProducts((p) =>
        p.map((prod) =>
          prod.category === product.category
            ? {
                ...prod,
                variants: prod.variants.map((v) =>
                  v.name === variant.name
                    ? { ...v, count: 1, isSingle: true }
                    : v
                ),
              }
            : prod
        )
      );
    }
  }

  const sortedProducts = useMemo(() => {
    const sortVariants = (variants) =>
      [...variants].sort((a, b) => a.pricePerUnit - b.pricePerUnit);

    if (!search) {
      return products;
    }

    return products
      .filter((product) =>
        product.category.toLowerCase().includes(search.toLowerCase())
      )
      .map((p) => ({
        ...p,
        variants: sortVariants(p.variants),
      }));
  }, [products, search]);

  const clear = () => {
    setsearch("");
  };

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
              />
              <div className="clear" onClick={clear}>
                <IoClose />
              </div>
            </div>

            {sortedProducts.map((product, productIndex) => (
              <div className="main_content" key={productIndex}>
                <div className="heading">
                  <h2
                    onClick={() => navigate(`/cate/${product.category}`)}
                    style={{
                      cursor: "pointer",
                      color: "white",
                      marginLeft: "20px",
                    }}
                  >
                    {product.category}
                  </h2>
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
                            Base:{" "}
                            {(type.unit === "g"
                              ? ((type.baseQuantity * type.count) / 1000) *
                                type.pricePerUnit
                              : type.baseQuantity *
                                type.count *
                                type.pricePerUnit
                            ).toFixed(2)}{" "}
                            + Tax ({(type.taxRate * 100).toFixed(0)}%){" "}
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
                          {type.count > 3 && (
                            <span style={{ color: "red", marginLeft: "20px" }}>
                              Stock limit: {type.stock - type.count}
                            </span>
                          )}
                        </span>
                      </li>
                    </div>
                  ))}
                </ul>
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
