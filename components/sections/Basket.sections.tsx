import React, { Dispatch, FC, SetStateAction, useEffect } from "react";

// Icons
import { IoClose } from "react-icons/io5";

// types
type IBasketSectionProps = {
  openBasket: boolean;
  setOpenBasket: Dispatch<SetStateAction<boolean>>;
};

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
        className={`fixed top-0 right-0 bg-white h-full w-3/12 z-10 ${
          openBasket ? "translate-x-0" : "translate-x-full"
        } transition-all`}
      >
        <div className="bg-gray-200 p-6 flex justify-between items-center">
          <div className="">
            <h5 className="font-bold">SHOPPING BAG(1)</h5>
          </div>
          <div className="cursor-pointer" onClick={() => setOpenBasket(false)}>
            <IoClose className="text-2xl" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default BasketSection;
