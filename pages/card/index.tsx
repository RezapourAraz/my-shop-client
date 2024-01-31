import BasketProductCard from "@/components/cards/BasketProduct.cards";
import CardStepper from "@/components/stepper/Card.stepper";
import MainLayout from "@/layouts/Main.layouts";
import React from "react";

const basketItems = [
  {
    id: 1,
    title: "Zessi Dresses",
    color: "Yellow",
    size: "L",
    price: 98,
    count: 1,
    image: "cart-item-1.jpg",
  },
  {
    id: 2,
    title: "Zessi Dresses",
    color: "Yellow",
    size: "L",
    price: 98,
    count: 1,
    image: "cart-item-2.jpg",
  },
  {
    id: 3,
    title: "Zessi Dresses",
    color: "Yellow",
    size: "L",
    price: 98,
    count: 1,
    image: "cart-item-3.jpg",
  },
];

const ShoppingCard = () => {
  return (
    <MainLayout>
      <CardStepper />
      <div className="grid grid-cols-3 md:container md:mx-auto">
        <div className="col-span-2">
          {basketItems.map((item) => (
            <BasketProductCard item={item} />
          ))}
          <div className="flex py-8 items-center justify-between">
            <div className="border-2 p-2">
              <input placeholder="Coupon Code" className="p-2 outline-none" />
              <button>APPLY COUPON</button>
            </div>
            <div>
              <button className="bg-gray-200 p-4 ">UPDATE CARD</button>
            </div>
          </div>
        </div>
        <div className=" col-span-1 p-4">
          <div className=" p-8 border-2">
            <p className="font-bold">CART TOTALS</p>
            <div className="grid grid-cols-5 py-4">
              <div className="col-span-2">
                <p className="font-bold text-sm">SUBTOTAL</p>
                <p className="font-bold text-sm">SHIPPING</p>
              </div>
              <div className="col-span-3">
                <p className="font-bold">$985</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ShoppingCard;
