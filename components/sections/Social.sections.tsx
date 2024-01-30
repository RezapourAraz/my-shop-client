import React from "react";

// Icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const SocialSection = () => {
  return (
    <section className="border-t-2">
      <div className="md:container md:mx-auto ">
        <div className="grid grid-cols-2 ">
          <div className="col-span-1 h-full w-full">
            <div className="flex flex-col items-center p-10 ">
              <h5 className="p-2">Stay In Touch</h5>
              <div className="flex items-center gap-8">
                <FaFacebookF className="cursor-pointer" />
                <FaTwitter className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
                <FaYoutube className="cursor-pointer" />
                <FaPinterest className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="col-span-1 border-l-2 h-full w-full p-10">
            <div className="flex flex-col items-center p-2">
              <h5 className="p-4 text-2xl font-bold">
                Sign up now & get 10% off
              </h5>
              <p className="text-sm">
                Be the first to get the latest news about trends, promotions,
                and much more!
              </p>
              <div className="w-full m-2 flex gap-10">
                <div className="flex-1">
                  <input
                    className="border-2 p-3 w-full"
                    placeholder="Your Email Address"
                  />
                </div>
                <div>
                  <button className="bg-black text-white p-3 w-32">JOIN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
