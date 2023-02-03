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
    <div className="flex items-center justify-center w-full h-full md:items-start md:mt-8 ">
      <Image src={banner} fill className='relative object-cover -z-10 brightness-50 ' />
      <div className='absolute mx-10 text-white '>
        <h2 className='mb-3 text-6xl font-extrabold text-center font-Popin md:mb-8'>zomato</h2>
        <h3 className='mb-6 text-2xl text-center md:text-4xl md:mb-12'>Discover the best food & drinks in <span className='font-extrabold'>Indore</span> </h3>
        <Searchbar width='90%'/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Homepage