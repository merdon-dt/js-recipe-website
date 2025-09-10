import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home/home'
import Mealsslider from './Meals/Mealsslider';
import Galary from  './Gallery/Galary';
import Pricing from './Pricing/Pricing';
import Mealsslider2 from './Meals/Mealsslider2';
import Foot from './Foot/Foot';
import Newsletter from './Newsletter/Newsletter';
import Cook from './Recipe/Cook';



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
    <BrowserRouter>
    

      <Routes>
        <Route path='/' element={<>
           <Home/>
      <Mealsslider2/>
      <Mealsslider/>
      <Galary/>
      <Pricing/>
      <Foot/>
        </>}></Route>
        <Route path='/Cook' element={<Cook/>}></Route>
      </Routes>
      </BrowserRouter>
    </div> 
        
      <ToastContainer/>
      
    </div>
  )
}

export default App
