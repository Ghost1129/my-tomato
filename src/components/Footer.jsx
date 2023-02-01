import Image from 'next/image'
import React from 'react'
import PlayStore from '../assets/icons/playstore.png'
import AppStore from '../assets/icons/appstore.png'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {HiOutlineGlobeAlt} from 'react-icons/hi'
import IndiaFlag from '../assets/images/indiaflag.png'

const Footer = () => {
  return (
    <div>
        <div>
             <div className="flex items-center">
                <span>zomato</span>
                <div className='flex'>
                    <div className='flex items-center'>
                        <Image src={IndiaFlag} className="w-4 h-4"/>
                        <span>India</span>
                        <MdOutlineKeyboardArrowDown /></div>
                    <div className='flex items-center'>
                        <HiOutlineGlobeAlt />
                        <span>English</span>
                        <MdOutlineKeyboardArrowDown />
                    </div>

                </div>
            </div>
             <div>
                <div>
                    <span>ABOUT ZOMATO</span>
                    <ul>
                        <li>Who We Are</li>
                        <li>Blog</li>
                        <li>Work With Us</li>
                        <li>Investor Relations</li>
                        <li>Report Fraud</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <span>Zomaverse</span>
                    <ul>
                        <li>Zomato</li>
                        <li>Blinkit</li>
                        <li>Feeding India</li>
                        <li>HyperPure</li>
                        <li>Zomaland</li>
                    </ul>
                </div>
                <div>
                    <span>For Restaurants</span>
                    <ul>
                        <li>Partner with us</li>
                        <li>Apps For You</li>
                    </ul>
                    <span>For Enterprises</span>
                    <ul>
                        <li>Zomato For Work</li>
                    </ul>
                </div>
                <div>
                    <span>Learn More</span>
                    <ul>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                    </ul>   
                </div>
                <div>
                    <span>Social Links</span>
                    <div>

                    </div>
                    <div>
                        <Image src={AppStore} className="rounded-lg w-[120px] h-[40px]"/>
                        <Image src={PlayStore} className="rounded-lg w-[120px] h-[40px]"/>
                    </div>
                </div>
             </div>
             <hr />
             <span>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</span>
        </div>   
    </div>
  )
}

export default Footer