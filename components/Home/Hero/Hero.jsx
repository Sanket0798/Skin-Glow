import Image from "next/image";
import React from "react";
import ProductImg from "@/public/assets/HomePage/Hero/ProductImage.png";

const Hero = () => {
  return (
    <>
      <section className="bg-hero bg-no-repeat bg-cover bg-center md:py-12 lg:py-0 h-[746px] flex items-end justify-center">
        <div className="container mx-auto text-center h-[578px]">
          <h1 className="text-[40px] md:h-[60px] md:text-[40px] md:font-bold font-bold text-[#855F6C] mb-[10px] md:mb-4">
            Discover the Secret to Youthful Glow!
          </h1>
          <p className="text-[20px] md:text-[20px] text-[#323232] md:h-[30px] md:font-semibold font-semibold">
            Nourish Your Skin, Embrace Your Glow. Discover the Power of Natural
            Ingredients
          </p>
          <div className="flex justify-center lg:h-[473px]">
            <Image
              src={ProductImg}
              // width={1440}
              // height={473}
              alt="Product Image"
              className="w-full max-w-md md:max-w-lg lg:max-w-[1111px] lg:h-[473px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
