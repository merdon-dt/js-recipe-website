import React, { useState } from 'react'
import { image } from '../assets/assests'
import './News.css'
import { ToastContainer, toast } from 'react-toastify';



const Newsletter = ({closenewsletter}) => {
    const [email, setEmail] = useState("");
    const [notshow, setNotshow] = useState(false);

    const formsubmit = (e) => {
        e.preventDefault();

if (!email.trim()) {
      toast.warning("Please enter your email address");
    return; 
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
   toast.warning("Please enter correct email");
    return; 
  }

  const subscription = { email: email.trim(), notshow };


let store = JSON.parse(localStorage.getItem("new-sub"));
if(!Array.isArray(store)){
            store = store ? [store] : [];
        }
store.push(subscription)
localStorage.setItem("new-sub", JSON.stringify(store))

if(notshow){
  localStorage.setItem("hidenews", "true")
}
else {
  localStorage.removeItem("hidenews")
}
toast.success("Subscribed successfully");
closenewsletter();


    }

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center mainnews_box px-6 s  z-50'>
        <div className='bg-white flex w-[650px] newsmain_box  relative '>
            <button className='absolute top-2 right-4 text-black text-2xl cursor-pointer' onClick={closenewsletter}><i class="bi bi-x" ></i></button>
             <form onSubmit={formsubmit}>
            <div className='md:py-16 pt-8 sm:pb-5  md:px-8 px-2  flex flex-col w-[400px] newsfirst_box '>
               
                <h1 className='md:text-[22px] text-[16px] font-bold text-center '>Sign Up For Send Newsletter?</h1>
                <p className='md:text-[14px] text-[10px] text-center mt-2 text-gray-500 leading-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio culpa labore molestias  velit doloremque velit doloremque.</p>
           

            <input type="text" 
            placeholder=' Enter Your Email'
            className='w-full bg-gray-100 h-10 p-2 mt-7 text-[12px]'
      
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <button className='bg-black h-10 text-white w-full mt-4 text-[12px] cursor-pointer font-bold' type='submit'>Subscribe</button>

           <div className='flex items-cener justify-center gap-2 mt-6 '>
             <input type="checkbox"
             id='check'
             checked={notshow}
             onChange={(e) => setNotshow(e.target.checked)} 
             className='cursor-pointer accent-black'/>
            <label htmlFor="check" className='text-[12px] cursor-pointer'>Do not show again</label>
           </div>
             </div>
                </form>

             <div className='bg-white   newimg flex items-center justify-center'>
              <img  src={image.Burger} className='object-contain mx-auto' alt="" />
               
             </div>
 
        </div>
      
    </div>
  )
}

export default Newsletter
