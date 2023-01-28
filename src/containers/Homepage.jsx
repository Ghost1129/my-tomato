import Navbar from '@/components/Navbar'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'
import banner from '../assets/banners/banner1.jpg'

const Homepage = () => {
  return (
    <>
    <div className="w-full h-[30rem] relative mb-4 md:mb-8 ">
    <Navbar/>
    <div className="w-full h-full flex items-center justify-center md:items-start md:mt-8  ">
      <Image src={banner} fill className='-z-10 relative brightness-50 object-cover ' />
      <div className='text-white absolute mx-10 '>
        <h2 className='text-6xl font-Popin font-extrabold text-center mb-3 md:mb-8'>zomato</h2>
        <h3 className='text-2xl text-center md:text-4xl mb-6 md:mb-12'>Discover the best food & drinks in <span className='font-extrabold'>Indore</span> </h3>
        <Searchbar/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Homepage