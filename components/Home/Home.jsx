import React from "react";
import Navbar from "@/components/Home/Navbar/Navbar";
import Hero from "./Hero/Hero";
import AboutUs from "./AboutUs/AboutUs";
import PopularProducts from "./PopularProducts/PopularProducts";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";

const Home = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Hero />
      <AboutUs />
      <PopularProducts />
      <FeaturedCategories />
    </div>
  );
};

export default Home;
