import React, { Dispatch, FC, SetStateAction } from "react";

// Icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import SearchBoxSection from "../sections/SearchBox.sections";
import MobileMenuSection from "../sections/MobileMenu.sections";

// types
type IMainBannerProps = {
  openSearch: boolean;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
};

const MainBanner: FC<IMainBannerProps> = ({ openSearch, setOpenSearch }) => {
  return (
    <div>
      <div
        className="w-dvh h-dvh"
        style={{
          backgroundImage: "url(slider1.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className=" absolute top-1/2 translate-x-1/2 w-1/2 text-center ">
        <div>
          <h4 className="text-white md:text-6xl sm:text-4xl">
            Better Things In a Better Way
          </h4>
        </div>
        <div className="flex gap-3 justify-center p-3">
          <div className="p-1 hover:border-b-2 transition-all ease-in">
            <h5 className="text-white text-sm cursor-pointer ">For Women</h5>
          </div>
          <div className="p-1 hover:border-b-2 transition-all ease-in">
            <h5 className="text-white text-sm cursor-pointer ">For Men</h5>
          </div>
        </div>
      </div>
      <div className="hidden absolute bottom-4 left-10 md:flex gap-3">
        <div>
          <FaFacebookF className="text-white" />
        </div>
        <div>
          <FaTwitter className="text-white" />
        </div>
        <div>
          <FaInstagram className="text-white" />
        </div>
        <div>
          <FaPinterest className="text-white" />
        </div>
      </div>

      {openSearch && <SearchBoxSection setOpenSearch={setOpenSearch} />}
      <MobileMenuSection />
    </div>
  );
};

export default MainBanner;
