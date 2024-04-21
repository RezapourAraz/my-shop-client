import React from "react";

// Icons
import { FaCircle } from "react-icons/fa";

const MainFooter = () => {
  return (
    <footer className="bg-black">
      <div className="md:container md:mx-auto py-24">
        <div className="grid md:grid-cols-5 xs:grid-coles-12">
          <div className="md:col-span-1">
            <div className="flex flex-col">
              <div className="flex items-center mb-5">
                <h3 className="text-3xl font-bold text-white">SHOP</h3>
                <div>
                  <FaCircle className="text-2xl text-white" />
                </div>
              </div>

              <div>
                <p className="text-white text-sm py-3">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
                </p>
                <p className="text-white text-sm py-3">sale@shop.com</p>
                <p className="text-white text-sm py-3">+98 914-436-3473</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h6 className="text-white text-center text-xl font-bold">
                COMPANY
              </h6>
            </div>
            <div className="text-center mt-4">
              <h5 className="text-white text-sm my-3">About Us</h5>
              <h5 className="text-white text-sm my-3">Careers</h5>
              <h5 className="text-white text-sm my-3">Affiliates</h5>
              <h5 className="text-white text-sm my-3">Blog</h5>
              <h5 className="text-white text-sm my-3">Contact Us</h5>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h6 className="text-white text-center text-xl font-bold">SHOP</h6>
            </div>
            <div className="text-center mt-4">
              <h5 className="text-white text-sm my-3">New Arrivals</h5>
              <h5 className="text-white text-sm my-3">Accessories</h5>
              <h5 className="text-white text-sm my-3">Men</h5>
              <h5 className="text-white text-sm my-3">Women</h5>
              <h5 className="text-white text-sm my-3">Shop All</h5>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h6 className="text-white text-center text-xl font-bold">HELP</h6>
            </div>
            <div className="text-center mt-4">
              <h5 className="text-white text-sm my-3">Customer Service</h5>
              <h5 className="text-white text-sm my-3">My Account</h5>
              <h5 className="text-white text-sm my-3">Find a Store</h5>
              <h5 className="text-white text-sm my-3">Legal & Privacy</h5>
              <h5 className="text-white text-sm my-3">Contact</h5>
              <h5 className="text-white text-sm my-3">Gift Card</h5>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h6 className="text-white text-center text-xl font-bold">
                OPENING TIME
              </h6>
              <div className="text-center mt-4">
                <h5 className="text-white text-sm my-3">
                  Mon - Fri: 8AM - 9PM
                </h5>
                <h5 className="text-white text-sm my-3">Sat: 9AM - 8PM</h5>
                <h5 className="text-white text-sm my-3">Sun: Closed</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-500 md:container md:mx-auto py-8 my-8 flex justify-between">
        <p className="text-sm text-white">SHOP©{new Date().getFullYear()}</p>
        <p className="text-sm text-white">Created By Araz Rezapour</p>
      </div>
    </footer>
  );
};

export default MainFooter;
