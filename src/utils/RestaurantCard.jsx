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
    
    const dispatch = useDispatch();

    const setRestra = () => {
        dispatch(setRestaurant({
            name: item.name,
            imgSrc: item.imgSrc,
            rating: item.rating,
            time: item.time,
            off: item.off,
            proExtra: item.proExtra,
            offB: item.offB,
            proExtraB: item.proExtraB,
            promoted: item.promoted
            
        }))
    }

    


  return (
    <Link href={'/indore/Paradise Hotel'} onClick={setRestra} className='max-w-[320px] min-w-[300px] min-h-[300px] max-h-[400px] w-auto h-auto hover:outline outline-1 outline-neutral-200 hover:shadow-lg p-2 rounded-md'>
        <div className='flex flex-col gap-2'>
            <div className='relative w-full h-[60%] rounded-lg'>
                {item.promoted && <div className='absolute text-[10px] text-white bg-black bg-opacity-70 px-1 top-4'>Promoted</div>}
                <Image src={item.imgSrc} className="w-full h-full rounded-lg" />
                <div className='absolute px-2 text-xs text-white bg-blue-600 rounded-sm bottom-4'>50 % OFF up to 100</div>
                <div className='absolute px-1 text-xs bg-white rounded-sm bottom-4 right-3'>26 min</div>

            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                    <div className='font-semibold text-md'>{item.name}</div>
                    <div className='flex items-center gap-[2px] px-1 text-white bg-green-600'>4
                        <Image src={star} className="w-4 h-4"/>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='text-xs'>Biryani, North Indian, Chinese</div>
                    <div className='text-xs'>100 for one</div>
                </div>
            </div>
            <hr />
            <div className='flex items-center gap-2'>
                <Image src={upArrowIcon} className="w-5 h-5"/>
                <div className='text-[12px]'>9000+ orders placed from here recently</div>
                <Image src={maxSAfety} className="w-10 h-5"/>
            </div>
        </div>
    </Link>
  )
}

export default RestaurantCard