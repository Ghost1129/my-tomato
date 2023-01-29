import CollectionCard from '@/utils/CollectionCard'
import React from 'react'
import {IoMdArrowDropright} from 'react-icons/io'

const Collections = () => {
  return (
    <div className='mx-2'>
        <h3 className='text-4xl font-Popin font-medium'>Collections</h3>
        <div className='flex justify-between'>
            <span className=' font-Popin text-sm md:text-lg'>Explore curated lists of top restaurants, cafes, pubs, and bars in Indore, based on trends</span>
            <span className=' text-sm text-red-400 hover:text-red-600 cursor-pointer  items-center hidden md:flex'>All collections in Indore
                <IoMdArrowDropright/>
            </span>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 mx-auto '>
            <CollectionCard/>
            <CollectionCard/>
            <CollectionCard/>
            <CollectionCard/>
        </div>
    </div>
  )
}

export default Collections