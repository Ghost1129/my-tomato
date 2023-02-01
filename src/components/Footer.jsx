import Image from 'next/image'
import React from 'react'
import PlayStore from '../assets/icons/playstore.png'
import AppStore from '../assets/icons/appstore.png'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {HiOutlineGlobeAlt} from 'react-icons/hi'
import IndiaFlag from '../assets/images/indiaflag.png'
import {AiFillLinkedin,AiFillInstagram,AiFillTwitterCircle,AiFillYoutube,AiFillFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex w-full px-4 font-Popin '>
        <div>
             <div className="flex flex-col md:items-center md:flex-row">
                <span className='text-4xl font-extrabold -skew-x-6'>zomato</span>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-1 p-2 border border-gray-200 rounded-md cursor-pointer'>
                        <Image src={IndiaFlag} className="w-6 h-6"/>
                        <span>India</span>
                        <MdOutlineKeyboardArrowDown size={'1.4rem'} /></div>
                    <div className='flex items-center gap-1 p-2 border border-gray-200 rounded-md cursor-pointer'>
                        <HiOutlineGlobeAlt size={'1.4rem'} />
                        <span>English</span>
                        <MdOutlineKeyboardArrowDown size={'1.4rem'} />
                    </div>

                </div>
            </div>
             <div className='grid grid-cols-2 text-sm font-light md:grid-cols-5'>
                <div className='flex flex-col gap-2 mt-4'>
                    <span className='font-semibold cursor-default text-md'>ABOUT ZOMATO</span>
                    <ul>
                        <li className='cursor-pointer'>Who We Are</li>
                        <li className='cursor-pointer'>Blog</li>
                        <li className='cursor-pointer'>Work With Us</li>
                        <li className='cursor-pointer'>Investor Relations</li>
                        <li className='cursor-pointer'>Report Fraud</li>
                        <li className='cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                    <span className='font-semibold cursor-default text-md'>Zomaverse</span>
                    <ul>
                        <li className='cursor-pointer'>Zomato</li>
                        <li className='cursor-pointer'>Blinkit</li>
                        <li className='cursor-pointer'>Feeding India</li>
                        <li className='cursor-pointer'>HyperPure</li>
                        <li className='cursor-pointer'>Zomaland</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                    <span className='font-semibold cursor-default text-md'>For Restaurants</span>
                    <ul>
                        <li className='cursor-pointer'>Partner with us</li>
                        <li className='cursor-pointer'>Apps For You</li>
                    </ul>
                    <span className='mt-1 font-semibold cursor-default text-md'>For Enterprises</span>
                    <ul>
                        <li className='cursor-pointer'>Zomato For Work</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                    <span className='font-semibold cursor-default text-md'>Learn More</span>
                    <ul>
                        <li className='cursor-pointer'>Privacy</li>
                        <li className='cursor-pointer'>Security</li>
                        <li className='cursor-pointer'>Terms</li>
                        <li className='cursor-pointer'>Sitemap</li>
                    </ul>   
                </div>
                <div className='flex flex-col-reverse items-center col-span-2 my-3 md:col-span-1 md:flex-col'>
                    <div className='m-3 text-center'>
                    <span>Social Links</span>
                    <div className='flex gap-2 mt-2'>
                        <AiFillLinkedin size={'1.6rem'} />
                        <AiFillInstagram size={'1.6rem'} />
                        <AiFillTwitterCircle size={'1.6rem'} />
                        <AiFillYoutube size={'1.6rem'} />
                        <AiFillFacebook size={'1.6rem'} />
                    </div>
                    </div>
                    <div className='flex gap-2'>
                        <Image src={AppStore} className="rounded-lg w-[120px] h-[40px]"/>
                        <Image src={PlayStore} className="rounded-lg w-[120px] h-[40px]"/>
                    </div>
                </div>
             </div>
             <hr className='border border-gray-300 ' />
             <span className='text-xs'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</span>
        </div>   
    </div>
  )
}

export default Footer