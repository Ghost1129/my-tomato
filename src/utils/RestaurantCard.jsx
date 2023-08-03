import Image from 'next/image'
import React, { useEffect } from 'react'
import biryaniSCImg from '@/assets/images/Food/biryani.png';
import biryaniSCImg2 from '@/assets/images/Food/biryani2.png';
import chapathiImg from '@/assets/images/Food/chapathi.png';
import chickenSCImg from '@/assets/images/Food/chicken.png';
import fishImg from '@/assets/images/Food/fish.png';
import icecreamImg from '@/assets/images/Food/icecream.png';
import kfcSCImg from '@/assets/images/Food/kfc.png';
import pizzaSCImg from '@/assets/images/Food/pizza.png';
import upArrowIcon from '@/assets/icons/up-arrow-icon.png';
import maxSAfety from '@/assets/icons/maxsafty.png';
import safeDelivery from '@/assets/icons/safe-delivery.png';
import star from '@/assets/icons/starw.svg';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '@/slices/restaurantSlice';

const RestaurantCard = ({item}) => {
    const { name,id, uuid, avgRating, cloudinaryImageId, costForTwoString, deliveryTime, cuisines, aggregatedDiscountInfo } = item?.info    
    const dispatch = useDispatch();
    const image_Url="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"

    const setRestra = () => {
        dispatch(setRestaurant({
            uuid: id,
        }))
    }

    


  return (
    <Link href={`/indore/${id}`} onClick={setRestra} className='max-w-[320px] min-w-[300px] min-h-[300px] max-h-[400px] w-auto h-auto hover:outline outline-1 outline-neutral-200 hover:shadow-lg p-2 rounded-md'>
        <div className='flex flex-col gap-2'>
            <div className='relative w-full h-[60%] rounded-lg'>
                {item.promoted && <div className='absolute text-[10px] text-white bg-black bg-opacity-70 px-1 top-4'>Promoted</div>}
                <Image src={image_Url+cloudinaryImageId} width={100} height={100} className="w-full h-full rounded-lg" alt='Image' />
                <div className='absolute px-2 text-xs text-white bg-blue-600 rounded-sm bottom-4'>{aggregatedDiscountInfo?.header}</div>
                <div className='absolute px-1 text-xs bg-white rounded-sm bottom-4 right-3'>{deliveryTime} min</div>

            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center justify-between'>
                    <div className='font-semibold text-md'>{name}</div>
                    <div className='flex items-center gap-[2px] px-1  text-white bg-green-600'>{avgRating}
                        <Image src={star} className="w-4 h-4" alt='star'/>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-xs'>
                        {cuisines.join(', ')}
                    </div>
                    <div className='text-xs text-end'>{costForTwoString}</div>
                </div>
            </div>
            <hr />
            <div className='flex items-center gap-2'>
                <Image src={upArrowIcon} className="w-5 h-5" alt='arrow' />
                <div className='text-[12px]'>9000+ orders placed from here recently</div>
                <Image src={maxSAfety} className="w-10 h-5" alt='safety'/>
            </div>
        </div>
    </Link>
  )
}

export default RestaurantCard