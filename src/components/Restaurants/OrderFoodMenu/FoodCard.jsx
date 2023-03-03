import Image from 'next/image'
import React, { useState } from 'react'
import hariyalikebab from '@/assets/images/hariyalikebab.jpg'

const FoodCard = ({item}) => {
    console.log(item)
    const [readMore, setreadMore] = useState(false)
    const [rating, setRating] = useState(3)
    const [numberofitem, setNumberofitem] = useState(0)


    const additem = () => {
        setNumberofitem(numberofitem + 1)
    }

    const removeitem = () => {
        setNumberofitem(numberofitem - 1)
    }


    // const noofitem = 0
    const title = item?.ttl
    const price = item?.price
    const tags = ['Chef Special', 'Best Seller']
    const type = item?.type
    const desc = item?.desc
  return (
    <div className='flex p-3'>
         <Image src={hariyalikebab}  className='w-[120px] h-[120px] rounded-md' />
          <div className='flex flex-col gap-1 px-3'>
            <div className='flex justify-between'>
                <h3>{title}</h3>
                {
                    numberofitem > 0 ? (
                        <div className='flex items-center gap-3 px-3 py-1 text-white bg-red-500'>
                        <button onClick={removeitem}>-</button>
                        <span>{numberofitem}</span>
                        <button onClick={additem}>+</button>
                    </div>
                    ):
                    (
                        <div className='flex gap-3 px-3 py-1 text-white bg-red-500'>
                            <button onClick={()=>setNumberofitem(1)} >Add</button>
                        </div>
                    )

                }
            </div>
            
            {/* Tags */}
            <div className='flex gap-2'>
                {tags.includes('Chef Special') && (<span className='p-1 text-sm text-white bg-red-400 rounded-md'>Chef Special</span>)}
                {tags.includes('Best Seller') && (<span className='p-1 text-sm text-white bg-green-400 rounded-md'>Best Seller</span>)}
                {tags.includes('Spicy') && (<span className='p-1 text-sm text-white bg-yellow-400 rounded-md'>Spicy</span>)}

            </div>
            {/* Price */}
            <div className='flex'>
                <h4 className='font-medium text-md'>₹{price}</h4>
            </div>
            {/* Rating */}
            <div className='flex items-center'>
                <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                     i < rating ?(
                        <svg key={i} className='w-4 h-4 text-red-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' d='M10 2a1 1 0 01.894.553l2.447 4.895 5.21.764a1 1 0 01.553 1.789l-3.74 3.67.88 5.2a1 1 0 01-1.447 1.105L10 16.334l-4.553 2.388a1 1 0 01-1.447-1.105l.88-5.2-3.74-3.67a1 1 0 01.553-1.789l5.21-.764L9.106 2.553A1 1 0 0110 2z' clipRule='evenodd' />
                        </svg>
                     ):(
                        <svg key={i} className='w-4 h-4 text-gray-200' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <path fillRule='evenodd' d='M10 2a1 1 0 01.894.553l2.447 4.895 5.21.764a1 1 0 01.553 1.789l-3.74 3.67.88 5.2a1 1 0 01-1.447 1.105L10 16.334l-4.553 2.388a1 1 0 01-1.447-1.105l.88-5.2-3.74-3.67a1 1 0 01.553-1.789l5.21-.764L9.106 2.553A1 1 0 0110 2z' clipRule='evenodd' />
                        </svg>
                     )
                    ))}
                </div>
                <span className='text-xs text-gray-500'>20 votes</span>
            </div>
            <p className='text-xs'>
                {readMore ? desc : `${desc.substring(0, 90)}...`}
                {!readMore && <span className='text-red-400 cursor-pointer' onClick={() => setreadMore(true)}>Read More</span>}
            </p>
          </div>
    </div>
  )
}

export default FoodCard