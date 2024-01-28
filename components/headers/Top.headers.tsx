import React, { Dispatch, FC } from "react";

// Icons
import { HiMenuAlt1 } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

// types
type ITopHeaderProps = {
  openSearch: boolean;
  setOpenSearch: (arg: boolean) => void;
};

const TopHeader: FC<ITopHeaderProps> = ({ setOpenSearch, openSearch }) => {
  return (
    <header className="p-14 absolute left-0 right-0">
      <div className="flex items-center justify-between">
        {/* left side */}
        <div className="flex items-center gap-10">
          <div className="flex items-center">
            <h3 className="text-3xl font-bold text-white">SHOP</h3>
            <div>
              <FaCircle className="text-2xl text-white" />
            </div>
          </div>
          <div className="cursor-pointer">
            <HiMenuAlt1 className="text-4xl text-white " />
          </div>
        </div>
        {/* right side */}
        <div className="flex gap-6 items-center ">
          <div
            className="cursor-pointer"
            onClick={() => setOpenSearch(!openSearch)}
          >
            {openSearch ? (
              <IoClose className="text-3xl text-white" />
            ) : (
              <IoSearch className="text-2xl text-white" />
            )}
          </div>
          <div>
            <FaRegUser className="text-2xl text-white" />
          </div>
          <div>
            <FaRegHeart className="text-2xl text-white" />
          </div>
          <div>
            <CgShoppingBag className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
