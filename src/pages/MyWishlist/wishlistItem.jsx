import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { Rating } from "@mui/material";

function MyWishlistItem() {
  return (
    <div className="viewcart-item pb-5 border-b relative w-full p-3 flex items-center gap-4">
      <IoMdClose className="cursor-pointer absolute top-[15px] link transition-all right-[15px] text-[22px]" />

      <div className="img w-[20%] rounded-md overflow-hidden">
        <Link to="/product/333" className="group">
          <img
            src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg"
            className="w-full group-hover:scale-105 transition-all duration-200"
          />
        </Link>
      </div>

      <div className="info w-[80%]">
        <span className="text-[12px] text-black/70 font-[400]">MCLUNE</span>
        <h3 className="text-[15px] font-[600]">
          <Link className="link transition-all">
            FLORES Stylish Fashion Backpack For Girls and Boys
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center mt-1 gap-3">
          <span className="new-price text-[#000] text-[15px]  font-[600]">
            20.000đ
          </span>
          <span className="old-price text-[14px] line-through text-gray-500">
            30.000đ
          </span>
          <span className="sale text-[#ff5252] text-[14px]  font-[500]">
            Giảm 33%
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyWishlistItem;
