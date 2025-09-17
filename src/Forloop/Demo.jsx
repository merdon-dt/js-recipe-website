import React, { useState } from 'react'

const Demo = () => {
    const [store,setstore] = useState([])
    const [count,setcount] = useState(0)
 
 
    
    const add = (e) => {
       setstore([...store,e])
       setcount(pre => pre+1)
    }

    const remove = (idx) => {
         setstore(s => s.filter((_, index) => index !== idx));
        setcount(prev => prev - 1);

    }

    

  return (
    <div>
         <div className='divmainbox'>
            <div className='cart_img' onClick={() => add("apple")}>
            </div> 
       
        <div className='cart_img2' onClick={() => add("Mango")}></div>
        <div className='cart_img3' onClick={() => add("Grapes")}></div> 
         </div>
        
        <p>{count}</p>
        <div className='cartitem'>
        {store.map((fruit,index) => (
           <div className='flexdel'> <div  key={index}>{fruit} </div> <p onClick={() => remove(index)}><i class="bi bi-trash3"></i></p></div>
        ))}
        </div>


      
    </div>
  )
}

export default Demo
