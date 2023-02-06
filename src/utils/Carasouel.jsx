import React from 'react'
"../../"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import biryaniC from '@/assets/icons/Food/biryaniC.png';
import burgerImg from '@/assets/icons/Food/burger.png';
import chickenImg from '@/assets/icons/Food/chicken.png';
import friesImg from '@/assets/icons/Food/fries.png';
import homestyleImg from '@/assets/icons/Food/homestyle.png';
import noodelsImg from '@/assets/icons/Food/noodels.png';
import pannerImg from '@/assets/icons/Food/panner.png';
import pizzaImg from '@/assets/icons/Food/pizza.png';
import sandwichImg from '@/assets/icons/Food/sandwich.png';
import shawarmaImg from '@/assets/icons/Food/shawarma.png';
import nextIcon from '@/assets/icons/next.png';
import prevIco from '@/assets/icons/prev.png';

import kfcImg from '@/assets/icons/Brands/kfc.png';
import pizzahutImg from '@/assets/icons/Brands/pizzahut.png';
import scoopsImg from '@/assets/icons/Brands/scoops.png';

const brandsCardScroll = [
        {
            name: "KFC",
            imgSrc: kfcImg,
            time: "45"
        },
        {
            name: "Pizza Hut",
            imgSrc: pizzahutImg,
            time: "35"
        },
        {
            name: "Scoops",
            imgSrc: scoopsImg,
            time: "49"
        },
        {
            name: "KFC",
            imgSrc: kfcImg,
            time: "19"
        },
        {
            name: "Pizza Hut",
            imgSrc: pizzahutImg,
            time: "22"
        },
        {
            name: "Scoops",
            imgSrc: scoopsImg,
            time: "33"
        },
    ]

import Image from 'next/image';

const Carasouel = ({brand}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const foodCardScroll = [
        {
            name: "Biryani",
            imgSrc: biryaniC
        },
        {
            name: "Burger",
            imgSrc: burgerImg
        },
        {
            name: "Chicken",
            imgSrc: chickenImg
        },
        {
            name: "Fries",
            imgSrc: friesImg
        },
        {
            name: "Home Style",
            imgSrc: homestyleImg
        },
        {
            name: "Noodles",
            imgSrc: noodelsImg
        },
        {
            name: "Panner",
            imgSrc: pannerImg
        },
        {
            name: "Pizza",
            imgSrc: pizzaImg
        },
        {
            name: "Sandwich",
            imgSrc: sandwichImg
        },
        {
            name: "Shawarma",
            imgSrc: shawarmaImg
        },
    ]

    const brandsCardScroll = [
        {
            name: "KFC",
            imgSrc: kfcImg,
            time: "45"
        },
        {
            name: "Pizza Hut",
            imgSrc: pizzahutImg,
            time: "35"
        },
        {
            name: "Scoops",
            imgSrc: scoopsImg,
            time: "49"
        },
        {
            name: "KFC",
            imgSrc: kfcImg,
            time: "19"
        },
        {
            name: "Pizza Hut",
            imgSrc: pizzahutImg,
            time: "22"
        },
        {
            name: "Scoops",
            imgSrc: scoopsImg,
            time: "33"
        },
    ]

    let display
    brand? display = brandsCardScroll : display = foodCardScroll

  return (
    <div className=''>
        <Slider {...settings}>
            
            {display.map((item, index) => {
                return <div key={index} className='my-4 '>
                         <div className='flex flex-col items-center  w-[180px] h-[180px] justify-center cursor-pointer'>
                         <Image src={item.imgSrc} alt={item.name} className="w-full h-full rounded-full shadow-md" />
                            <div className='text-xl font-semibold'>{item.name}</div>
                         </div>
                    
                    </div>
            })}
        </Slider>
    </div>
  )
}

export default Carasouel



const NextArrow = ({ className, style, onClick }) => {

    return(
        <Image className={className}
        style={{ ...style}}
        onClick={onClick} src={nextIcon}/>
    )

}

const PrevArrow = ({ className, style, onClick }) => {

    return(
        <Image className={`${className}`}
        style={{ ...style}}
        onClick={onClick} src={prevIco}/>
    )

}