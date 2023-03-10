import Image from 'next/image'
import React from 'react'
import MobileImage from '../assets/images/mobile.png'
import PlayStore from '../assets/icons/playstore.png'
import AppStore from '../assets/icons/appstore.png'

const GetApp = () => {
    const [selected, setSelected] = React.useState(true)
  return (
    <div className='w-full h-[30rem] flex items-center justify-center font-Popin bg-orange-50'>
        {/* Inner Body */}
        <div className="w-[70%] md:w-[80%] h-full flex items-center justify-center">
            {/* Photo */}
            <div className='items-center justify-center hidden md:flex'><Image src={MobileImage} alt='Zomato' className="w-[250px] h-[280px]"/></div>
            {/* Text */}
            <div className='text-center md:text-left'>
                <h3 className='text-3xl md:text-5xl md:font-medium'>Get the Zomato App</h3>
                <span className='text-sm font-light md:text-lg '>We will send you a link, open it on your phone to download the app</span>
                <div className="flex gap-2 font-light">
                    <div className='flex items-center gap-2 ml-4'>
                        <input className='w-4 h-4 accent-red-500' type="radio" name='radio' id='email' onClick={()=> setSelected(true)} defaultChecked={selected} />
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input className='w-4 h-4 accent-red-500' type="radio" name='radio' id='phone' onClick={()=> setSelected(false)} />
                        <label htmlFor='phone'>Phone</label>
                    </div>
                </div>
                <div className="flex">
                    <div className='mr-4'>
                    {selected ?
                    <div className=''>
                    <input type="text" placeholder='Email' className='border p-2 rounded-lg w-[90%]' />
                    </div>:
                    <div>
                    <input type="text" placeholder='Phone' className='border' />
                    </div> 
                    }
                    </div>
                    <button className='px-4 py-2 text-white bg-red-400 rounded-lg '>Submit</button>
                </div>
                <div className='flex flex-col items-center justify-center md:items-start md:justify-start'>
                    <span className='text-sm font-thin' >Download App From</span>
                    <div className='flex items-center justify-center gap-3 '>
                        <Image src={PlayStore} alt='Play' className="rounded-lg w-[120px] h-[40px]"/>
                        <Image src={AppStore}  alt='App' className="rounded-lg w-[120px] h-[40px]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetApp