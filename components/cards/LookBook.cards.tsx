import React, { FC } from "react";

// types
type ILookBookProps = {
  lookBook: {
    id: number;
    name: string;
    title: string;
    image: string;
  };
};

const LookBookCard: FC<ILookBookProps> = ({ lookBook }) => {
  return (
    <div>
      <div className="md:w-80 sm:w-full relative">
        <img width="100%" src={lookBook.image} alt={lookBook.title} />

        <div className="absolute bottom-2 left-2">
          <p className="text-lg text-white">
            {lookBook.name.toLocaleUpperCase()}
          </p>
          <p className="text-md text-white">{lookBook.title}</p>
        </div>
      </div>
    </div>
  );
};

export default LookBookCard;
