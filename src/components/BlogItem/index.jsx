import React from "react";
import blogImage1 from "../../assets/image/blog-mon-an-vat-ngon-ha-noi.jpg";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function BlogItem() {
  return (
    <div className="blog-item group">
      <div className="blog-img w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src={blogImage1}
          alt="blog image 1"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1 "
        />
        <span className="gap-1 flex items-center justify-center text-white absolute bottom-[10px] right-[10px] bg-[#ff5252] rounded-md p-1 text-[11px] font-[500]">
          <IoTimeOutline className="text-[16px]" /> 24-03-2025
        </span>
      </div>

      <div className="blog-content mt-4">
        <h2 className="text-[16px] font-[500] text-black">
            <Link to="/" className="link">
                8 món ăn vặt khoái khẩu mùa hè của teen Hà thành
            </Link>
        </h2>
        <p className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)] mt-2 mb-4">
          1. Chè Chè trân châu tự làm vừa đảm bảo vừa dễ ăn. 
          <br></br>
          2. Tào phớ Tào phớ Hà Nội gắn liền...
        </p>
        <Link className="py-1 flex items-center gap-1 link font-[400] text-[15px]">
            Đọc thêm
            <IoIosArrowForward className="mt-[4px]" />
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
