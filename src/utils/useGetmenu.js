import { useEffect, useRef, useState } from "react";

export const useGetMenu = (restaurantid) => {
  const [cache, setCache] = useState({}); //{restaurantid:{data:{}}}
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const MenuUrl =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=";

  useEffect(() => {
    const getMenu = async () => {
      setLoading(true);
      if (cache[restaurantid]) {
        setMenu(cache[restaurantid]?.data?.cards);
        console.log("from cache");
        setLoading(false);
      } else {
        try {
          const response = await fetch(MenuUrl + restaurantid);
          const data = await response.json();
          setCache({ ...cache, [restaurantid]: data });
          setMenu(data?.data?.cards);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
    };
    getMenu();
  }, [restaurantid]);

  return { menu, loading, error };
};
