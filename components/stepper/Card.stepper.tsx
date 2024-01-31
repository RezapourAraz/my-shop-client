import React from "react";

const CardStepper = () => {
  return (
    <div className="md:container md:mx-auto py-10">
      <div className="mb-8">
        <h4 className="text-3xl">CARD</h4>
      </div>

      <div className="flex justify-between">
        <div className="p-2 border-b-2 w-full border-gray-500">
          <div className="flex gap-2 ">
            <h5 className="text-lg font-bold">01</h5>
            <h5 className="text-lg font-bold">SHOPPING BAG</h5>
          </div>
          <div>
            <p className="text-sm text-gray-500">Manage Your Items List</p>
          </div>
        </div>
        <div className="p-2 border-b-2 w-full border-gray-500">
          <div className="flex gap-2">
            <h5 className="text-lg font-bold">02</h5>
            <h5 className="text-lg font-bold">SHIPPING AND CHECKOUT</h5>
          </div>
          <div>
            <p className="text-sm text-gray-500">Checkout Your Items List</p>
          </div>
        </div>
        <div className="p-2 border-b-2 w-full border-gray-500">
          <div className="flex gap-2">
            <h5 className="text-lg font-bold">03</h5>
            <h5 className="text-lg font-bold">CONFIRMATION</h5>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Review And Submit Your Order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStepper;
