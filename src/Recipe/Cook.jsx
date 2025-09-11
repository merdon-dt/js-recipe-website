import React, { useEffect, useState } from 'react'
import { image } from '../assets/assests'
import './Cokk.css'

const Cook = () => {
      const [apidata,setApidata] = useState(null);

    useEffect(() => {

    const Recipedata = async () => {
        try{
            const response = await fetch(
                "https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e85b0"
            );
            const datas = await response.json();
            setApidata(datas.data.recipe)
        }
        catch(error)
        {
            console.log(error)
            
        }
    };
    Recipedata()
    },[]);

    if (!apidata) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-xl">
        Loading recipe...
      </div>
    );
  }

    return (
        <div>
            <div className='relative flex items-center justify-center '>
                <img src={apidata.image_url} className='w-full h-140 object-cover ' alt="Pizza" />
                <h1 className='absolute flex bottom-0 bg-gradient-to-r from-orange-400 to-orange-600 px-6 py-2 z-10 text-white transform -rotate-3 md:text-2xl '>
                    {apidata.title}
                </h1>

            </div>

            <div className='flex items-center justify-center mt-22 gap-4 mb-10'>
                <div className='flex gap-25'>
                    <p>    <i className="bi bi-clock text-orange-500 mr-2"></i>{apidata.cooking_time}</p>
                    <p>  <i className="bi bi-people text-orange-500 mr-2"></i>{apidata.servings} SERVINGS MINUTES</p>
                </div>
                <div className='flex items-center justify-center gap-140'>
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
                 
                 <div className='grid grid-cols-2 items-center justify-center recipe_line gap-4  mt-8 w-5xl'>
                    {apidata.ingredients.map((ing) => (
                          <div className=''>
                            <div className='flex items-center justify-start'><i class="bi bi-check2 text-orange-500 pr-2 font-bolder"></i>                        <p className=' text-gray-700 text-lg'>{ing.quantity ? `${ing.quantity} ${ing.unit} ` : ""}{ing.description}</p> </div>
                           <div className='flex items-center justify-start'><i class="bi bi-check2 text-orange-500 pr-2 font-bolder"></i><p className=' text-gray-700 text-lg'>Standard toppings of tomato sauce, herbs, cheese and maybe some
            thinly sliced onions, tomatoes, mushrooms, or pepperoni</p></div>
                        
                    </div>
                    ))}
                    
                    {/* <div className='flex flex-col gap-4'>
                        <p className=' text-gray-700 text-lg'><i class="bi bi-check2 text-orange-500 pr-2 font-bolder"></i>Olive oil</p>
                        <p className=' text-gray-700 text-lg'> <i class="bi bi-check2 text-orange-500 pr-2 font-bolder"></i>Some flour or cornmeal for dusting the cookie sheet or pizza peel</p>
                    </div> */}
                 </div>
            </div>


            <div className='flex flex-col items-center justify-center md:py-20 py-8 gap-8 px-4'> 
                <h1 className='text-orange-500 md:text-4xl text-2xl font-bold'> HOW TO COOK</h1>

                <p className='text-gray-700 md:text-lg' >This recipe was carefully designed and tested by Simply Recipes. Please check out directions at their website."</p>
                <button className='bg-gradient-to-r from-orange-400 to-orange-600 text-white md:w-50 md:h-12 w-36 h-10 rounded-full'>DIRECTION <i class="bi bi-arrow-right pl-2"></i></button>
            </div>

        </div>
    )
}

export default Cook
