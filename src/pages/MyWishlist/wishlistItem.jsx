import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { Rating } from "@mui/material";
import { myContext } from "../../App";
import { deleteData } from "../../utils/api";

function MyWishlistItem(props) {
  const context = useContext(myContext);

  const removeItem = (id) => {
    deleteData(`/api/myWishlist/${id}`).then((res) => {
      if (res?.error === false) {
        context?.openAlertBox("success", res?.message);
        context?.getMyWishlistData();
      }
    });
  };

  return (
    <div className="viewcart-item pb-5 border-b relative w-full p-3 flex items-center gap-4">
      <IoMdClose
        onClick={() => removeItem(props?.item?._id)}
        className="cursor-pointer absolute top-[15px] link transition-all right-[15px] text-[22px]"
      />

      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link
          to={`/product-details/${props?.item?.productId}`}
          className="group"
        >
          <img
            src={props?.item?.image}
            className="w-full group-hover:scale-105 transition-all h-[150px] object-cover duration-200"
          />
        </Link>
      </div>

      <div className="info w-[85%]">
        <span className="text-[12px] text-black/70 font-[400]">
          {props?.item?.brand}
        </span>
        <h3 className="text-[15px] font-[600] mt-1 mb-2">
          <Link
            to={`/product-details/${props?.item?.productId}`}
            className="link transition-all"
          >
            {props?.item?.productTitle}
          </Link>
        </h3>

        <Rating
          name="size-small"
          value={props?.item?.rating}
          size="small"
          readOnly
        />

        <div className="flex items-center mt-1 gap-3">
          <span className="new-price text-[#000] text-[15px]  font-[600]">
            {props?.item?.price?.toLocaleString("vi-VN")}đ
          </span>
          <span className="old-price text-[14px] line-through text-gray-500">
            {props?.item?.oldPrice?.toLocaleString("vi-VN")}đ
          </span>
          <span className="sale text-[#ff5252] text-[14px]  font-[500]">
            Giảm {props?.item?.discount}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default MyWishlistItem;
