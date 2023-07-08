import React, { useEffect, useRef } from "react";
import hariyalikebab from "../../assets/images/hariyalikebab.jpg";
import vegIcon from "../../assets/icons/veg.png";
import Image from "next/image";
import FoodCard from "@/components/Restaurants/OrderFoodMenu/FoodCard";

const OrderOnlineFieldComponent = (data) => {
  const Observer = useRef(null);
  const [search, setSearch] = React.useState("");
  const [active, setActive] = React.useState(null);
  const sortedmenu = data.data?.cards.filter((item) =>
    item?.card.card.hasOwnProperty("title")
  );
  const [fooditems, setFooditems] = React.useState(sortedmenu);

  useEffect(() => {
    if (search === "") {
      setFooditems(sortedmenu);
      return;
    }
    const filtered = sortedmenu.filter((item) => {
      const title = item?.card.card.title.toLowerCase();
      return title.includes(search.toLowerCase());
    });

    setFooditems(filtered);
  }, [search]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(active);

      element?.scrollIntoView({
        behavior: "smooth",
      });
    };
    handleScroll();
  }, [active]);

  useEffect(() => {
    const Ttls = document.querySelectorAll("[data-sb-id]");
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-sb-id");
          setActive(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.7,
    });
    Ttls.forEach((ttl) => observer.observe(ttl));
  }, []);

  const displayFoodItems = fooditems?.map(
    (item, index) =>
      item?.card.card.itemCards && (
        <div
          id={item?.card.card.title}
          data-sb-id={item?.card.card.title}
          className="my-4 [&:not(:last-child)]:border-b border-slate-300 mx-auto"
          key={index}
        >
          {item?.card.card.itemCards.map((item, index) => (
            <FoodCard key={index} item={item} />
          ))}
        </div>
      )
  );

  // console.log(fooditems)
  return (
    <div className="flex w-full  md:h-[80vh]">
      {/* Left Col */}
      <div className="w-[25%] md:block  hidden border-r border-gray-300 overflow-y-scroll mt-2 ml-2">
        {fooditems?.map((val, id) => {
          // console.log(id,val)
          return (
            <div
              onClick={() => setActive(val?.card.card.title)}
              key={id}
              className="p-2 cursor-pointer"
            >
              <h3
                className={`${
                  active === val?.card.card.title ? "text-red-400" : ""
                }`}
              >
                {val?.card.card.title}{" "}
                {val?.card.card.itemCards &&
                  `(${val?.card.card.itemCards.length})`}
              </h3>
            </div>
          );
        })}
      </div>
      {/* Right Col */}
      <div className="md:w-[75%] mt-1 overflow-x-scroll">
        {/* Right Top Content */}
        <div className="flex flex-col gap-5 p-3">
          {/* Timing and Search */}
          <div className="flex items-center justify-between gap-4 p-2">
            <div>
              <h3 className="text-lg font-bold min-w-max">Order Online</h3>
              <p className="text-xs md:text-sm ">
                Live track your order | 30 min
              </p>
            </div>
            <div className="bg-red-200">
              <input
                className="border outline-none w-[180px] "
                type="text"
                placeholder="Search within menu"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          {/* Offers */}
          <div className="flex max-w-full gap-6 overflow-x-scroll scrollbar-hide ">
            <div className="flex flex-col p-1 text-xs font-normal text-white bg-blue-700 rounded min-w-max">
              <span>50% OFF up to ₹100</span>
              <span>
                Use code: <span>Welcome 50</span>
              </span>
            </div>
            <div className="flex flex-col p-1 text-xs font-normal text-white bg-blue-700 rounded min-w-max">
              <span>50% OFF up to ₹100</span>
              <span>
                Use code: <span>Welcome 50</span>
              </span>
            </div>
            <div className="flex flex-col p-1 text-xs font-normal text-white bg-blue-700 rounded min-w-max">
              <span>50% OFF up to ₹100</span>
              <span>
                Use code: <span>Welcome 50</span>
              </span>
            </div>
            <div className="flex flex-col p-1 text-xs font-normal text-white bg-blue-700 rounded min-w-max">
              <span>50% OFF up to ₹100</span>
              <span>
                Use code: <span>Welcome 50</span>
              </span>
            </div>
          </div>
          {/* Filter Part */}
          <div></div>
        </div>

        {/* Items */}
        <div ref={Observer} className="">
          {displayFoodItems}
        </div>
      </div>
    </div>
  );
};

export default OrderOnlineFieldComponent;
