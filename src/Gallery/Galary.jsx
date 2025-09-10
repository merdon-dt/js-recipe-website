import React from 'react'
import { image } from '../assets/assests'
import './Gallery.css'

const Galary = () => {

    const gallery = [
        {
            title:"Meals",
            heading:"Daily Ongoing Meals !!!",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illum possimus ipsa atque impedit magnam necessitatibus hic in error modi nam, natus molestiae laborum, facere aliquid expedita fugit. Nemo, beatae!",
            hovertext:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illum possimus ipsa atque impedit magnam necessitatibus hic in error modi nam."
        }
    ]

    const galimg = [
        image.Gal1,
        image.Gal2,
        image.Gal3,
        image.Gal4,
        image.Gal5,
        image.Gal5
    ]
  return (
   <section id='gallery' className='pt-16' >
     <div  className='bg-orange-50 '>
        <div className='w-full pr-3 ps-14 gallery_headpadding'>
            {gallery.map((gall) => (
                <div className='grid grid-cols-2  items-start gal_grid'>
                <div className='md:mt-11 mt-4 py-5'>
                    <div className='mediatext'>
                        <p className=' font-bold text-amber-600 uppercase' style={{fontSize:"12px"}}>{gall.title}</p>
                        <p className='text-3xl  text-gray-600  mt-2 mb-6 grid_head' style={{fontWeight:"600"}}>{gall.heading}</p>
                        <p className='w-full text-sm text-gray-600 grid_desctext' >{gall.description}</p>
                    </div>
                </div>
                 <div className='grid grid-cols-3 gap-y-5 gap-3 py-2 w-full galimg cursor-pointer'>
                    {galimg.map((img) => (
                        <>
                        <div className='relative group rounded-lg overflow-hidden'>
                            <img src={img} className='rounded-lg object-cover w-full h-50 transition-transform duration-300 group-hover:scale-105' alt="" />
                            <div className='absolute bottom-0 left-0 h-1/2 w-full bg-gray-800 bg-opacity-5  flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300'>
                                
                            </div>
                            <p className="text-white absolute bottom-0 left-0 h-1/2 w-full text-[10px] px-6 py-2 font-semibold transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">{gall.hovertext} </p>
                        </div>
                        </>
                    ))}
                 </div>

                </div>
            ))}
        </div>
      
    </div>
   </section>
  )
}

export default Galary
