import Image from 'next/image'
import React from 'react'
import {IoMdArrowDropright} from 'react-icons/io'
import NewOrder  from '../assets/images/newintown.jpg'

const CollectionCard = () => {
  return (
    <div className='relative min-w-[200px] max-w-[260px] h-[260px] md:h-[320px] cursor-pointer'>
        <Image src={NewOrder} alt='New' fill className='rounded-md -z-10'/>
        <div className='absolute flex flex-col justify-end h-full pb-3 mx-4 text-white font-Popin'>
            <span>Newly Opened</span>
            <span className='flex'>
                5 Places
                <IoMdArrowDropright/>
            </span>
        </div>
    </div>
  )
}

export default CollectionCard