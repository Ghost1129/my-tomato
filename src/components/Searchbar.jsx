import React from 'react'
import {GoLocation} from 'react-icons/go'
import {MdArrowDropDown,MdSearch} from 'react-icons/md'

const Searchbar = () => {
  return (
    <div className='w-11/12 h-12 rounded p-2 flex items-center justify-center bg-white mx-auto'>
        <div className="flex items-center justify-center w-[30%] ">
            <GoLocation className='text-red-400 m-1 ' size={'1.2em'}/>
            <input type="text" placeholder='Indore' className='text-black outline-none my-4 w-[90%]' />
            <MdArrowDropDown className='text-gray-400'size={'1.5em'}/>
        </div>
        
        <div className='flex items-center w-[70%]'>
            <MdSearch className='text-gray-400' size={'1.5em'}/>
            <input type="text" placeholder='Search for restaurant, cuisine or a dish'  className='text-black outline-none my-4 w-[90%]' />
        </div>
    </div>
  )
}

export default Searchbar