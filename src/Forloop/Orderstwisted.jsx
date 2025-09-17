import React from 'react'

const Orderstwisted = () => {
    const orders = [
    {
      orderId: 101,
      customer: "John",
      items: [
        {
          name: "Apple",
          quantity: 500,
          unit: "g",
          pricePerUnit: 150,
          category: "Fruit",
        },
        {
          name: "Banana",
          quantity: 2,
          unit: "kg",
          pricePerUnit: 50,
          category: "Fruit",
        },
      ],
      isDelivered: true,
      orderDate: "2025-09-01",
    },
    {
      orderId: 102,
      customer: "Jane",
      items: [
        {
          name: "Milk",
          quantity: 3,
          unit: "litre",
          pricePerUnit: 60,
          category: "Dairy",
        },
        {
          name: "Bread",
          quantity: 2,
          unit: "loaf",
          pricePerUnit: 40,
          category: "Bakery",
        },
        {
          name: "Butter",
          quantity: 500,
          unit: "g",
          pricePerUnit: 120,
          category: "Dairy",
        },
      ],
      isDelivered: false,
      orderDate: "2025-09-10",
    },
    {
      orderId: 103,
      customer: "Mike",
      items: [
        {
          name: "Cheese",
          quantity: 400,
          unit: "g",
          pricePerUnit: 200,
          category: "Dairy",
        },
        {
          name: "Orange",
          quantity: 4,
          unit: "kg",
          pricePerUnit: 100,
          category: "Fruit",
        },
      ],
      isDelivered: true,
      orderDate: "2025-09-05",
    },
    {
      orderId: 104,
      customer: "Sara",
      items: [
        {
          name: "Yogurt",
          quantity: 750,
          unit: "ml",
          pricePerUnit: 80,
          category: "Dairy",
        },
        {
          name: "Strawberry",
          quantity: 1,
          unit: "kg",
          pricePerUnit: 200,
          category: "Fruit",
        },
        {
          name: "Cake",
          quantity: 1,
          unit: "pack",
          pricePerUnit: 500,
          category: "Bakery",
        },
      ],
      isDelivered: true,
      orderDate: "2025-09-08",
    },
    {
      orderId: 105,
      customer: "David",
      items: [
        {
          name: "Water",
          quantity: 2,
          unit: "litre",
          pricePerUnit: 30,
          category: "Beverage",
        },
        {
          name: "Juice",
          quantity: 1,
          unit: "litre",
          pricePerUnit: 120,
          category: "Beverage",
        },
        {
          name: "Eggs",
          quantity: 12,
          unit: "pack",
          pricePerUnit: 60,
          category: "Dairy",
        },
      ],
      isDelivered: false,
      orderDate: "2025-09-12",
    },
    {
      orderId: 106,
      customer: "Anna",
      items: [
        {
          name: "Tomato",
          quantity: 1.5,
          unit: "kg",
          pricePerUnit: 80,
          category: "Vegetable",
        },
        {
          name: "Cucumber",
          quantity: 750,
          unit: "g",
          pricePerUnit: 50,
          category: "Vegetable",
        },
        {
          name: "Cheese",
          quantity: 250,
          unit: "g",
          pricePerUnit: 200,
          category: "Dairy",
        },
      ],
      isDelivered: true,
      orderDate: "2025-09-15",
    },
  ];


  const twistprice = (quantity,unit) => {
      if(unit === "g"){
        return quantity/1000
      }
      else if(unit === "ml"){
        return quantity/1000
      }
      else{
        return quantity
      }
  }

  const TotalPrice = (itm) =>{
     const check = twistprice(itm.quantity,itm.unit)
     return check * itm.pricePerUnit
  }


  return (
    <div>
        {orders.map((order) => {
            const total = order.items.reduce((a,b) => {
              const price =  TotalPrice(b)
              return  a + price
             
            },0) 
            
           return (
             <div>
                <h3>Customer: {order.customer}</h3>
                
                <ul>
                    {order.items.map((item) =>(
                        <li>{item.name} - {item.quantity} {item.unit} {item.pricePerUnit} ({item.category})</li>
                    )
                    )}
                </ul>
                <h4>Total: {total}</h4>
            </div>
           )
        })}

      
    </div>
  )
}

export default Orderstwisted
