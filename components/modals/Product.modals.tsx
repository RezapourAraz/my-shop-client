import React, { Dispatch, FC, SetStateAction } from "react";

// Components
import BaseModal from "./Base.modals";

// Icons
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

type IProductModalProps = {
  product: {
    id: number;
    image: string;
    title: string;
    price: number;
    desc: string;
    colors: string[];
    sizes: string[];
    categories: string[];
    tags: string[];
  };
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
};

const ProductModal: FC<IProductModalProps> = ({
  product,
  openModal,
  setOpenModal,
}) => {
  return (
    <BaseModal open={openModal} handleClose={() => setOpenModal(false)}>
      <div className="grid grid-cols-7 " style={{ width: "1200px" }}>
        <div className="col-span-3 h-full">
          <img
            height="100%"
            width="100%"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="p-10 col-span-4">
          <p className="font-bold text-xl">{product.title}</p>
          <div className="my-1">
            <p className="text-lg">${product.price}</p>
          </div>
          <p className="text-sm">{product.desc}</p>

          <div className="flex gap-8 my-8 items-center">
            <p className="font-bold">SIZES </p>
            {product.sizes.map((size) => (
              <div key={size} className="border-2 p-1 w-10 h-10 text-center">
                <h6>{size}</h6>
              </div>
            ))}
            <p>SIZE GUIDE</p>
          </div>
          <div className="flex gap-8 my-8 items-center">
            <p className="font-bold">COLORS </p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={` p-1 w-6 h-6 text-center rounded-full`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-8 my-8 items-center">
            <div className=" flex gap-3 border-2 items-center">
              <button className="p-3">+</button>
              <p className="p-3">0</p>
              <button className="p-3">-</button>
            </div>
            <div className="flex gap-2 w-full">
              <button className="bg-black text-white p-3 w-full">
                ADD TO CARD
              </button>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div className="flex gap-2 items-center cursor-pointer">
              <FaRegHeart className="text-sm " />
              <p className="text-sm ">ADD TO WISHLIST</p>
            </div>
            <div className="cursor-pointer">
              <FiShare2 />
            </div>
          </div>
          <div className="mt-20">
            <p className="text-gray-500">
              SKU: <span>N/A</span>
            </p>
            <div className="flex gap-1">
              <p className="text-gray-500">CATEGORY:</p>
              {product.categories.map((category) => (
                <div key={category}>
                  <p className="text-gray-500">{category},</p>
                </div>
              ))}
            </div>

            <div className="flex gap-1">
              <p className="text-gray-500">TAGS:</p>
              {product.tags.map((tag) => (
                <div key={tag}>
                  <p className="text-gray-500">{tag},</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default ProductModal;
