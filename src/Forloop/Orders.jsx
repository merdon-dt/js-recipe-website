import React from 'react'

const Orders = () => {
    const orders = [
  { id: 1, items: ["apple", "banana"] },
  { id: 2, items: ["milk", "bread", "butter"] },
]; 

const ordersdata = () => {
     let data = [];

     for ( let i=0; i< orders.length;i++){
        let itm = [];
        for ( let j=0; j< orders[i].items.length; j++){
            itm.push(<p>{ orders[i].items[j]}</p>)
        }

        data.push(<p>{itm}</p>)
     }
     return data
}

  return (
    <div>
        <h3>PRINT ALL ITEMS OF ORDERS</h3>

        <p>{ordersdata()}</p>
        {/* <p>{ordersdata().split("").reverse().join("")}</p> */}

      
    </div>
  )
}

export default Orders
