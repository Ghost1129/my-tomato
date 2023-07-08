import Image from "next/image";
import React, { useEffect, useState } from "react";
import hariyalikebab from "@/assets/images/hariyalikebab.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsWithId,
  updatecartfor,
  selectcartfor,
  clearBasket,
} from "@/slices/basketSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { selectRestaurant } from "@/slices/restaurantSlice";

const FoodCard = ({ item }) => {
  const dispatch = useDispatch();
  const [readMore, setreadMore] = useState(true);
  const [rating, setRating] = useState(3);
  const [numberofitem, setNumberofitem] = useState(0);
  const id = item?.card.info.id;
  const title = item?.card.info.name;
  const price = item?.card?.info?.price
    ? item?.card?.info?.price / 100
    : item?.card?.info?.defaultPrice / 100;
  const tags = ["Chef Special", "Best Seller"];
  const type = item?.type;
  const desc = item?.card.info?.description ? item?.card.info?.description : "";
  const MenuImage =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

  const Hotel = useSelector(selectcartfor);
  const { uuid } = useSelector(selectRestaurant);
  const [isOpen, setIsOpen] = useState(false);
  const [Data, setData] = useState({
    uuid: "",
    item: "",
  });

  const additem = () => {
    if (!Hotel) {
      dispatch(updatecartfor(uuid));
      dispatch(addToBasket({ id, title, price, type, desc }));
    } else {
      if (Hotel === uuid) {
        dispatch(addToBasket({ id, title, price, type, desc }));
      } else {
        setData({ uuid: Hotel, item: { id, title, price, type, desc } });
        setIsOpen(true);
      }
    }
  };

  const removeitem = () => {
    if (!basketItems.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  const basketItems = useSelector((state) =>
    selectBasketItemsWithId(state, id)
  );

  // const noofitem = 0
  useEffect(() => {
    if (desc.length > 90) {
      setreadMore(false);
    }
  }, [desc]);

  return (
    <>
      <div className="flex md:w-[90%] p-3 ">
        {item?.card.info.imageId && (
          <Image
            src={MenuImage + item?.card.info.imageId}
            alt="food"
            width={120}
            height={120}
            className="w-[120px] aspect-square rounded-md"
          />
        )}
        <div className="relative flex flex-col w-full gap-1 px-3">
          <div className="flex justify-between">
            <h3 className="text-sm">{title}</h3>
            {basketItems.length > 0 ? (
              <div className="flex items-center gap-3 px-3 py-1 text-white bg-red-500">
                <button onClick={removeitem}>-</button>
                <span>{basketItems.length}</span>
                <button onClick={additem}>+</button>
              </div>
            ) : (
              <div className="flex gap-3 px-3 py-1 text-white bg-red-500">
                <button onClick={() => additem()}>Add</button>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex gap-2">
            {tags.includes("Chef Special") && (
              <span className="p-1 text-xs text-white bg-red-400 rounded-md">
                Chef Special
              </span>
            )}
            {tags.includes("Best Seller") && (
              <span className="p-1 text-xs text-white bg-green-400 rounded-md">
                Best Seller
              </span>
            )}
            {tags.includes("Spicy") && (
              <span className="p-1 text-xs text-white bg-yellow-400 rounded-md">
                Spicy
              </span>
            )}
          </div>
          {/* Price */}
          <div className="flex">
            <h4 className="font-medium text-md">₹{price}</h4>
          </div>
          {/* Rating */}
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) =>
                i < rating ? (
                  <svg
                    key={i}
                    className="w-4 h-4 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 01.894.553l2.447 4.895 5.21.764a1 1 0 01.553 1.789l-3.74 3.67.88 5.2a1 1 0 01-1.447 1.105L10 16.334l-4.553 2.388a1 1 0 01-1.447-1.105l.88-5.2-3.74-3.67a1 1 0 01.553-1.789l5.21-.764L9.106 2.553A1 1 0 0110 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    key={i}
                    className="w-4 h-4 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 01.894.553l2.447 4.895 5.21.764a1 1 0 01.553 1.789l-3.74 3.67.88 5.2a1 1 0 01-1.447 1.105L10 16.334l-4.553 2.388a1 1 0 01-1.447-1.105l.88-5.2-3.74-3.67a1 1 0 01.553-1.789l5.21-.764L9.106 2.553A1 1 0 0110 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                )
              )}
            </div>
            <span className="text-xs text-gray-500">20 votes</span>
          </div>
          <p className="text-xs">
            {readMore ? desc : `${desc.substring(0, 90)}...`}
            {!readMore && (
              <span
                className="text-red-400 cursor-pointer"
                onClick={() => setreadMore(true)}
              >
                Read More
              </span>
            )}
          </p>
        </div>
      </div>
      <HotelModal open={isOpen} data={Data} setOpen={setIsOpen} />
    </>
  );
};

export default FoodCard;

export const HotelModal = ({ open, setOpen, data }) => {
  const dispatch = useDispatch();
  const { id, title, price, type, desc } = data?.item;
  const onSubmithandler = () => {
    dispatch(clearBasket());
    dispatch(updatecartfor(data.uuid));
    dispatch(addToBasket({ id, title, price, type, desc }));
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Different Restaurant? </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will remove your items from cart.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onSubmithandler();
            }}
            className="bg-red-500"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
