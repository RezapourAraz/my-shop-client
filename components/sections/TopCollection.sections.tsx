import React, { useEffect, useState } from "react";

// components
import CollectionCard from "../cards/Collection.cards";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

const tabs = [
  {
    id: 1,
    name: "All",
    value: "all",
  },
  {
    id: 2,
    name: "Featured",
    value: "featured",
  },
  {
    id: 3,
    name: "Popular",
    value: "popular",
  },
  {
    id: 4,
    name: "Sale",
    value: "sale",
  },
  {
    id: 5,
    name: "Best Rated",
    value: "best",
  },
];

const collections = [
  {
    id: 1,
    image: "product-1-1.jpg",
    category: "Dresses",
    title: "Calvin Shorts",
    price: 63,
  },
  {
    id: 2,
    image: "product-2-1.jpg",
    category: "Dresses",
    title: "Calvin Shorts",
    price: 63,
  },
  {
    id: 3,
    image: "product-3-1.jpg",
    category: "Dresses",
    title: "Calvin Shorts",
    price: 63,
  },
  {
    id: 4,
    image: "product-4-1.jpg",
    category: "Dresses",
    title: "Calvin Shorts",
    price: 63,
  },
  {
    id: 5,
    image: "product-0-1.jpg",
    category: "Dresses",
    title: "Calvin Shorts",
    price: 63,
  },
];
const TopCollectionSection = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const resizeHandler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // states
  const [selectedTab, setSelectedTab] = useState("all");
  return (
    <section className="bg-white">
      <div className="md:container md:mx-auto py-24">
        <div className="mb-8 text-center">
          <h6 className="text-3xl font-bold text-gray-800">
            Our Top Collections
          </h6>
        </div>
        <div className="flex justify-center gap-10">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setSelectedTab(tab.value)}
              className={`${
                selectedTab === tab.value ? "border-b-2" : "border-b-0"
              } cursor-pointer hover:border-b-2`}
            >
              <p className="p-1">{tab.name}</p>
            </div>
          ))}
        </div>
        <Swiper
          slidesPerView={
            width >= 1440
              ? 5
              : width < 1440 && width > 768
              ? 4
              : width <= 768 && width >= 420
              ? 2
              : 1
          }
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper mt-10"
        >
          {collections.map((collection) => (
            <SwiperSlide key={collection.id}>
              <CollectionCard collection={collection} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopCollectionSection;
