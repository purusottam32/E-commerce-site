import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { CiShop } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";

function Navbar() {
  return (
    <div className="bg-gray-50 shadow-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-2 py-3">
        {/* Logo */}
        <img src="/flipkartLogo.svg" alt="logo" className="h-6 md:h-8" />

        {/* Search Box */}
        <div className="flex items-center bg-[#F0F5FF] w-full md:w-auto mt-2 md:mt-0">
          <CiSearch size="24px" className="ml-2" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="h-10 w-full md:w-[400px] px-2 text-sm outline-none bg-[#F0F5FF]"
          />
        </div>

        {/* Menu Buttons */}
        <div className="flex items-center gap-4 text-sm mt-2 md:mt-0">
          <button className="flex gap-1 items-center">
            <CgProfile size="20px" />
            <span className="hidden sm:inline">Login</span>
          </button>
          <button className="flex gap-1 items-center">
            <LuShoppingCart size="20px" />
            <span className="hidden sm:inline">Cart</span>
          </button>
          <button className="flex gap-1 items-center hidden md:flex">
            <CiShop size="20px" />
            <span>Become a Seller</span>
          </button>
          <button className="md:hidden">
            <CiMenuKebab size="20px" />
          </button>
        </div>
      </div>
    </div>
  );
}


export default Navbar;
