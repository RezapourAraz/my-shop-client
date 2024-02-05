import React, { useState } from "react";

// Components
import MainLayout from "@/layouts/Main.layouts";

// icons
import { IoIosExpand } from "react-icons/io";

const productImages = [
  "/product_0.jpg",
  "/product_0-1.jpg",
  "/product_0-2.jpg",
  "/product_0-3.jpg",
];

const productDetail = {
  title: "Lightweight Puffer Jacket With a Hood",
  rating: 5,
  review: "8k",
  price: 449,
  info: "Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere eget.",
  sku: null,
  categories: ["Casual & Urban Wear", "Jacket", "Men"],
  tags: ["Biker", "black", "bomber", "leather"],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  weight: 1.25,
  dimensions: "90 * 60 * 90",
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["Black", "Orange", "White"],
  storage: "Relaxed fit shirt-style dress with a rugged",
};

const ProductDetail = () => {
  // states
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  // handlers
  const changeImageHandler = (img: string) => {
    setSelectedImage(img);
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-11 md:container md:mx-auto">
        <div className="col-span-1 p-2">
          {productImages.map((image) => (
            <div
              key={image}
              className="w-full my-2 cursor-pointer"
              onClick={() => changeImageHandler(image)}
            >
              <img
                src={image}
                alt={image}
                className={`${
                  selectedImage === image ? "opacity-100" : "opacity-50"
                } `}
              />
            </div>
          ))}
        </div>
        <div className="col-span-5 p-2 ">
          <div className="my-2 relative ">
            <img src={selectedImage} width="100%" />
            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full cursor-pointer">
              <IoIosExpand className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="col-span-5 p-2 ml-10">
          <div className="my-2">
            <div>
              <p className="text-md font-bold">HOME / PRODUCT</p>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold">{productDetail.title}</p>
            </div>
            <div>
              <p className="text-sm my-2">{productDetail.review}+ Reviews</p>
            </div>
            <div>
              <p className="text-2xl my-2 font-bold">${productDetail.price}</p>
            </div>
            <div>
              <p className="text-sm my-6 ">{productDetail.info}</p>
            </div>
          </div>
        </div>
        <div>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
