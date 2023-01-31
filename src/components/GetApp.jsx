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
        <div className="w-[70%] h-full flex items-center justify-center">
            {/* Photo */}
            <div className='hidden md:flex items-center justify-center'><Image src={MobileImage} className="w-[250px] h-[280px]"/></div>
            {/* Text */}
            <div>
                <h3 className='text-3xl md:text-5xl md:font-medium'>Get the Tomato App</h3>
                <span>We will send you a link, open it on your phone to download the app</span>
                <div>
                    <div>
                        <input type="radio" name='radio' id='email' onClick={()=> setSelected(true)} defaultChecked={selected} />
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div>
                        <input type="radio" name='radio' id='phone' onClick={()=> setSelected(false)} />
                        <label htmlFor='phone'>Phone</label>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <input type="text" className='border' />
                    </div>
                    <button>Submit</button>
                </div>
                <div>
                    <span>Download App From</span>
                    <div className='flex'>
                        <Image src={PlayStore} className="rounded-lg"/>
                        <Image src={AppStore} className="rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetApp