import React, { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import QuantityBox from "../../components/QuantityBox";
import { IoCartOutline } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { myContext } from "../../App";
import CircularProgress from "@mui/material/CircularProgress";

function ProductDetailsContent(props) {
  const [selectedFlavorIndex, setSelectedFlavorIndex] = useState(null);
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedTabName, setSelectedTabName] = useState("");
  const [selectedTabName2, setSelectedTabName2] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const context = useContext(myContext);

  const handleSelectedQty = (quantity) => {
    setQuantity(quantity);
  };

  const handleClickActiveTab = (index, name) => {
    setSelectedFlavorIndex(index);
    setSelectedTabName(name);
  };

  const handleClickActiveTab2 = (index, name) => {
    setSelectedWeightIndex(index);
    setSelectedTabName2(name);
  };

  const addToCart = (product, userId, quantity) => {
    const hasFlavor = props?.item?.productFlavor?.length > 0;
    const hasWeight = props?.item?.productWeight?.length > 0;

    const isFlavorSelected = !hasFlavor || selectedTabName !== "";
    const isWeightSelected = !hasWeight || selectedTabName2 !== "";

    if (!isFlavorSelected || !isWeightSelected) {
      context?.openAlertBox(
        "error",
        "Vui lòng chọn đầy đủ phân loại sản phẩm!"
      );
      return;
    }

    const productItem = {
      _id: product?._id,
      name: product?.name,
      image: product?.images[0],
      rating: product?.rating,
      price: product?.price,
      oldPrice: product?.oldPrice,
      discount: product?.discount,
      flavor: selectedTabName,
      weight: selectedTabName2,
      quantity: quantity,
      subTotal: parseInt(product?.price * quantity),
      productId: product?._id,
      countInStock: product?.countInStock,
      brand: product?.brand,
    };

    setIsLoading(true);

    if (selectedTabName !== null || selectedTabName2 !== null) {
      context?.addToCart(productItem, userId, quantity);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <div className="product-content-inner w-full overflow-x-hidden break-words">
      <h2 className="text-[20px] font-semibold whitespace-normal">
        {props?.item?.name}
      </h2>

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
        <span
          onClick={props.gotoReviews}
          className="link cursor-pointer text-[13px]"
        >
          Nhận xét ({props?.reviewsCount})
        </span>
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

      <div
        className="text-gray-500 mt-4 text-[13px]"
        dangerouslySetInnerHTML={{ __html: props?.item?.description }}
      ></div>

      {props?.item?.productFlavor?.length !== 0 && (
        <div className="flex items-center gap-3 mt-3">
          <span className="text-[14px] text-gray-600">Hương vị:</span>
          <div className="flex items-center gap-2 actions">
            {props?.item?.productFlavor?.map((item, index) => {
              return (
                <Button
                  key={index}
                  className={`${
                    selectedFlavorIndex === index
                      ? "!bg-[#ff5252] !text-white"
                      : ""
                  }`}
                  onClick={() => handleClickActiveTab(index, item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        </div>
      )}

      {props?.item?.productWeight?.length !== 0 && (
        <div className="flex items-center gap-3 mt-3">
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
                    onClick={() => handleClickActiveTab2(index, item)}
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
        <QuantityBox handleSelectedQty={handleSelectedQty} />
        <Button
          onClick={() =>
            addToCart(props?.item, context?.userData?._id, quantity)
          }
          className="btn-org !min-w-[180px] flex items-center gap-2 !px-5"
        >
          {isLoading === true ? (
            <CircularProgress />
          ) : (
            <>
              <IoCartOutline className="!text-[20px]" />
              <h2>Thêm vào giỏ</h2>
            </>
          )}
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
