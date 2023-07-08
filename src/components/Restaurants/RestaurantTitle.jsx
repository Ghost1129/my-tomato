import React, { useEffect } from "react";
import Info from "@/assets/icons/info.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectRestaurant } from "@/slices/restaurantSlice";
import { useGetMenu } from "@/utils/useGetmenu";

const RestaurantTitle = ({ data }) => {
  // console.log(data)
  const { name, cuisines, id } = data;

  return (
    <div className="flex justify-between mt-14 md:mt-6">
      <div>
        <h3 className="text-xl md:text-3xl">{name}</h3>
        <p className="text-sm font-light">{cuisines.join(", ")}</p>
        <p className="text-sm font-light">Abids, Hyderabad</p>
        <div className="flex items-center text-sm font-light min-w-max ">
          <span className="text-[#f6b180]">Open now -</span>
          <span>10am - 11pm</span>
          <span>(Today)</span>
          <span className="relative group">
            <Image src={Info} className="w-4 h-4 cursor-pointer" alt="info" />
            <div className="absolute top-0 hidden p-2 text-xs cursor-default w-max left-full group-hover:flex bg-slate-100">
              <div className="flex flex-col gap-3">
                <span>Opening Hour</span>
                <span>Mon-Sat 10am - 11pm</span>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="flex self-start gap-2">
        <div className="flex items-center">
          <span className="p-2 text-sm font-light bg-green-500 rounded-md">
            4.2
          </span>
          <div className="flex flex-col text-xs md:text-sm">
            <span className="font-light ">38</span>
            <span className="font-light">Dining Reviews</span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="p-2 text-sm font-light bg-green-500 rounded-md">
            4.2
          </span>
          <div className="flex flex-col text-xs md:text-sm">
            <span className="font-light">38</span>
            <span className="font-light ">Delivery Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantTitle;
