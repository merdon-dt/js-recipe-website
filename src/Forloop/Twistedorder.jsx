import React from 'react'

const Twistedorder = () => {
    const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [
      { name: "Apple", quantity: 500, unit: "g", pricePerUnit: 150, category: "Fruit" },
      { name: "Banana", quantity: 2, unit: "kg", pricePerUnit: 50, category: "Fruit" }
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
      { name: "Butter", quantity: 500, unit: "g", pricePerUnit: 120, category: "Dairy" }
    ],
    isDelivered: false,
    orderDate: "2025-09-10"
  },
  {
    orderId: 103,
    customer: "Mike",
    items: [
      { name: "Cheese", quantity: 400, unit: "g", pricePerUnit: 200, category: "Dairy" },
      { name: "Orange", quantity: 4, unit: "kg", pricePerUnit: 100, category: "Fruit" }
    ],
    isDelivered: true,
    orderDate: "2025-09-05"
  },
  {
    orderId: 104,
    customer: "Sara",
    items: [
      { name: "Yogurt", quantity: 750, unit: "ml", pricePerUnit: 80, category: "Dairy" },
      { name: "Strawberry", quantity: 1, unit: "kg", pricePerUnit: 200, category: "Fruit" },
      { name: "Cake", quantity: 1, unit: "pack", pricePerUnit: 500, category: "Bakery" }
    ],
    isDelivered: true,
    orderDate: "2025-09-08"
  },
  {
    orderId: 105,
    customer: "David",
    items: [
      { name: "Water", quantity: 2, unit: "litre", pricePerUnit: 30, category: "Beverage" },
      { name: "Juice", quantity: 1, unit: "litre", pricePerUnit: 120, category: "Beverage" },
      { name: "Eggs", quantity: 12, unit: "pack", pricePerUnit: 60, category: "Dairy" }
    ],
    isDelivered: false,
    orderDate: "2025-09-12"
  },
  {
    orderId: 106,
    customer: "Anna",
    items: [
      { name: "Tomato", quantity: 1.5, unit: "kg", pricePerUnit: 80, category: "Vegetable" },
      { name: "Cucumber", quantity: 750, unit: "g", pricePerUnit: 50, category: "Vegetable" },
      { name: "Cheese", quantity: 250, unit: "g", pricePerUnit: 200, category: "Dairy" }
    ],
    isDelivered: true,
    orderDate: "2025-09-15"
  }
]
  return (
    <div>

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
      
    </div>
  )
}

export default Twistedorder
