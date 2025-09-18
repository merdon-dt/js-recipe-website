import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([
    {
      orderId: 1,
      customer: "John",
      items: [
        { name: "Apple", quantity: 1, unit: "kg", pricePerUnit: 150, },
        { name: "Milk", quantity: 2, unit: "litre", pricePerUnit: 60 },
      ],  
    },
    {
      orderId: 2,
      customer: "Alex",
      items: [
        { name: "Apple", quantity: 1, unit: "kg", pricePerUnit: 150, },
        { name: "Milk", quantity: 2, unit: "litre", pricePerUnit: 60 },
      ],
    }
  ]);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
