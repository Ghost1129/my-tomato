import React from 'react'

const index = () => {
  return (
    <div className='h-screen bg-gray-200'>
    <div className='max-w-[70%] mx-auto p-4'>
        <div className='flex py-2'>
            <span>Back</span>
            <h2>Restaurant Name</h2>
        </div>
        <div className='flex gap-2 p-3 bg-white rounded-md'>
            <span>Icon</span>
            <span>Delivery in 25-30 min</span>
        </div>
        <div className='my-6 text-center'>
            ITEM(S) ADDED
        </div>
        {/* Basket */}
        <div className='flex flex-col gap-2 p-3 bg-white rounded-md'>
            {/* Individual Item */}
            <div className='flex gap-2 p-1 '>
                <span>Icon</span>
                <div className='flex justify-between w-full'>
                    <div>
                        <h3>Item Name</h3>
                        <p className='text-xs'>₹ 200</p>
                    </div>
                    <div className='flex flex-col '>
                        <button>Add</button>
                        <span className='text-xs'>₹ Total</span>
                    </div>
                </div>
            </div>
            
        </div>
        {/* Savings */}
        <div className='my-6 text-center'>SAVINGS CORNER</div>
        {/* Coupon */}
        <div  className='flex flex-col'>
            <div className='flex'>
                <span>Icon</span>
                <div>
                    <div>
                        <h3>Save 150 more on this order</h3>
                        <p>Get 10% off on orders above Rs. 150</p>
                    </div>
                    <button>Apply</button>
                </div>
            </div>
            <div>------------------</div>
                <div>
                    View All Coupons
                </div>
            
        </div>

    </div>
    </div>
  )
}

export default index




