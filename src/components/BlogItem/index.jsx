import React from "react";
import blogImage1 from "../../assets/image/blog-mon-an-vat-ngon-ha-noi.jpg";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function BlogItem(props) {
  return (
    <div className="blog-item group shadow-md mb-5 rounded-sm">
      <div className="blog-img w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src={props?.item?.images[0]}
          alt={props?.item?.title}
          className="w-full h-[200px] object-cover transition-all group-hover:scale-105 group-hover:rotate-1 "
        />
        <span className="gap-1 flex items-center justify-center text-white absolute bottom-[10px] right-[10px] bg-[#ff5252] rounded-md p-1 text-[11px] font-[500]">
          <IoTimeOutline className="text-[16px]" /> {new Date(props?.item?.createdAt).toLocaleDateString('vi-VN')}
        </span>
      </div>

      <div className="blog-content px-3 pb-3 mt-4">
        <h2 className="text-[16px] font-[500] text-black">
            <Link to="/" className="link">
              {props?.item?.title}
            </Link>
        </h2>
        <p className="text-[14px] font-[400] text-[rgba(0,0,0,0.7)] mt-2 mb-4">
        <div className="line-clamp-3 text-ellipsis" dangerouslySetInnerHTML={{ __html: props?.item?.description}} />
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
