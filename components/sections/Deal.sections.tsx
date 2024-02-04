import React, { FC, useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import CollectionCard from "../cards/Collection.cards";
import Countdown from "react-countdown";

const bestSellers = [
  {
    id: 1,
    image: "product-10-1.jpg",
    category: "Dresses",
    title: "Cropped Faux Leather Jacket",
    price: 63,
  },
  {
    id: 2,
    image: "product-11-1.jpg",
    category: "Dresses",
    title: "Calvin Shorts",
    price: 63,
  },
  {
    id: 3,
    image: "product-12-1.jpg",
    category: "Dresses",
    title: "Kriby T-Shirt",
    price: 63,
  },
  {
    id: 4,
    image: "product-13-1.jpg",
    category: "Dresses",
    title: "Cableknit Shawl",
    price: 63,
  },
];

type IDeal = {
  id: number;
  image: string;
  category: string;
  title: string;
  price: number;
};

type DealSectionProps = {
  dealOfWeek: IDeal[];
};

const renderer = ({ days, hours, minutes, seconds }: any) => {
  // Render a countdown
  return (
    <div className="flex gap-2 ">
      <div className="text-center gap-2 flex flex-col ">
        <p className="text-white text-2xl">{days >= 10 ? days : `0${days}`}</p>
        <p className="text-white text-sm">Days</p>
      </div>
      <div>
        <p className="text-white text-lg">:</p>
      </div>
      <div className="text-center gap-2 flex flex-col ">
        <p className="text-white text-2xl">
          {hours >= 10 ? hours : `0${hours}`}
        </p>
        <p className="text-white text-sm">Hours</p>
      </div>
      <div>
        <p className="text-white text-lg">:</p>
      </div>
      <div className="text-center gap-2 flex flex-col ">
        <p className="text-white text-2xl">
          {minutes >= 10 ? minutes : `0${minutes}`}
        </p>
        <p className="text-white text-sm">Minuets</p>
      </div>
      <div>
        <p className="text-white text-lg">:</p>
      </div>
      <div className="text-center gap-2 flex flex-col ">
        <p className="text-white text-2xl">
          {seconds >= 10 ? seconds : `0${seconds}`}
        </p>
        <p className="text-white text-sm">Seconds</p>
      </div>
    </div>
  );
};

const DealSection: FC<DealSectionProps> = ({ dealOfWeek }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const resizeHandler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // Renderer callback with condition

  return (
    <section
      className=""
      style={{
        background: "url(deal_bg.jpg)",
        height: "650px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="md:container md:mx-auto py-24">
        <div className="mb-8 text-center">
          <h6 className="text-3xl font-bold text-gray-100">Deal Of The Week</h6>
        </div>
        <div className="grid md:grid-cols-5 sm:grid-cols-2 items-center">
          <div className="col-span-1 items-center">
            <div>
              <p className="text-white text-2xl">Summer Sale</p>
              <p className="text-white text-3xl">Up to 60% Off</p>
            </div>
            <div className="mt-4">
              <Countdown date={Date.now() + 10000000} renderer={renderer} />
              {/* <p className="text-white text-2xl">48 : 08 : 35 : 44</p>
              <p className="text-white text-sm">DAYS HOURS MINS SEC</p> */}
            </div>
            <div className="mt-4">
              <p className="text-white text-md">View All</p>
            </div>
          </div>
          <div className="col-span-4">
            <Swiper
              slidesPerView={
                width >= 1440
                  ? 4
                  : width < 1440 && width > 768
                  ? 3
                  : width <= 768 && width >= 420
                  ? 2
                  : 1
              }
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper mt-10"
            >
              {dealOfWeek.map((bestSeller) => (
                <SwiperSlide key={bestSeller.id}>
                  <CollectionCard collection={bestSeller} deal />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
