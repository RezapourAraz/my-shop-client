import React, { Dispatch, FC, SetStateAction } from "react";

// Icons
import { IoSearch } from "react-icons/io5";

// types
type ISearchBoxSectionProps = {
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
};

const SearchBoxSection: FC<ISearchBoxSectionProps> = ({ setOpenSearch }) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-gray-800 opacity-75"
        onClick={() => setOpenSearch(false)}
      />

      <div className="absolute top-1/4 bg-white left-0 right-0 h-1/2 p-8">
        <div className="">
          <p className="text-gray-600 font-bold">WHAT ARE YOU LOOKING FOR?</p>
        </div>
        <div className="flex items-center my-2">
          <input
            className="p-2 border-b-2 w-full text-sm outline-none "
            placeholder="Search Product"
          />
          <IoSearch className="text-2xl text-gray-400" />
        </div>
        <div>
          <p className="text-gray-600 font-bold"> QUICKLINKS</p>
        </div>
      </div>
    </>
  );
};

export default SearchBoxSection;
