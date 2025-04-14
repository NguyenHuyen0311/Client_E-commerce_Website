import React, { useContext } from "react";
import "./productItem.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { myContext } from "../../App";

function ProductItem(props) {
  const context = useContext(myContext);

  return (
    <div className="product-item rounded-md overflow-hidden border-1 border-solid border-[#ddd] transition-all shadow-lg">
      <div className="group img-wrapper w-[100%] rounded-t-md overflow-hidden relative">
        <Link to={`/product-details/${props?.item?._id}`}>
          <div className="product-img h-[220px] overflow-hidden">
            <img
              src={props?.item?.images[0]}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
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
            onClick={() => context.handleopenProductDetailsModal(true, props?.item)}
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all flex items-center justify-center"
          >
            <MdZoomOutMap className="text-[18px]" />
          </Button>
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black !bg-white hover:!bg-[#ff5252] hover:!text-white transition-all flex items-center justify-center">
            <FaRegHeart className="text-[18px]" />
          </Button>
        </div>
      </div>

      <div className="product-info p-3 py-5">
        <h6 className="text-[14px] text-[#3b3a3a] product-brand">
          <span className="link transition-all">{props?.item?.brand}</span>
        </h6>
        <h3 className="text-[16px] product-title mt-2 font-[500] mb-2 text-[rgb(0, 0, 0, 0.9)] truncate">
          <Link
            to={`/product-details/${props?.item?._id}`}
            className="link transition-all"
          >
            {props?.item?.name}
          </Link>
        </h3>
        <Rating
          value={props?.item?.rating}
          name="size-small"
          size="small"
          readOnly
        />
        <div className="flex items-center mt-1 gap-4">
          <span className="old-price text-[14px] line-through text-gray-500">
            {props?.item?.oldPrice?.toLocaleString("vi-VN")}đ
          </span>
          <span className="new-price text-[#ff5252] text-[15px]  font-[600]">
            {props?.item?.price?.toLocaleString("vi-VN")}đ
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
