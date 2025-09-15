import React from 'react'

const PrinthighProduct = () => {
    const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 }
];

let big = 0;
for (let i=0 ; i < products.length; i++){
    if(products[i].price > big){
        big = products[i].price
    }

}
  return (
    <div>
        <h3>EXPENSIVE PRODUCT</h3>

       {products.map((pr) => (
            <p>{pr.name}: {pr.price}</p>
        ))}
        <p>The expensive product : {big}</p>
      
    </div>
  )
}

export default PrinthighProduct
