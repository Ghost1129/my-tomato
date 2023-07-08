import Carasouel from "@/utils/Carasouel";
import RestaurantCard from "@/utils/RestaurantCard";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useGetRestaurant } from "@/utils/useGetRestaurant";
import ShimmerCard from "@/components/Shimmer/ShimmerCard";
import Shimmerwrapper from "@/components/Shimmer/Shimmerwrapper";
import { selectRestras, setRestras } from "@/slices/menuSlice";
import { useSelector, useDispatch } from "react-redux";

const DeliveryPage = () => {
  const { data, loading } = useGetRestaurant();
  const dispatch = useDispatch();
  const restra = useSelector(selectRestras);
  useEffect(() => {
    if (data) {
      dispatch(setRestras(data));
    }
  }, [data]);

  // console.log(data)

  return (
    <>
      <div className="w-[70%] mx-auto mt-4 ">
        <span className="text-2xl font-bold">
          Inspiration for your first order
        </span>
        <Carasouel brand={false} />
      </div>
      <div className="w-[70%] mx-auto mt-4 ">
        <span className="text-2xl font-bold">Top brands for you</span>
        <Carasouel brand={true} />
      </div>
      <div className="w-[80%] mx-auto mt-4 mb-4 ">
        <span className="text-2xl font-bold">
          Delivery Restaurants in Indore
        </span>
        {loading && <Shimmerwrapper noofcards="15" />}
        <div className="flex flex-wrap justify-center gap-2">
          {restra &&
            restra?.map((item, index) => (
              <RestaurantCard key={index} item={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default DeliveryPage;
