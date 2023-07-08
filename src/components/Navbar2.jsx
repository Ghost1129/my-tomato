"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCarte } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "./Searchbar";
import { selectedBasketItems } from "@/slices/basketSlice";

const Navbar2 = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const basketItems = useSelector((state) => selectedBasketItems(state));
  return (
    <div className="flex items-center justify-between font-Popin w-full z-10 h-[70px] px-4 overflow-hidden">
      <AiOutlineMenu
        className="cursor-pointer md:hidden"
        size={"1.6rem"}
        onClick={() => setMenu((val) => !val)}
      />
      <div className="relative flex items-center justify-between md:w-full">
        <Link href={"/indore?page=orderfood"}>
          <span className="text-4xl font-bold -skew-x-2">zomato</span>
        </Link>
        <div className="hidden md:flex">
          <Searchbar width="90%" />
        </div>
        <Link href={{ pathname: "/cart" }} className="relative mx-2">
          <BsCart className="cursor-pointer " size={"1.6rem"} />
          <span className="absolute flex items-center justify-center w-5 h-5 p-3 bg-red-300 rounded-full -right-2 -top-2">
            {basketItems.length}
          </span>
        </Link>

        <div className="items-center hidden gap-5 text-lg md:flex">
          <span className="">Login</span>
          <span className="">Signup</span>
        </div>
      </div>
      {menu && (
        <div className="absolute z-50 top-[70px] left-0 w-full h-full overflow-hidden bg-white ">
          <div className="flex flex-col gap-10 mx-6 mt-8 text-lg">
            <span className="cursor-pointer hover:text-red-500">Login</span>
            <span className="cursor-pointer hover:text-red-500">Signup</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
