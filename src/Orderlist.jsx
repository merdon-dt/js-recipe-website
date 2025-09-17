import React, { useContext } from "react";
import { OrderContext } from "./OrderContext";

const OrderList = () => {
  const { orders } = useContext(OrderContext); 

  return (
    <div>
      <h2>Orders</h2>
      {orders.map((order) => (
        <div key={order.orderId}>
          <h4>Customer: {order.customer}</h4>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity} {item.unit} {item.pricePerUnit}
              </li>
            ))}
          </ul>
          <h4>Total:{order.items.reduce((a,c) => a + c.quantity*c.pricePerUnit, 0)}</h4>
        </div>
      ))}

    
    </div>
  );
};

export default OrderList;
