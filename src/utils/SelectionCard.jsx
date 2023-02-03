import React from 'react'
import dinning1 from '../assets/icons/dinning1.png'
import dinning2 from '../assets/icons/dinning2.png'
import delivery1 from '../assets/icons/delivery1.png'
import delivery2 from '../assets/icons/delivery2.png'
import nightlife1 from '../assets/icons/nightlife1.png'
import nightlife2 from '../assets/icons/nightlife2.png'
import Image from 'next/image'

const SelectionCard = ({active, setActive}) => {
  return (
    <div>
        <span className='hidden md:block'>Home/India/Indore
        </span>
       <div className='flex gap-12 my-4 ml-8 overflow-x-scroll md:overflow-x-hidden'>
            <div className='flex items-center gap-4 cursor-pointer min-w-max' onClick={()=>setActive('order')} >
            <div className={`flex items-center justify-center ${active==='order'?'bg-amber-100':'bg-gray-200'} rounded-full w-14 h-14`}>
                <Image src={active==='order'?delivery2:delivery1} className="w-8 h-8"/>
            </div>
            <div className={`text-xl font-medium ${active==='order'?'text-red-500':'text-gray-500'}`}>
                Delivery
            </div>

        </div>
         <div className='flex items-center gap-4 cursor-pointer min-w-max' onClick={()=>setActive('dine')}>
            <div className={`flex items-center justify-center ${active==='dine'?'bg-sky-100':'bg-gray-200'} rounded-full w-14 h-14`}>
                <Image src={active==='dine'?dinning2:dinning1} className="w-8 h-8"/>
            </div>
            <div className={`text-xl font-medium ${active==='dine'?'text-red-500':'text-gray-500'}`}>
                Dining Out
            </div>

        </div>
        <div className='flex items-center gap-4 cursor-pointer min-w-max' onClick={()=>setActive('night')} >
            <div className={`flex items-center justify-center  ${active==='night'?'bg-indigo-100':'bg-gray-200'} rounded-full w-14 h-14`}>
                <Image src={active==='night'?nightlife2:nightlife1}  className="w-8 h-8"/>
            </div>
            <div className={`text-xl font-medium ${active==='night'?'text-red-500':'text-gray-500'}`}>
                Nightlife
            </div>

        </div>
       </div>



    </div>
  )
}

export default SelectionCard