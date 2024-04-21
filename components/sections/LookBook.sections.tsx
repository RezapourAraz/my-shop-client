import React, { FC } from "react";
import LookBookCard from "../cards/LookBook.cards";

type ILookBook = {
  id: 1;
  name: string;
  title: string;
  image: string;
};

type LookBookSectionProps = {
  lookBooks: ILookBook[];
};

const LookBookSection: FC<LookBookSectionProps> = ({ lookBooks }) => {
  return (
    <section className="bg-gray-100">
      <div className="md:container md:mx-auto py-24">
        <div className="mb-8 text-center md:grid-cols-12 sm:grid-cols-12">
          <h6 className="text-3xl font-bold text-gray-800">Look Book</h6>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-1 justify-between">
          {lookBooks.map((lookBook) => (
            <div key={lookBook.id} className="grid-col-1">
              <LookBookCard lookBook={lookBook} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookBookSection;
