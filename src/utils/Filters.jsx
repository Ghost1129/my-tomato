import React from 'react'
import Filtericon from '../assets/icons/filter.png'
import deliveryTimeIcon from '../assets/icons/delivery-time.png';
import downArrowIcon from '../assets/icons/down-arrow.png';
import Image from 'next/image';



const Filters = ({page}) => {
    let filters = {
        orderfood: [
            { text: "Filter", leftIcon: Filtericon    },
            { text: "Delivery Time", leftIcon: deliveryTimeIcon },
            { text: "Pure Veg" },
            { text: "Rating: 4.0+" },
            { text: "Freate Offers" },
            { text: "Cuisines", rightIcon: downArrowIcon },
        ],
        dine: [
            { text: "Filter", leftIcon: Filtericon },
            { text: "Rating: 4.0+" },
            { text: "Outdoor Seating" },
            { text: "Serves Alcohal" },
            { text: "Open Now" },
        ],
        night: [
            { text: "Filter", leftIcon: Filtericon  },
            { text: "Distance",leftIcon: deliveryTimeIcon   },
            { text: "Rating: 4.0+" },
            { text: "Pubs & Bars" },
        ]
    }
    let filter = filters[page]
  return (
    <div className='flex gap-3 overflow-x-scroll md:overflow-x-hidden'>
        {
            filter?.map((item,id) => {
                return (
                    <div key={id}  className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md cursor-pointer min-w-max">
                        { item.leftIcon && <Image src={item.leftIcon} alt="leftIcon" className="w-4 h-4" /> }
                        <span>{item.text}</span>
                        { item.rightIcon && <Image src={item.rightIcon} alt="rightIcon" className="w-4 h-4" />}
                    </div>
                )
            }
        )}
    </div>
  )
}

export default Filters