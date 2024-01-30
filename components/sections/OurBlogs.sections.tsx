import React, { useEffect, useState } from "react";

// components
import BlogCard from "../cards/Blog.cards";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

const blogs = [
  {
    id: 1,
    title: "What Freud Can Teach Us About Furniture",
    user: "Admin",
    date: new Date(),
    image: "post2.jpg",
  },
  {
    id: 2,
    title: "Habitant morbi tristique senectus",
    user: "Admin",
    date: new Date(),
    image: "post3.jpg",
  },
  {
    id: 3,
    title: "Woman with good shoes is never be ugly place",
    user: "Admin",
    date: new Date(),
    image: "post1.jpg",
  },
];

const OurBlogsSection = () => {
  // states
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
    <section className="bg-white">
      <div className="md:container md:mx-auto py-24">
        <div className="mb-8 text-center">
          <h6 className="text-3xl font-bold text-gray-800">Our Blogs</h6>
        </div>
        <div>
          <Swiper
            slidesPerView={
              width >= 1440
                ? 3
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
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurBlogsSection;
