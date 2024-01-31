import React, { FC } from "react";

// Icons
import { IoClose } from "react-icons/io5";

// types
type BasketProductCardProps = {
  item: {
    id: number;
    title: string;
    color: string;
    size: string;
    price: number;
    count: number;
    image: string;
  };
};

const BasketProductCard: FC<BasketProductCardProps> = ({ item }) => {
  return (
    <div className="flex gap-4 items-center py-8 border-b-2 justify-between">
      <div className="flex gap-4 items-center">
        <div>
          <img src={item.image} />
        </div>
        <div>
          <div>
            <p>{item.title}</p>
            <p>Color: {item.color}</p>
            <p>Size: {item.size}</p>
          </div>
        </div>
      </div>
      <div>
        <p>${item.price}</p>
      </div>
      <div className="flex px-2 border-2">
        <button className="p-2">-</button>
        <p className="p-2">{item.count}</p>
        <button className="p-2">+</button>
      </div>
      <div>
        <p className="font-bold">${item.count * item.price}</p>
      </div>
      <div className="cursor-pointer">
        <IoClose />
      </div>
    </div>
  );
};

export default BasketProductCard;
