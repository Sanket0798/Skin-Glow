import React from "react";

const FeaturedCategories = () => {
  return (
    <div class="container mx-auto max-w-[1280px] lg:h-[465px] lg:flex lg:flex-col">
      <h2 className="lg:text-[24px] font-semibold lg:font-semibold text-[#855F6C] lg:mb-6">
        Featured Categories
      </h2>
      <div className="flex justify-between">
        <div className="bg-Category1 lg:w-[624px] lg:h-[405px] lg:rounded-[10px] lg:pt-[85px] lg:pl-[49px] lg:pb-[67px] lg:flex lg:flex-col">
          <h3 className="font-semibold text-[24px] text-[#855F6C] lg:mb-[29px]">
            Moisturizers & Serums
          </h3>
          <p className="lg:text-[18px] text-black lg:w-[250px] lg:h-[60px] lg:leading-[29px] lg:mb-[86px]">
            Potent Formulas for Visible Transformation
          </p>
          <button className="lg:w-[160px] lg:h-[41px] lg:bg-[#855F6C] lg:rounded-[10px] text-white lg:font-semibold lg:text-[14px] flex items-center justify-center">
            View Products
          </button>
        </div>

        <div className="flex flex-col justify-between">
          <div className="bg-Category2 lg:w-[628px] lg:h-[189px] lg:rounded-[10px] lg:pt-[18px] lg:pl-[23px] lg:pb-[21px] lg:flex lg:flex-col">
            <h3 className="font-semibold text-[24px] text-white">
              Sun Screens
            </h3>
            <p className="lg:text-[18px] text-white lg:w-[325px] lg:h-[49px] lg:leading-[29px] lg:mb-[22px]">
              Stay Sun-Safe Because Your Skin Deserves the Best
            </p>
            <button className="lg:w-[160px] lg:h-[41px] lg:bg-white lg:rounded-[10px] text-[#855F6C] lg:font-semibold lg:text-[14px] flex items-center justify-center">
              View Products
            </button>
          </div>

          <div className="bg-Category3 lg:w-[628px] lg:h-[194px] lg:rounded-[10px] lg:pt-[18px] lg:pl-[23px] lg:pb-[21px] lg:flex lg:flex-col">
            <h3 className="font-semibold text-[24px] text-white">Facewashes</h3>
            <p className="lg:text-[18px] text-white lg:w-[279px] lg:h-[54px] lg:leading-[29px] lg:mb-[22px]">
              Refresh & Rejuvenate with every Wash
            </p>
            <button className="lg:w-[160px] lg:h-[41px] lg:bg-white lg:rounded-[10px] text-[#855F6C] lg:font-semibold lg:text-[14px] flex items-center justify-center">
              View Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
