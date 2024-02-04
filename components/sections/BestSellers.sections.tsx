import React, { FC, useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

// Components
import CollectionCard from "../cards/Collection.cards";

type IBestSellers = {
  id: number;
  image: string;
  category: string;
  title: string;
  price: number;
};

type BestSellersSectionProps = {
  bestSellers: IBestSellers[];
};

const BestSellersSection: FC<BestSellersSectionProps> = ({ bestSellers }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const resizeHandler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <section>
      <div className="md:container md:mx-auto py-24">
        <div className="mb-8 text-center">
          <h6 className="text-3xl font-bold text-gray-800">Best Sellers</h6>
        </div>

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
          {bestSellers.map((bestSeller) => (
            <SwiperSlide key={bestSeller.id}>
              <CollectionCard collection={bestSeller} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellersSection;
