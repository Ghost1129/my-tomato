import Image from 'next/image'
import React from 'react'
import {IoMdArrowDropright} from 'react-icons/io'
import NewOrder  from '../assets/images/newintown.jpg'

const CollectionCard = () => {
  return (
    <div className='relative min-w-[200px] max-w-[260px] h-[260px] md:h-[320px] cursor-pointer'>
        <Image src={NewOrder} fill className='-z-10 rounded-md'/>
        <div className='absolute font-Popin text-white flex flex-col h-full justify-end mx-4 pb-3'>
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