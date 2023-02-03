"use client"

import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Searchbar from './Searchbar'

const Navbar2 = () => {
    const [menu, setMenu] = useState(false)
    console.log(menu)
  return (
    <div className='flex  items-center justify-between font-Popin w-full z-10 h-[70px] px-4 overflow-hidden'>
        <AiOutlineMenu className='cursor-pointer md:hidden' size={'1.6rem'} onClick={()=> setMenu(val => !val)}  />
        <div className='relative flex items-center justify-between'>
            <span className='text-4xl font-bold -skew-x-2'>zomato</span>
            <div className='hidden md:flex'>
            <Searchbar width='90%'/>
            </div>
            <div className='items-center hidden gap-5 text-lg md:flex'>
                <span className=''>Login</span>
                <span className=''>Signup</span>
            </div>
        </div>
        {menu && <div className='absolute top-[70px] left-0 w-full h-full overflow-hidden bg-white '>
            <div className='flex flex-col gap-10 mx-6 mt-8 text-lg'>
            <span className='cursor-pointer'>Login</span>
            <span className='cursor-pointer'>Signup</span>
            </div>


            </div>
            }

    </div>
  )
}

export default Navbar2