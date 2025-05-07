import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { CiShop } from "react-icons/ci";

function Navbar() {
  return (
    <div className="bg-gray-50 shadow-sm">
      {/* === Top Row (Mobile: Logo + Icons) === */}
      <div className="flex items-center justify-between px-4 py-2 md:hidden">
        {/* Left: Menu + Logo */}
        <div className="flex items-center ">
        <MdOutlineMenu size="24px"/>
          <img src="/flipkartLogo.svg" alt="logo" className="h-5" />
        </div>

        {/* Right: Profile + Cart */}
        <div className="flex items-center gap-4">
          <CgProfile size="22px" />
          <LuShoppingCart size="22px" />
        </div>
      </div>

      {/* === Search Bar (Mobile) === */}
      <div className="px-4 pb-2 md:hidden">
        <div className="flex items-center bg-[#F0F5FF] rounded px-2 py-2">
          <CiSearch size="20px" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="ml-2 w-full bg-[#F0F5FF] text-sm outline-none"
          />
        </div>
      </div>

      {/* === Desktop Version === */}
      <div className="hidden md:flex container mx-auto items-center justify-between px-2 py-3">
        {/* Logo */}
        <img src="/flipkartLogo.svg" alt="logo" className="h-8" />

        {/* Search */}
        <div className="flex items-center bg-[#F0F5FF] w-[400px] px-2">
          <CiSearch size="24px" />
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            className="h-10 w-full px-2 text-sm outline-none bg-[#F0F5FF]"
          />
        </div>

        {/* Menu Items */}
        <div className="flex items-center gap-4 text-sm">
          <button className="flex gap-1 items-center">
            <CgProfile size="20px" />
            <span>Login</span>
          </button>
          <button className="flex gap-1 items-center">
            <LuShoppingCart size="20px" />
            <span>Cart</span>
          </button>
          <button className="flex gap-1 items-center">
            <CiShop size="20px" />
            <span>Become a Seller</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
