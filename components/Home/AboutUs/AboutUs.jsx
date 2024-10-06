import React from "react";
import Image from "next/image";
import Img1 from "@/public/assets/HomePage/AboutUs/Img1.png";
import Img2 from "@/public/assets/HomePage/AboutUs/Img2.png";

const AboutUs = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-6 sm:py-12 md:py-0 h-[676px]">
      <div className="container max-w-[1280px] flex flex-col lg:flex-row md:max-w-[1280px] lg:justify-between">
        <div className="text-center lg:text-left mt-[88px]">
          <h2 className="lg:text-[24px] font-semibold lg:font-semibold text-[#855F6C] mb-6">
            About Our Skincare Line
          </h2>
          <p className="text-black font-medium md:font-medium text-[20px] md:text-[20px] lg:w-[688px] lg:h-[148px]">
            At Gubani, we believe that healthy, glowing skin is the foundation
            for true beauty. Our premium skincare line is meticulously crafted
            with the finest natural ingredients and cutting-edge formulas to
            nourish, protect, and revitalize your skin.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 flex lg:w-[472px] justify-center items-center relative">
          <div className="relative z-10 lg:w-[359px] lg:h-[561px] rounded-[500px] bg-[#FFF0EF] items-end flex justify-end">
            <Image
              src={Img2}
              alt="Woman holding skincare product"
              // width={354}
              // height={517}
              className="rounded-full w-[354px]"
            />
          </div>
          <div className="absolute w-[225px] h-[225px] bg-[#FFF0EF] rounded-full border-[9px] border-white lg:bottom-[50px] lg:right-[10px] z-20 flex items-center justify-center border-solid transform translate-x-1/4 translate-y-1/4">
            <Image
              src={Img1}
              alt="Skincare products"
              // width={100}
              // height={100}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
