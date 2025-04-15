import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import QuantityBox from "../../components/QuantityBox";
import { IoCartOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

function ProductDetailsContent(props) {
  const [selectedFlavorIndex, setSelectedFlavorIndex] = useState(null);
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(null);

  return (
    <div className="product-content-inner w-full overflow-x-hidden break-words">
      <h2 className="text-[20px] font-semibold whitespace-normal">{props?.item?.name}</h2>

      <div className="flex items-center gap-3 text-gray-500 mt-2">
        <span className="text-[13px]">
          Thương hiệu:{" "}
          <span className="text-[12px] font-[600]">{props?.item?.brand}</span>
        </span>
      </div>

      <div className="flex items-center mt-1 gap-4">
        <span className="mt-1">
          <Rating
            name="size-small"
            value={props?.item?.rating}
            size="small"
            readOnly
          />
        </span>
        <span onClick={props.gotoReviews} className="link cursor-pointer text-[13px]">Nhận xét ({props?.reviewsCount})</span>
      </div>

      <div className="mt-3 flex items-center gap-4">
        <span className="text-gray-400 text-[15px] line-through">
          {props?.item?.oldPrice?.toLocaleString("vi-VN")}đ
        </span>
        <span className="text-[17px] text-[#ff5252] font-bold">
          {props?.item?.price?.toLocaleString("vi-VN")}đ
        </span>
        <span className="text-gray-500 text-[13px] font-medium">
          Số lượng:{" "}
          <b className="text-green-600 text-[14px]">
            {props?.item?.countInStock}
          </b>
        </span>
      </div>

      <p className="text-gray-500 mt-4 text-[13px]">
        {props?.item?.description}
      </p>

      {props?.item?.productFlavor?.length !== 0 && (
        <div className="flex items-center gap-3 mt-4">
          <span className="text-[14px] text-gray-600">Hương vị:</span>
          <div className="flex items-center gap-2 actions">
            {props?.item?.productFlavor?.map((item, index) => {
              return (
                <Button key={index}
                  className={`${
                    selectedFlavorIndex === index
                      ? "!bg-[#ff5252] !text-white"
                      : ""
                  }`}
                  onClick={() => setSelectedFlavorIndex(index)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      )}

      {props?.item?.productWeight?.length !== 0 && (
        <div className="flex items-center gap-3 mt-4">
          <span className="text-[14px] text-gray-600">Cân nặng:</span>
          <div className="flex items-center gap-2 actions">
            {props?.item?.productWeight
              ?.slice((a, b) => a - b)
              ?.reverse()
              ?.map((item, index) => {
                return (
                  <Button
                    key={index}
                    className={`${
                      selectedWeightIndex === index
                        ? "!bg-[#ff5252] !text-white"
                        : ""
                    }`}
                    onClick={() => setSelectedWeightIndex(index)}
                  >
                    {item}
                  </Button>
                );
              })}
          </div>
        </div>
      )}

      <p className="mt-4 text-gray-600 text-[13px]">
        Thời gian giao hàng dự kiến 2-3 ngày
      </p>

      <div className="flex items-center gap-4 mt-4">
        <QuantityBox />
        <Button className="btn-org flex items-center gap-2 !px-5">
          <IoCartOutline className="!text-[20px]" />
          <h2>Thêm vào giỏ</h2>
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-3 text-gray-500">
        <Button className=" !text-black !normal-case !bg-white hover:!text-[#ff5252] transition-all flex items-center justify-center gap-2">
          <FaRegHeart className="text-[16px]" />
          <span className="text-[13px] mt-1">Thêm vào Yêu Thích</span>
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailsContent;
