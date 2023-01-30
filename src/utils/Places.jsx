import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Places = () => {
  return (
    <div className="flex items-center justify-between border p-3 m-2 rounded-md cursor-pointer shadow-md">
        <div className="flex flex-col font-Popin">
            <span>Vijay Nagar</span>
            <span className="text-sm">231 Places</span>
        </div>
        <MdOutlineKeyboardArrowRight size={'1.5rem'}/>
    </div>
  )
}

export default Places