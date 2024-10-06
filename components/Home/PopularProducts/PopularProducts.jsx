"use client";
import {
  HomeProductsCart,
  ProductRatingStar,
} from "@/public/assets/svg/allSvg";
import React, { useState } from "react";
import Image from "next/image";

const productscard = [
  {
    title: "Ultraceuticals Face Cream ",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eius",
    maxPrice: "₹ 500 ",
    minPrice: "₹ 600 ",
    rating: "4.2",
    img: require("../../../public/assets/HomePage/PopularProducts/image 68.jpg"),
  },
  {
    title: "Petite Planet Soothing Massage Oil",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eius",
    maxPrice: "₹ 500 ",
    minPrice: "₹ 600 ",
    rating: "4.2",
    img: require("../../../public/assets/HomePage/PopularProducts/image 72.jpg"),
  },
  {
    title: "Prequel Moisturizer",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eius",
    maxPrice: "₹ 500 ",
    minPrice: "₹ 600 ",
    rating: "4.2",
    img: require("../../../public/assets/HomePage/PopularProducts/image 73.jpg"),
  },
  {
    title: "Ever Eden Face Wash ",
    shortDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eius",
    maxPrice: "₹ 500 ",
    minPrice: "₹ 600 ",
    rating: "4.2",
    img: require("../../../public/assets/HomePage/PopularProducts/image 75.jpg"),
  },
];

const PopularProducts = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="container mx-auto max-w-[1280px] lg:h-[591px] lg:flex lg:flex-col">
      <h2 className="lg:text-[24px] font-semibold lg:font-semibold text-[#855F6C] lg:mb-6">
        Our Popular Products
      </h2>
      <div className="lg:w-full lg:h-[450px] lg:gap-x-[28px] flex">
        {productscard.map((item, index) => (
          <div key={index}>
            <div
              className="lg:w-[298px] lg:h-[450px] lg:border lg:rounded-[10px] shadow-[0_0px_0px_1px_rgba(0,0,0,0.07)] lg:py-[20px] lg:px-[18px] lg:flex
           lg:flex-col lg:text-start lg:justify-between"
            >
              <div className="w-full lg:h-[161px] lg:flex lg:flex-row lg:items-start lg:justify-end lg:gap-x-[16px] lg:mb-[23px]">
                <p className="lg:w-[161px] lg:h-[161px] rounded-full flex items-center justify-center">
                  {/* <img src={item.img} alt="" /> */}
                  <Image src={item.img} alt="ProductImg" />
                </p>
                <button
                  onClick={toggleLike}
                  className={`rounded-full w-[36px] h-[36px] transition flex items-center justify-center  ${
                    liked
                      ? " border-red-500"
                      : " shadow-[0_0px_0px_1px_rgba(0,0,0,0.07)]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={liked ? "red" : "none"}
                    stroke={liked ? "red" : "currentColor"}
                    className="w-[18px] h-[18px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </button>
              </div>
              <div className="lg:h-[219px]">
                <h3 className="lg:text-[#323232] lg:font-semibold lg:text-[18px] lg:mb-[6px] lg:w-[223px] lg:h-[54px]">
                  {item.title}
                </h3>
                <p className="lg:text-[14px] leading-[24px] lg:mb-[6px]">
                  {item.shortDesc}
                </p>
                <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:mb-[3px]">
                  <p className="lg:text-[#898989] lg:font-medium lg:text-[12px]">
                    Product Price
                  </p>
                  <p className="lg:text-[#898989] lg:font-medium lg:text-[12px]">
                    Ratings
                  </p>
                </div>
                <div className="lg:w-full lg:flex lg:items-center lg:justify-between lg:mb-[13px]">
                  <div className="flex items-end justify-between gap-x-[7px]">
                    <p className="font-semibold text-[#855F6C] text-[16px]">
                      {item.maxPrice}
                    </p>
                    <p className="font-medium line-through text-black text-[14px]">
                      {item.minPrice}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-x-[5px]">
                    {ProductRatingStar}
                    <p className="font-semibold text-[14px] text-black">
                      {item.rating} / 5
                    </p>
                  </div>
                </div>
                <button className="lg:w-full lg:h-[47px] text-white bg-[#855F6C] lg:rounded-[10px] flex items-center justify-center lg:gap-x-[5px]">
                  {HomeProductsCart}
                  <p className="lg:font-semibold ">Add To Cart</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
