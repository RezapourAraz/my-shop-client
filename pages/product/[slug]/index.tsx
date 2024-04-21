import React, { useState } from "react";

// Components
import MainLayout from "@/layouts/Main.layouts";

// icons
import { IoIosExpand } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import BestSellersSection from "@/components/sections/BestSellers.sections";
import { getLocalData } from "@/lib/localdata";

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

const tabs = ["Description", "Additional Information", "Reviews"];

const reviews = [
  {
    id: 1,
    username: "Benjam Porter",
    rating: 5,
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…",
    date: "2020-01-01",
  },
  {
    id: 2,
    username: "Janice Miller",
    rating: 5,
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est…",
    date: "2020-01-01",
  },
];

const ProductDetail = ({ localData, params }: any) => {
  // states
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedTab, setSelectedTab] = useState("Description");

  // handlers
  const changeImageHandler = (img: string) => {
    setSelectedImage(img);
  };

  return (
    <MainLayout>
      <div className="grid md:grid-cols-11  md:container  md:mx-auto">
        <div className="md:col-span-1 sm:col-span-2 p-2">
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
        <div className="md:col-span-5 sm:col-span-10 p-2 ">
          <div className="my-2 relative ">
            <img src={selectedImage} width="100%" />
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full cursor-pointer">
              <IoIosExpand className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="md:col-span-5 sm:col-span-12 p-2 md:ml-10">
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
            <div className="flex gap-8 my-8 items-center">
              <div className=" flex gap-3 border-2 items-center">
                <button className="p-3">+</button>
                <p className="p-3">0</p>
                <button className="p-3">-</button>
              </div>
              <div className="flex gap-2 w-full">
                <button className="bg-black text-white p-3 w-full">
                  ADD TO CARD
                </button>
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex gap-2 items-center cursor-pointer">
                <FaRegHeart className="text-sm " />
                <p className="text-sm ">ADD TO WISHLIST</p>
              </div>
              <div className="cursor-pointer">
                <FiShare2 />
              </div>
            </div>
            <div className="mt-20">
              <p className="text-gray-500">
                SKU: <span>N/A</span>
              </p>
              <div className="flex gap-1">
                <p className="text-gray-500">CATEGORY:</p>
                {productDetail.categories.map((category) => (
                  <div key={category}>
                    <p className="text-gray-500">{category},</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-1">
                <p className="text-gray-500">TAGS:</p>
                {productDetail.tags.map((tag) => (
                  <div key={tag}>
                    <p className="text-gray-500">{tag},</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="md:col-span-11 sm:col-span-12 flex justify-center my-10">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`${
                selectedTab === tab && "border-b-2"
              } p-2 cursor-pointer mx-5`}
              onClick={() => setSelectedTab(tab)}
            >
              <p className="text-lg p-2">{tab}</p>
            </div>
          ))}
        </div> */}
        {selectedTab === "Description" && (
          <div className="md:col-span-11 sm:col-span-12  p-14">
            {productDetail.description}
          </div>
        )}
        {selectedTab === "Additional Information" && (
          <div className="col-span-11 p-14 flex justify-center">
            <table className="border-spacing-x-5 border-separate">
              {Object.keys(productDetail).map((key) => {
                const keys = ["weight", "dimensions", "sizes", "colors"];
                if (!keys.includes(key)) return null;

                let content = productDetail[key as keyof typeof productDetail];
                if (key === "colors" || key === "sizes") {
                  content = (content as string[]).join(", ");
                }

                return (
                  <tr className="text-left" key={key}>
                    <th className="capitalize">{key}</th>
                    <td>{content}</td>
                  </tr>
                );
              })}
              {/* <tr className="text-left">
                <th>Weight</th>
                <td>{productDetail.weight}</td>
              </tr>
              <tr className="text-left">
                <th>Dimensions</th>
                <td>{productDetail.dimensions}</td>
              </tr>
              <tr className="text-left">
                <th>Sizes</th>
                <td>{productDetail.sizes.join(", ")}</td>
              </tr>
              <tr className="text-left">
                <th>Colors</th>
                <td>{productDetail.colors.join(", ")}</td>
              </tr> */}
            </table>
            {/* <div>
              <div className="p-2 flex gap-20 items-center">
                <p className="text-lg w-20">Weight</p>
                <p className="text-sm">{productDetail.weight}KG</p>
              </div>
              <div className="p-2 flex gap-20 items-center">
                <p className="text-lg w-20">Dimensions</p>
                <p className="text-sm">{productDetail.dimensions} cm</p>
              </div>
              <div className="p-2 flex gap-20 items-center">
                <p className="text-lg w-20">Sizes</p>
                <div className="flex gap-2">
                  {productDetail.sizes.map((size) => (
                    <p className="text-sm">{size}</p>
                  ))}
                </div>
              </div>
              <div className="p-2 flex gap-20 items-center">
                <p className="text-lg w-20">Colors</p>
                <div className="flex gap-2">
                  {productDetail.colors.map((color) => (
                    <p className="text-sm">{color}</p>
                  ))}
                </div>
              </div>
              <div className="p-2 flex gap-2 items-center">
                <p className="text-lg w-20">Storage</p>
                <p className="text-sm">{productDetail.storage}</p>
              </div>
            </div> */}
          </div>
        )}
        {selectedTab === "Reviews" && (
          <div className="grid col-span-11 p-14">
            <div className="col-span-11 mb-10">
              <p className="text-xl">Reviews</p>
            </div>
            {reviews.map((review) => (
              <div className="grid grid-cols-11 col-span-11 gap-5 my-2 border-b-2">
                <div className="col-span-1">
                  <div className="w-12 h-12 rounded-full bg-gray-400" />
                </div>
                <div className="col-span-10">
                  <div>
                    <p className="text-sm text-gray-600">{review.username}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(review.date).toDateString()}
                    </p>
                  </div>
                  <div className="my-2">
                    <p className="text-sm">{review.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {localData && <BestSellersSection bestSellers={localData?.bestSellers} />}
    </MainLayout>
  );
};

export async function getStaticProps({ params }: any) {
  const localData = await getLocalData();

  return {
    props: { localData, params },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "/product/2" } }],
    fallback: true,
  };
}

export default ProductDetail;
