import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './Home/home'
import Mealsslider from './Meals/Mealsslider';
import Galary from  './Gallery/Galary';
import Pricing from './Pricing/Pricing';
import Mealsslider2 from './Meals/Mealsslider2';
import Foot from './Foot/Foot';
import Newsletter from './Newsletter/Newsletter';



const App = () => {
    const [newsopen, setNewsopen] = useState(false);

    useEffect(() => {
      const hide = localStorage.getItem("hidenews")

      if(!hide) {
        setNewsopen(true);
      }
    },[]);
   

    const closeNewsletter =() =>{
      setNewsopen(false)
    }


  return (
    <div>  <div> {newsopen && <Newsletter closenewsletter={closeNewsletter}/> }
    <Home/>
      <Mealsslider2/>
      <Mealsslider/>
      <Galary/>
      <Pricing/>
      <Foot/>
    </div> 
        
      
      
    </div>
  )
}

export default App
