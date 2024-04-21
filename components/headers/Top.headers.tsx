import React, { Dispatch, FC, SetStateAction } from "react";

// Icons
import { HiMenuAlt1 } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";

// types
type ITopHeaderProps = {
  openSearch: boolean;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  setOpenAccount: Dispatch<SetStateAction<boolean>>;
  setOpenBasket: Dispatch<SetStateAction<boolean>>;
};

const TopHeader: FC<ITopHeaderProps> = ({
  openSearch,
  setOpenSearch,
  setOpenAccount,
  setOpenBasket,
}) => {
  // hooks
  const router = useRouter();
  const basket = [];

  return (
    <header
      className={`md:p-14 ${router.route !== "/" ? "initial" : "absolute"}  ${
        router.route !== "/" ? "bg-black" : "bg-transparent"
      } left-0 right-0 sm:p-4`}
    >
      <div className="hidden md:flex items-center justify-between ">
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
          <div className="cursor-pointer" onClick={() => setOpenAccount(true)}>
            <FaRegUser className="text-2xl text-white" />
          </div>
          <div>
            <FaRegHeart className="text-2xl text-white" />
          </div>
          <div
            className="cursor-pointer relative"
            onClick={() => setOpenBasket(true)}
          >
            <CgShoppingBag className="text-2xl text-white" />
            {basket.length > 0 && (
              <div className="absolute h-4 w-4 bg-white -bottom-1 -right-1 rounded-full  flex items-center justify-center">
                <span className="text-xs font-bold ">{basket.length}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between ">
        <div className="cursor-pointer">
          <HiMenuAlt1 className="text-4xl text-white " />
        </div>
        <div className="flex items-center">
          <h3 className="text-3xl font-bold text-white">SHOP</h3>
          <div>
            <FaCircle className="text-2xl text-white" />
          </div>
        </div>
        <div>
          <CgShoppingBag
            onClick={() => router.push("/card")}
            className="text-2xl text-white"
          />
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
