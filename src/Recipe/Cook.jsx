import React from 'react'
import { image } from '../assets/assests'

const Cook = () => {
    return (
        <div>
            <div className='relative '>
                <img src={image.Pizza} className='w-full h-140 object-cover ' alt="Pizza" />
                <h1 className='absolute left-[40%] bottom-0 bg-gradient-to-r from-orange-400 to-orange-600 px-6 py-2 z-10 text-white transform -rotate-6 text-4xl'>
                    How to Grill pizza
                </h1>

            </div>

            <div className='flex items-center justify-center mt-22 gap-4 mb-10'>
                <div className='flex gap-42'>
                    <p>    <i className="bi bi-clock text-orange-500"></i> 30 MINUTES</p>
                    <p>  <i className="bi bi-people text-orange-500"></i> 4 SERVINGS</p>
                </div>
                <div className='flex items-center justify-center gap-130'>
                    <div className='flex gap-2'>

                        <i className="bi bi-dash text-orange-500 px-1 border border-amber-700 rounded-full"></i>
                        <i className="bi bi-plus text-orange-500 border px-1 border-amber-700 rounded-full"></i>
                    </div>
                    <div>
                        <i className="bi bi-bookmark-plus-fill text-orange-500 text-2xl"></i>

                    </div>

                </div>

            </div>

            <div className='mt-1 flex flex-col items-center justify-center bg-gray-100  py-20 '>

                <h2 className='text-orange-500 text-4xl font-bold'>RECIPE INGREDIENTS</h2>
                 
                 <div className='flex items-center justify-center gap-4  mt-8 w-4xl'>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-gray-700 text-lg'><i class="bi bi-check2 text-orange-500 pr-2 font-bolder"></i>Pizza dough</p>
                        <p className=' text-gray-700 text-lg'><i class="bi bi-check2 text-orange-500 pr-2 font-bolder"></i>Standard toppings of tomato sauce, herbs, cheese and maybe some
            thinly sliced onions, tomatoes, mushrooms, or pepperoni</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-gray-700 text-lg'><i class="bi bi-check2 text-orange-500 pr-2 font-bolder"></i>Olive oil</p>
                        <p className=' text-gray-700 text-lg'> <i class="bi bi-check2 text-orange-500 pr-2 font-bolder"></i>Some flour or cornmeal for dusting the cookie sheet or pizza peel</p>
                    </div>
                 </div>
            </div>


            <div className='flex flex-col items-center justify-center md:py-20 py-8 gap-8 px-4'> 
                <h1 className='text-orange-500 text-4xl font-bold'> HOW TO COOK</h1>

                <p className='text-gray-700 text-lg' >This recipe was carefully designed and tested by Simply Recipes. Please check out directions at their website."</p>
                <button className='bg-gradient-to-r from-orange-400 to-orange-600 text-white w-50 h-12 rounded-full'>DIRECTION <i class="bi bi-arrow-right pl-2"></i></button>
            </div>

        </div>
    )
}

export default Cook
