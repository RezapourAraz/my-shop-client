import React, { Dispatch, FC, SetStateAction, useEffect } from "react";

// Icons
import { IoClose } from "react-icons/io5";

// types
type IBasketSectionProps = {
  openBasket: boolean;
  setOpenBasket: Dispatch<SetStateAction<boolean>>;
};

const basketItems = [
  {
    id: 1,
    title: "Zessi Dresses",
    color: "Yellow",
    size: "L",
    price: 98,
    count: 1,
    image: "cart-item-1.jpg",
  },
  {
    id: 2,
    title: "Zessi Dresses",
    color: "Yellow",
    size: "L",
    price: 98,
    count: 1,
    image: "cart-item-2.jpg",
  },
  {
    id: 3,
    title: "Zessi Dresses",
    color: "Yellow",
    size: "L",
    price: 98,
    count: 1,
    image: "cart-item-3.jpg",
  },
  {
    id: 4,
    title: "Zessi Dresses",
    color: "Yellow",
    size: "L",
    price: 98,
    count: 1,
    image: "cart-item-3.jpg",
  },
];

const BasketSection: FC<IBasketSectionProps> = ({
  openBasket,
  setOpenBasket,
}) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body");

    if (openBasket) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "auto";
    }
  }, [openBasket]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-800 opacity-75 z-10 ${
          openBasket ? "" : "hidden"
        }`}
        onClick={() => setOpenBasket(false)}
      />
      <div
        className={`fixed top-0 right-0 bg-white h-full w-3/12 z-10  ${
          openBasket ? "translate-x-0" : "translate-x-full"
        } transition-all`}
      >
        <div className="bg-gray-200 p-6 flex justify-between items-center h-20">
          <div className="">
            <h5 className="font-bold">SHOPPING BAG(1)</h5>
          </div>
          <div className="cursor-pointer" onClick={() => setOpenBasket(false)}>
            <IoClose className="text-2xl" />
          </div>
        </div>
        <div
          className="p-6 overflow-y-auto "
          style={{ height: "calc(100vh - 192px - 80px)" }}
        >
          {basketItems.map((item) => (
            <div key={item.id} className="flex justify-between my-4">
              <div className="flex">
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="p-2 ">
                  <h6 className="text-md font-bold">{item.title}</h6>
                  <p className="text-sm">{item.color}</p>
                  <p className="text-sm">{item.size}</p>
                  <div className="flex items-center">
                    <button className="p-2">-</button>
                    <h6 className="text-md font-bold">{item.count}</h6>
                    <button className="p-2">+</button>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col justify-between">
                <div className="cursor-pointer">
                  <IoClose className="text-xl" />
                </div>
                <div>
                  <h6 className="text-md font-bold">${item.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 fixed bottom-0 left-0 right-0 border-t-2 bg-white h-48">
          <div className="flex justify-between">
            <div>
              <h6 className="text-md font-bold">SUBTOTAL</h6>
            </div>
            <div>
              <h6 className="text-md font-bold ">$989.00</h6>
            </div>
          </div>

          <div>
            <button className="bg-gray-500 text-white p-3 w-full mt-4">
              VIEW BAG
            </button>
            <button className="bg-black text-white p-3 w-full mt-4">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketSection;
