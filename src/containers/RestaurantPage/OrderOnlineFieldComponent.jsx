import React from 'react'
import hariyalikebab from '../../assets/images/hariyalikebab.jpg';
import vegIcon from '../../assets/icons/veg.png';
import Image from 'next/image';
import FoodCard from '@/components/Restaurants/OrderFoodMenu/FoodCard';

const OrderOnlineFieldComponent = () => {


  const fooditems = {
    recommended: [
      {mustTry:true, id:"s1", ttl:"Rasgualla", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"s4", ttl:"Hariyali", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"s3", ttl:"Ladoo", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"r4", imgSrc:hariyalikebab, ttl:"Naan", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
    ],
    roti: [
      {mustTry:true, id:"r1", imgSrc:hariyalikebab, ttl:"Tandori Roti", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"r2", imgSrc:hariyalikebab, ttl:"Butter Roti", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"r3", imgSrc:hariyalikebab, ttl:"Naan", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"r4", imgSrc:hariyalikebab, ttl:"Garlic Naan", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"r5", ttl:"Paratha", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
    ],
    dessert: [
      {mustTry:true, id:"s1", imgSrc:hariyalikebab, ttl:"Rasgualla", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"s2", imgSrc:hariyalikebab, ttl:"Gulab Jamun", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"s3", imgSrc:hariyalikebab, ttl:"Ladoo", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"s4", imgSrc:hariyalikebab, ttl:"Hariyali", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"},
      {mustTry:true, id:"s5", ttl:"Kebab", votes:"12", price:"1400", desc:"Tandoori Prawns [6 Pieces]+Fish Tikka [6 Pieces]+Pathar ka Gosht [6 Pieces]+Boti Kebab [6 Pieces]+Schezwan Tikka [6 Pieces]+Andhra Kebab [6 Pieces]+Seek Kebab [6 Pieces]", vegNonveg:vegIcon, foodType: "veg"}
    ],
  }




  // console.log(fooditems)
  return (
    <div className='flex w-full  md:h-[80vh]'>
      {/* Left Col */}
      <div className='w-[25%] border-r border-gray-300 overflow-y-scroll mt-2 ml-2'>
        {Object.entries(fooditems)?.map((val,id) => {
          // console.log(id,val)
          return (
            <div key={id} className='p-2 cursor-pointer '>
              <h3>{val[0]} ({val?.[1]?.length})</h3>
            </div>
          )
        })}
      </div>
      {/* Right Col */}
      <div className='w-[75%] mt-1 overflow-x-scroll'>
        {/* Right Top Content */}
        <div>
          {/* Timing and Search */}
          <div className='flex justify-between'>
            <div >
              <h3 className='font-bold'>Order Online</h3>
              <p className='text-sm'>Live track your order | 30 min</p>
            </div>
            <div>
              <input type="text" placeholder='Search within menu'/>
            </div>
          </div>
          {/* Offers */}
          <div className='flex max-w-full gap-6 overflow-x-scroll scrollbar-hide '>
            <div className='flex flex-col p-1 text-xs font-normal text-white bg-blue-700 rounded min-w-max'>
              <span>50% OFF up to ₹100</span>
              <span>Use code: <span>Welcome 50</span></span>
            </div>
            <div className='flex flex-col p-1 text-xs font-normal text-white bg-blue-700 rounded min-w-max'>
              <span>50% OFF up to ₹100</span>
              <span>Use code: <span>Welcome 50</span></span>
            </div>
            <div className='flex flex-col p-1 text-xs font-normal text-white bg-blue-700 rounded min-w-max'>
              <span>50% OFF up to ₹100</span>
              <span>Use code: <span>Welcome 50</span></span>
            </div>
            <div className='flex flex-col p-1 text-xs font-normal text-white bg-blue-700 rounded min-w-max'>
              <span>50% OFF up to ₹100</span>
              <span>Use code: <span>Welcome 50</span></span>
            </div>
            
          </div>
          {/* Filter Part */}
          <div>

          </div>
        </div>




        {/* Items */}
        <div className=''>
          {Object.entries(fooditems)?.map((val,id) => (
            // console.log(val[1],'val[0]')
            val[1].map((val1,id1) => (
              <FoodCard item={val1} key={id1} />
            ))
          ))}
        </div>


      </div>
    </div>
  )
}

export default OrderOnlineFieldComponent