import React from "react";
import './search.css';
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#f2f2f2] rounded-[10px] relative">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm, thương hiệu,..."
        className="w-[100%] h-[100%] pl-[20px] pr-[40px] bg-[#f2f2f2] rounded-[10px] focus:outline-none"
      />
      <Button className="searchButton !absolute top-0 right-0 h-[100%] w-[40px] !bg-[#ff5252] rounded-[10px] hover:!bg-[#fc6868] transition-colors duration-300 ease-in-out">
        <IoSearch className="text-white size-5" />
      </Button>
    </div>
  );
}

export default Search;
