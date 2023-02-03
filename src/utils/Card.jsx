import Image from 'next/image'
import React from 'react'
import OrderOnline from '../assets/images/orderonline.jpg'

const Card = () => {
  return (
    <div className='min-w-[160px] max-w-[350px] h-[15rem] m-2 rounded-lg border transition duration-300 ease-in-out hover:scale-105'>
        <div className='relative w-full h-4/5'>
            <Image src={OrderOnline} alt='Order' fill className='object-cover rounded-t-lg'/>
        </div>
        <div className='flex items-center w-full h-1/5'>
            <span className='ml-2 font-Popin'>Order Online</span>
        </div>
    </div>
  )
}

export default Card