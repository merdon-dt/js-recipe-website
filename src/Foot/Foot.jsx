import React, { useState } from 'react'
import { image } from '../assets/assests'
import './Foot.css'
import Signup from '../Signuppage/Signup'

const Foot = () => {

      const [open, setOpen] = useState(false);


    const footer = [
        {
            address: "Address",
            add1:"623 Harrison St., 2nd Floor,",
            add2:"San Francisco, CA 94107",
            phone:"415-201-6370",
            email:"hello@omnifood.com"

        }

    ]
    const footer2 =[
        {
            navi:"Navigation",
            con1:"create account",
            con2:"Sign in",
            con3:"IOS app",
            con4:"Android app"


        }
    ]

    const lastfoot = {
         text:"Copyright @ 2022"
    }

  return (
    <div className='mb-21'>
    <div className='grid grid-cols-5 justify-evenly items-start px-47 mt-21  foot_padding '>
        <div className='flex flex-col '>
        <img src={image.footer} className='w-27 h-3 mt-1' alt="" />
       <div className='flex gap-2 text-gray-500 ms-4 mt-5 cursor-pointer' style={{fontSize:"10px" }}>
         <a href="https://www.instagram.com/" target='_blank'><i class="bi bi-instagram"></i></a>
        <a href="https://www.facebook.com/" target='_blank'><i class="bi bi-facebook"></i></a>
        <a href="https://en.wikipedia.org/wiki/Twitter" target='_blank'><i class="bi bi-twitter"></i></a>
       </div>

        </div>

        <div>
            {footer.map((content) => (
                <>
                 <h3 className='foothead'>{content.address}</h3>
                 <div  className='text-sm  leading-3.5'>
                <p className='mt-4 footsec_nav text-gray-500'>{content.add1}</p>
                 <p className='footsec_nav text-gray-500'>{content.add2}</p>
                
                <p className='footsec_nav text-gray-400 mt-5'>{content.phone}</p>
                 <p className='footsec_nav text-gray-400 '>{content.email}</p>
                 

                 </div>
                </>
            ))}
        </div>

        <div>
            {footer2.map((navigate) => (
                <>
                <h3 className='foothead'>{navigate.navi}</h3>
                <div className=' text-gray-400 mt-4 flex flex-col gap-2 ms-5 cursor-pointer' style={{fontSize:"12px" , fontWeight:"600"}}>
                    <p onClick={() => setOpen(true)}>{navigate.con1}</p>
                    <p>{navigate.con2}</p>

                    <p>{navigate.con3}</p>

                    <p>{navigate.con4}</p>

                </div>
                </>
            ))}
            </div>

            <div>
            {footer2.map((navigate) => (
                <>
                <h3 className='foothead'>{navigate.navi}</h3>
                <div className=' text-gray-400 mt-4 flex flex-col gap-2 ms-5 cursor-pointer' style={{fontSize:"12px" , fontWeight:"600"}}>
                    <p onClick={() => setOpen(true)}>{navigate.con1}</p>
                    <p>{navigate.con2}</p>

                    <p>{navigate.con3}</p>

                    <p>{navigate.con4}</p>

                </div>
                </>
            ))}
            </div>

            <div>
            {footer2.map((navigate) => (
                <>
                <h3 className='foothead'>{navigate.navi}</h3>
                  <div className=' text-gray-400 mt-4 flex flex-col gap-2 ms-5 cursor-pointer' style={{fontSize:"12px" , fontWeight:"600"}}>
                    <p onClick={() => setOpen(true)}>{navigate.con1}</p>
                    <p>{navigate.con2}</p>

                    <p>{navigate.con3}</p>

                    <p>{navigate.con4}</p>

                </div>
                </>
            ))}
            </div>
           <div className=' text-gray-500' style={{fontSize:"8px",fontWeight:"600"}}>{lastfoot.text}</div>
      
    </div>
      <Signup isopen={open} close={() => setOpen(false)} />
  
    </div>
  )
}

export default Foot
