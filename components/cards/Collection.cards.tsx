import React, { FC } from "react";

// Icons
import { FaEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

// types
type ICollectionCardProps = {
  collection: {
    id: number;
    title: string;
    image: string;
    category: string;
    price: number;
  };
  deal?: boolean;
};

const CollectionCard: FC<ICollectionCardProps> = ({
  collection,
  deal = false,
}) => {
  return (
    <div>
      <div className=" relative collection-card">
        <div>
          <img width="100%" height="100%" src={collection.image} />
        </div>

        <div className="absolute bottom-5 right-2 left-2 p-2 bg-white text-center hover:bg-gray-100 add-to-card">
          <button className="font-bold ">ADD TO CARD</button>
        </div>
        <div className="absolute top-1 right-2 side-action-buttons-container">
          <div className="mt-1">
            <div className="p-3 bg-white rounded-full hover:bg-red-600 hover:text-white">
              <FaEye />
            </div>
          </div>
          <div className="mt-1">
            <div className="p-3 bg-white rounded-full hover:bg-red-600 hover:text-white">
              <FaRegHeart />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className={`text-sm ${deal ? "text-white" : "initial"}`}>
          {collection.category}
        </p>
        <p
          className={`font-bold cursor-pointer ${
            deal ? "text-white" : "initial"
          }`}
        >
          {collection.title}
        </p>
        <p className={`text-sm ${deal ? "text-white" : "initial"}`}>
          ${collection.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
