import React from "react";
import {
  selectedBasketItems,
  addToBasket,
  removeFromBasket,
} from "@/slices/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Basket = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const additem = (item) => {
    const { id, title, price, type, desc } = item;
    dispatch(addToBasket({ id, title, price, type, desc }));
  };

  const removeitem = (id) => {
    dispatch(removeFromBasket({ id }));
  };

  const basketItems = useSelector(selectedBasketItems);

  const total = basketItems?.reduce((acc, item) => acc + item.price, 0);
  const ReduceItems = basketItems?.reduce((acc, item) => {
    const found = acc.find((el) => el.id === item.id);
    if (found) {
      found.quantity = found.quantity + 1;
    }
    if (!found) {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[70%] mx-auto p-4">
        <div className="relative flex gap-10 py-2 ">
          <span
            onClick={() => {
              router.back();
            }}
            className="text-sm cursor-pointer"
          >
            Back
          </span>
          {/* <h2 className="absolute -translate-x-1/2 left-1/2 ">
            Restaurant Name
          </h2> */}
        </div>
        <div className="flex gap-2 p-3 text-xs bg-white rounded-md">
          <span>Icon</span>
          <span>Delivery in 25-30 min</span>
        </div>
        <div className="my-6 text-center">ITEM(S) ADDED</div>
        {/* Basket */}
        <div className="relative flex flex-col gap-2 p-3 bg-white rounded-md">
          {/* Individual Item */}
          {ReduceItems?.map((item) => (
            <div key={item.id} className="flex gap-2 p-1 ">
              {/* <span>Icon</span> */}
              <div className="flex justify-between w-full">
                <div className="flex flex-col justify-center">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-xs">₹ 200</p>
                </div>
                <div className="flex flex-col ">
                  <div className="flex items-center gap-3 px-3 py-1 text-white bg-red-500">
                    <button onClick={() => removeitem(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => additem(item)}>+</button>
                  </div>
                  <span className="text-xs">
                    ₹ {item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <span className="absolute right-0 text-md top-full">
            Total <span className="font-bold">₹{total}</span>
          </span>
        </div>

        {/* Savings */}
        <div className="pt-4 my-6 text-center ">SAVINGS CORNER</div>
        {/* Coupon */}
        <div className="flex flex-col items-center">
          <div className="flex">
            {/* <span>Icon</span> */}
            <div className="p-3 mx-auto text-xs bg-white rounded-md">
              <div className="text-xs bg-white ">
                <h3>Save 150 more on this order</h3>
                <p>Get 10% off on orders above Rs. 150</p>
              </div>
              <button className="text-red-400">Apply</button>
            </div>
          </div>
          <div>------------------</div>
          <div className="text-sm cursor-pointer">View All Coupons</div>
        </div>
        <button className="fixed p-5 text-white -translate-x-1/2 bg-red-600 rounded-md bottom-4 left-1/2">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Basket;
