import React, { useState } from 'react'
import './Price.css'

const Pricing = () => {
   const [active,setActive] = useState("complete")

    const pricing =
    {
        subhead: "PRINCING",
        head: "We have 2 pricing plans",
        boxhead1: "STARTED",
        boxhead2: "$399",
        pricepara1: "Pricing includes all applicable taxes.",
        pricepara2: "Users can cancel at any time",
        con1: "✓ 1 meal per day",
        con2: "✓  Order from 11am and 9pm",
        con3: "✓ Delivery is free",
        con4: "✕",
        btn: "Shop Now"

    }

    const pricing2 =
    {
        boxhead1: "COMPLETE",
        boxhead2: "$599",
        pricepara1: "Pricing includes all applicable taxes.",
        pricepara2: "Users can cancel at any time",
        con2: "✓ Order 24/7",
        con3: "✓ Delivery is free",
        con4: "✓ Get access to latest recipes",
        con1: "✓ 2 meals per day",
        btn: "✓ Shop Now"

    }

    return (
        <div id='pricing' className='py-12 mx-auto max-w-4xl'>
            <div className=' pb-4 px-10 price_heads'>
                <h3 className='text-orange-600 font-semibold uppercase ' style={{fontSize:"12px"}}>{pricing.subhead}</h3>
            <h1 className='  text-3xl text-gray-600 pricesub_head' style={{fontWeight:"600"}}>{pricing.head}</h1>

            </div>
            <div className='mt-10 flex md:gap-12 gap-6  px-10 justify-center items-center text-center price_box '>
                <div className={`w-70 cursor-pointer  border-amber-100 border rounded-lg shadow p-6 flex flex-col gap-6  pricing_box ${active === "start" ? 'bg-orange-50 ' : 'bg-white'}`} onMouseEnter={() =>setActive("start")} onMouseLeave={() => setActive(null)} >
                    <p className='text-[#e67e22] font-bold'>{pricing.boxhead1}</p>
                    <p className='md:text-5xl text-gray-700 text-xl font-semibold '>{pricing.boxhead2}</p>
                    <div>
                        <p className='text-[12px] font-semibold text-gray-500'>{pricing.pricepara1}</p>
                        <p className='text-[12px] font-semibold text-gray-500'>{pricing.pricepara2}</p>
                    </div>

                    <div className='text-gray-700 text-sm text-left ms-7'>
                        <p>{pricing.con1}</p>
                        <p>{pricing.con2}</p>
                        <p>{pricing.con3}</p>
                        <p>{pricing.con4}</p>
                    </div>

                    <div className='pb-5 flex items-center justify-center '>
                        <button className='w-32 text-white py-2 rounded-lg flex items-center justify-center gap-1' style={{backgroundColor:"#e67e22"}}> <p className='text-[14px]'>{pricing.btn} </p><span style={{fontSize:"8px"}}>◆</span></button>
                    </div>
                </div>
                <div className= {`w-70 cursor-pointer relative overflow-hidden border-amber-100  rounded-lg shadow p-6 flex flex-col gap-6  pricing_box ${active === "complete" ? 'bg-orange-50 ' : 'bg-white'}`} onMouseEnter={() => setActive("complete")} onMouseLeave={() => setActive(null)}>
                    
                    <span className='absolute top-1.9 -right-10 bg-orange-600 text-white px-12 py-1 tranform rotate-45 uppercase' style={{fontSize:"9px"}}>best sale</span>

                    <p className='text-[#e67e22] font-bold'>{pricing2.boxhead1}</p>
                    <p className='md:text-5xl text-2xl  text-gray-700 font-semibold '>{pricing2.boxhead2}</p>
                    <div>
                        <p className='text-[12px] font-semibold text-gray-500'>{pricing2.pricepara1}</p>
                        <p className='text-[12px] font-semibold text-gray-500'>{pricing2.pricepara2}</p>
                    </div>

                    <div className='text-gray-700 text-sm text-left ms-7'>
                        <p>{pricing2.con1}</p>
                        <p>{pricing2.con2}</p>
                        <p>{pricing2.con3}</p>
                        <p>{pricing2.con4}</p>
                    </div>

                    <div className='pb-5 flex items-center justify-center '>
                        <button className='w-32 text-white py-2 rounded-lg flex items-center justify-center gap-1' style={{backgroundColor:"#e67e22"}}> <p className='text-[14px]'>{pricing.btn} </p><span style={{fontSize:"8px"}}>◆</span></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricing
