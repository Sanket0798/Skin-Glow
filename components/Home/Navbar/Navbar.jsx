"use client";
import { HamburgerMenu, NavbarSearch } from "@/public/assets/svg/allSvg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent text-white backdrop-blur-lg">
        <div className="container mx-auto flex justify-between items-center py-4 pl-4 pr-[50px]">
          <div className="text-lg font-bold">Brand Name</div>
          {/* Hamburger Icon for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {HamburgerMenu}
            </button>
          </div>
          {/* Menu items (visible only on medium and larger screens) */}
          <ul className="hidden md:flex space-x-[75px] text-[14px] font-semibold text-black">
            <li className="hover:text-[#BB5A4F]">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-[#BB5A4F]">
              <a href="#products">Our Products</a>
            </li>
            <li className="hover:text-[#BB5A4F]">
              <a href="#about">About Us</a>
            </li>
            <li className="hover:text-[#BB5A4F]">
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          {/* Search Input (visible only on medium and larger screens) */}
          <div className="flex space-x-[10px] lg:inline-flex md:block px-4 py-2 rounded-full bg-white lg:w-[414px] h-[38px] items-center justify-start shadow-[0_0px_2px_4px_rgba(0,0,0,0.01)]">
            {NavbarSearch}
            <input
              type="text"
              placeholder="Search Products"
              className=" text-black placeholder:text-[#D9D9D9] placeholder:text-[12px] placeholder:font-medium text-[12px] font-medium"
            />
          </div>
        </div>
        {/* Mobile Menu (visible only on small screens) */}
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } flex flex-col items-center space-y-2 p-4`}
        >
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#products" className="hover:underline">
            Our Products
          </a>
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
          <div className="w-full mt-4">
            <input
              type="text"
              placeholder="Search Products"
              className="px-4 py-2 w-full rounded-full bg-white text-black"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
