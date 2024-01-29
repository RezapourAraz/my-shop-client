import React from "react";
import LookBookCard from "../cards/LookBook.cards";

const lookBooks = [
  {
    id: 1,
    name: "Women Seasons",
    title: "Floral Dress",
    image: "lookbook-1.jpg",
  },
  {
    id: 2,
    name: "Women Seasons",
    title: "Trench Coat",
    image: "lookbook-2.jpg",
  },
  {
    id: 1,
    name: "Men Seasons",
    title: "Folk Pants",
    image: "lookbook-3.jpg",
  },
  {
    id: 1,
    name: "Men Seasons",
    title: "Cos Jacket",
    image: "lookbook-4.jpg",
  },
];

const LookBookSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="md:container md:mx-auto py-24">
        <div className="mb-8 text-center">
          <h6 className="text-3xl font-bold text-gray-800">Look Book</h6>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 justify-between">
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
