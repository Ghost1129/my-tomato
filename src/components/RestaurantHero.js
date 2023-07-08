import Image from 'next/image'
import React from 'react'
import food from '@/assets/images/food1.jpg'
import Camera from '@/assets/icons/photo-camera.png'

const RestaurantHero = () => {
  return (
    <div className='flex max-h-[520px] w-full overflow-hidden'>
        <div className='w-[100%] h-full md:max-h-[60%] flex flex-col md:flex-row mx-auto  '>
            <div className='w-[100%] md:w-[60%] h-[40%] overflow-hidden relative bg-black'>
                <Image src={food} width={2000}   className='object-contain transition-all duration-200 ease-in-out hover:scale-105' alt='food'/>
            </div>  
            <div className='hidden w-[100%] md:w-[40%] gap-1 py-2 md:py-0 md:px-1  min-h-full md:grid grid-cols-2 overflow-hidden'>
                <div className='overflow-hidden'><Image src={food} className='object-cover w-full h-full transition-all duration-200 ease-in-out hover:scale-105' alt='food'/></div>
                <div className='relative overflow-hidden'>
                    <div className='absolute flex items-center justify-center w-full h-full cursor-pointer opacity-70 bg-red-50'> View More</div>
                    <Image src={food} className='object-cover w-full h-full transition-all duration-200 ease-in-out hover:scale-105' alt='food'/></div>
                <div className='overflow-hidden'><Image src={food} className='object-cover w-full h-full transition-all duration-200 ease-in-out hover:scale-105' alt='food'/></div>
                <div className='flex flex-col items-center justify-center overflow-hidden cursor-pointer bg-slate-100'>
                    <Image src={Camera} className='w-5 h-5' alt='camera'/>
                    <span>Add Photo</span>

                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantHero