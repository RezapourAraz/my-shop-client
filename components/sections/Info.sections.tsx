import React from "react";

// Icons
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";

const InfoSection = () => {
  return (
    <section>
      <div className="md:container md:mx-auto py-24">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div className="flex flex-col items-center">
              <TbTruckDelivery className="text-5xl" />
              <h6 className="text-lg font-bold">FAST AND FREE DELIVERY</h6>
              <p className="text-sm">Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col items-center">
              <BiSupport className="text-5xl" />
              <h6 className="text-lg font-bold">24/7 CUSTOMER SUPPORT</h6>
              <p className="text-sm">Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col items-center">
              <SiAdguard className="text-5xl" />
              <h6 className="text-lg font-bold">MONEY BACK GUARANTEE</h6>
              <p className="text-sm">We return money within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
