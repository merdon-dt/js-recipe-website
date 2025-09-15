import React from 'react'

const Orders2 = () => {
    const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [
      { name: "Apple", quantity: 2, unit: "kg", pricePerUnit: 150, category: "Fruit" },
      { name: "Banana", quantity: 5, unit: "kg", pricePerUnit: 50, category: "Fruit" }
    ],
    isDelivered: true,
    orderDate: "2025-09-01"
  },
  {
    orderId: 102,
    customer: "Jane",
    items: [
      { name: "Milk", quantity: 3, unit: "litre", pricePerUnit: 60, category: "Dairy" },
      { name: "Bread", quantity: 2, unit: "loaf", pricePerUnit: 40, category: "Bakery" },
      { name: "Butter", quantity: 1, unit: "pack", pricePerUnit: 120, category: "Dairy" }
    ],
    isDelivered: false,
    orderDate: "2025-09-10"
  },
  {
    orderId: 103,
    customer: "Mike",
    items: [
      { name: "Cheese", quantity: 2, unit: "pack", pricePerUnit: 200, category: "Dairy" },
      { name: "Orange", quantity: 4, unit: "kg", pricePerUnit: 100, category: "Fruit" }
    ],
    isDelivered: true,
    orderDate: "2025-09-05"
  }
];


  return (
    <div>
        {orders.map(order => (
            <div>
                <h3>Customer: {order.customer}</h3>
                <ul>
                    {order.items.map((itm) => (
                        <li>{itm.name} - {itm.quantity} {itm.unit} {itm.pricePerUnit} ({itm.category})</li>
                    ))}
                </ul>
                <h4>Total:{order.items.reduce((a,c) => a + c.quantity*c.pricePerUnit, 0)}</h4>
            </div>
        ))}
      
    </div>
  )
}

export default Orders2
