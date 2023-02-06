import Carasouel from '@/utils/Carasouel'
import RestaurantCard from '@/utils/RestaurantCard'
import React from 'react'




const DeliveryPage = () => {
    
  return (
    <>
        <div className='w-[80%] mx-auto mt-4 '>
            <span className='text-2xl font-bold'>Inspiration for your first order</span>
            <Carasouel brand={false} />
        </div>
        <div className='w-[80%] mx-auto mt-4 '>
             <span className='text-2xl font-bold'>Top brands for you</span>
            <Carasouel brand={true} />
        </div>
        <div className='w-[80%] mx-auto mt-4 '>
            <span className='text-2xl font-bold'>
                Delivery Restaurants in Indore
            </span>
            <div className='flex flex-wrap justify-center gap-2 mx-3'>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

            </div>
        </div>
    </>
  )
}

export default DeliveryPage