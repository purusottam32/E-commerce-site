import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
export default function Searchbar() {
    const[search,setSearch] = useState("");
  return (
    <div className="flex items-center bg-[#F0F5FF]">
      <CiSearch size="24px"/>
      <input
        type="text"
        placeholder="Search for Products, Brands and More"
        className="h-[40px] w-[527.25px]"
        value={search}
        onChange={setSearch(e.target.value)}
      />
    </div>
  );
}
