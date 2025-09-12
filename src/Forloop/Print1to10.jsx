import React from 'react'

const Print1to10 = () => {

    const store = [];
    // const i=1
    for(let i=1;i<=10;i++){
        store.push(<p>{i}</p>)
    }
    
  return (
    <div>
        <h3>PRINT NUMBERS 1 TO 10</h3>
        <p>{store}</p>
      
    </div>
  )
}

export default Print1to10
