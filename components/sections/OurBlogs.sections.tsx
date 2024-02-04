import React, { FC, useEffect, useState } from "react";

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

export type IBlog = {
  id: number;
  title: string;
  user: string;
  date: string;
  image: string;
};

type OurBlogsSectionProps = {
  blogs: IBlog[];
};

const OurBlogsSection: FC<OurBlogsSectionProps> = ({ blogs }) => {
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
