import React from "react";

// Icons
import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const MobileMenuSection = () => {
  return (
    <div className="hidden sm:flex sticky bottom-0 p-2 bg-white left-0 right-0">
      <div className="flex items-center justify-around w-full">
        <div className="flex flex-col items-center">
          <FaHome className="text-2xl" />
          <p className="text-xs">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <FaShop className="text-2xl" />
          <p className="text-xs">Shop</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FaHeart className="text-2xl " />
          <p className="text-xs">Wishlist</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuSection;
