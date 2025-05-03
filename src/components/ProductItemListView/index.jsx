import React, { useContext } from "react";
import "./productItem.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { myContext } from "../../App";

function ProductItemListView(props) {
  const context = useContext(myContext);

  return (
    <div className="product-item rounded-md mb-5 overflow-hidden border-1 border-solid border-[#ddd] bg-[#f1f1f1] p-4 gap-4 transition-all shadow-lg flex items-center">
      <div className="group img-wrapper w-[30%] rounded-md overflow-hidden relative">
        <Link to={`/product-details/${props?.item?._id}`}>
          <div className="product-img h-[260px] w-[260px] overflow-hidden">
            <img
              src={props?.item?.images[0]}
              className="w-full h-full bg-white object-cover"
            />
            {props?.item?.images?.length > 1 && (
              <img
                src={props?.item?.images[1]}
                className="w-full h-full bg-white object-cover transition-all duration-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
              />
            )}
          </div>
        </Link>
        <div className="discount flex items-center absolute top-2 left-2 bg-[#ff5252] text-white p-1 rounded-[10px] text-[12px] font-[400]">
          -{props?.item?.discount}%
        </div>
        <div className="actions absolute top-[-200px] right-[15px] flex items-center gap-2 flex-col w-[30px] transition-all duration-500 group-hover:top-[10px] opacity-0 group-hover:opacity-100">
          <Button
            onClick={() =>
              context.handleopenProductDetailsModal(true, props?.item)
            }
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all flex items-center justify-center"
          >
            <MdZoomOutMap className="text-[18px]" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all flex items-center justify-center">
            <FaRegHeart className="text-[18px]" />
          </Button>
        </div>
      </div>

      <div className="product-info p-3 w-[70%]">
        <h6 className="text-[15px] text-[#3b3a3a] product-brand">
          <span className="link transition-all">{props?.item?.brand}</span>
        </h6>
        <h3 className="text-[20px] truncate product-title mt-3 font-[500] mb-2 text-[rgb(0, 0, 0, 0.9)]">
          <Link
            to={`/product-details/${props?.item?._id}`}
            className="link transition-all"
          >
            {props?.item?.name}
          </Link>
        </h3>

        <div
          className="line-clamp-3 mb-3 text-ellipsis"
          dangerouslySetInnerHTML={{ __html: props?.item?.description }}
        />

        <Rating
          name="size-small"
          value={props?.item?.rating}
          size="small"
          readOnly
        />

        <div className="flex items-center mt-1 gap-4">
          <span className="old-price text-[16px] line-through text-gray-500">
            {props?.item?.oldPrice?.toLocaleString("vi-VN")}đ
          </span>
          <span className="new-price text-[#ff5252] text-[17px]  font-[600]">
            {props?.item?.price?.toLocaleString("vi-VN")}đ
          </span>
        </div>

        <Button className="btn-org flex items-center gap-2 !px-5 !mt-3">
          <IoCartOutline className="!text-[20px]" />
          <h2>Thêm vào giỏ</h2>
        </Button>
      </div>
    </div>
  );
}

export default ProductItemListView;
