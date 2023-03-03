import Carasouel from '@/utils/Carasouel'
import RestaurantCard from '@/utils/RestaurantCard'
import React from 'react'
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




const DeliveryPage = () => {

    const items = [
        {
            promoted: true,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "Paradise Hotel",
            rating: '3.6',
            imgSrc: biryaniSCImg
        },
        {
            promoted: false,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "Mangal Hotel",
            rating: '2.6',
            imgSrc: biryaniSCImg2
        },
        {
            promoted: true,
            time: "30",
            offB: false,
            proExtraB: true,
            off: "30",
            proExtra: "40",
            name: "Chapathi Hotel",
            rating: '4.6',
            imgSrc: chapathiImg
        },
        {
            promoted: false,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "Fish Mandi Hotel",
            rating: '4.9',
            imgSrc: fishImg
        },
        {
            promoted: true,
            time: "25",
            offB: false,
            proExtraB: true,
            off: "30",
            proExtra: "40",
            name: "MangalCaptain Hotel",
            rating: '4.6',
            imgSrc: icecreamImg
        },
        {
            promoted: false,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "KFCS Hotel",
            rating: '2.8',
            imgSrc: kfcSCImg
        },
        {
            promoted: true,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "Pizza Hotel",
            rating: '3.2',
            imgSrc: pizzaSCImg
        },
        {
            promoted: false,
            time: "25",
            offB: true,
            proExtraB: false,
            off: "30",
            proExtra: "40",
            name: "Fish Mandi Hotel",
            rating: '4.6',
            imgSrc: fishImg
        },
        {
            promoted: true,
            time: "25",
            offB: false,
            proExtraB: true,
            off: "30",
            proExtra: "40",
            name: "MangalCaptain Hotel",
            rating: '2.6',
            imgSrc: icecreamImg
        },
    ]
    
  return (
    <>
        <div className='w-[70%] mx-auto mt-4 '>
            <span className='text-2xl font-bold'>Inspiration for your first order</span>
            <Carasouel brand={false} />
        </div>
        <div className='w-[70%] mx-auto mt-4 '>
             <span className='text-2xl font-bold'>Top brands for you</span>
            <Carasouel brand={true} />
        </div>
        <div className='w-[70%] mx-auto mt-4 '>
            <span className='text-2xl font-bold'>
                Delivery Restaurants in Indore
            </span>
            <div className='flex flex-wrap justify-center gap-2'>
                {
                    items.map((item, index) => (
                        <RestaurantCard key={index} item={item} />
                    ))
                }
                


            </div>
        </div>
    </>
  )
}

export default DeliveryPage