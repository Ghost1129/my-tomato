import { useState, useEffect, cache } from "react";

export const useGetRestaurant = () => {
  const url =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5270362&lng=77.13593279999999&page_type=DESKTOP_WEB_LISTING";
  const [data, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const getRestaurant = async () => {
      setLoading(true);
      if (cache[1]) {
        setRestaurant(cache[1]);
        console.log("from cache");
        setLoading(false);
        return;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRestaurant(data?.data?.cards[2]?.data?.data?.cards);
        setCache((cache[1] = data?.data?.cards[2]?.data?.data?.cards));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getRestaurant();
  }, []);
  return { data, loading };
};