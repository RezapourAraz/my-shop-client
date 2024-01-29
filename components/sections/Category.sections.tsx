import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

const categories = [
  {
    id: 1,
    title: "Shoes",
    image: "https://uomo-html.flexkitux.com/images/home/demo5/category_6.png",
  },
  {
    id: 2,
    title: "Jeans",
    image: "https://uomo-html.flexkitux.com/images/home/demo5/category_7.png",
  },
  {
    id: 3,
    title: "Shirts",
    image: "https://uomo-html.flexkitux.com/images/home/demo5/category_8.png",
  },
  {
    id: 4,
    title: "Handbags",
    image: "https://uomo-html.flexkitux.com/images/home/demo5/category_1.png",
  },
  {
    id: 5,
    title: "Clothings",
    image: "https://uomo-html.flexkitux.com/images/home/demo5/category_2.png",
  },
  {
    id: 6,
    title: "Jackets",
    image: "https://uomo-html.flexkitux.com/images/home/demo5/category_3.png",
  },
  {
    id: 7,
    title: "Watches",
    image: "https://uomo-html.flexkitux.com/images/home/demo5/category_4.png",
  },
  {
    id: 8,
    title: "Dresses",
    image: "https://uomo-html.flexkitux.com/images/home/demo5/category_5.png",
  },
];

const CategorySection = () => {
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
    <section className="bg-gray-200">
      <div className="md:container md:mx-auto py-24">
        <div className="mb-16 text-center">
          <h6 className="text-3xl font-bold text-gray-800">Top Categories</h6>
        </div>
        <Swiper
          slidesPerView={
            width >= 1440
              ? 8
              : width < 1440 && width > 768
              ? 5
              : width <= 768 && width >= 420
              ? 3
              : 2
          }
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="flex flex-col items-center ">
                <div className="w-28 h-28 mb-2">
                  <img src={category.image} width="100%" height="100%" />
                </div>

                <div className="p-1">
                  <p className="text-sm font-bold">{category.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySection;
