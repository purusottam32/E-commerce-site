import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { CiShop } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";

function Navbar() {
  return (
    <>
      <div className="bg-gray-50  ">
        <div className="container h-[67px] w-full flex items-center justify-between mx-auto">
          <div>
            <img src="/flipkartLogo.svg" alt="logo" />
          </div>
          <div className="flex items-center bg-[#F0F5FF]">
            <CiSearch size="24px" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="h-[40px] w-[527.25px]"
            />
          </div>

          
            <div>
              <button className="flex gap-1">
                <CgProfile size="24px" />
                Login
              </button>
            </div>
            <div >
              <button className="flex gap-1">
                <LuShoppingCart size="24px" />
                Cart
              </button>
            </div>
            <div>
              <button className="flex gap-1">
                <CiShop size="24px" />
                Become a Seller
              </button>
            </div>
            <div>
              <button>
                <CiMenuKebab size="24px" />
              </button>
            </div>
          </div>
        
      </div>
    </>
  );
}

export default Navbar;
