import Navbar2 from '@/components/Navbar2'
import Image from 'next/image'
import React from 'react'
import RestaurantHero from '@/components/RestaurantHero'
import RestaurantTitle from '@/components/Restaurants/RestaurantTitle'
import RestaurantBody from '@/components/Restaurants/RestaurantBody'

const index = () => {
  
  return (
    <>
    
    <div className=' w-screen md:max-w-[80%] md:mx-auto'>
    <Navbar2/>
    <div className=''>
        <div className=''>
            Home
            /
            India
            /
            Indore
        </div>
    </div>
    <RestaurantHero/>
    <RestaurantTitle/>
    <RestaurantBody/>

    </div>
    

    </>
  )
}

export default index