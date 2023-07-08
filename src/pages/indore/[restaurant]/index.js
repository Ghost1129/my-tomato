import Navbar2 from "@/components/Navbar2";
import Image from "next/image";
import React from "react";
import RestaurantHero from "@/components/RestaurantHero";
import RestaurantTitle from "@/components/Restaurants/RestaurantTitle";
import RestaurantBody from "@/components/Restaurants/RestaurantBody";
import { useSelector } from "react-redux";
import { selectRestaurant } from "@/slices/restaurantSlice";
import { useGetMenu } from "@/utils/useGetmenu";

const Restaurant = () => {
  const { uuid } = useSelector(selectRestaurant);
  const { menu, loading, error } = useGetMenu(uuid);
  const uuid2 = "b8b7f6a0-4f9e-11e9-8b5c-2a2ae2dbcce4";

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <div className="w-screen md:px-32 ">
        <Navbar2 />
        <div className="">
          <div className="text-xs">Home / India / Indore</div>
        </div>
        <RestaurantHero />
        {menu && (
          <>
            <RestaurantTitle data={menu[0]?.card.card.info} loading={loading} />
            <RestaurantBody
              data={menu[2]?.groupedCard?.cardGroupMap?.REGULAR}
              loading={loading}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Restaurant;
