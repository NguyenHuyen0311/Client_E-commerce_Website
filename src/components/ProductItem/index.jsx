import React, { useContext, useEffect, useState } from "react";
import "./productItem.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { myContext } from "../../App";
import { IoCartOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { deleteData, editData } from "../../utils/api";
import { IoClose } from "react-icons/io5";

function ProductItem(props) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [activeTab2, setActiveTab2] = useState(null);
  const [isShowTabs, setIsShowTabs] = useState(false);
  const [selectedTabName, setSelectedTabName] = useState("");
  const [selectedTabName2, setSelectedTabName2] = useState("");
  const [hasClickedOnce, setHasClickedOnce] = useState(false);

  const context = useContext(myContext);

  const addToCart = (product, userId, quantity) => {
    const hasFlavor = props?.item?.productFlavor?.length > 0;
    const hasWeight = props?.item?.productWeight?.length > 0;
  
    const isFlavorSelected = !hasFlavor || selectedTabName !== "";
    const isWeightSelected = !hasWeight || selectedTabName2 !== "";
  
    if (!isFlavorSelected || !isWeightSelected) {
      setIsShowTabs(true);
  
      if (hasClickedOnce) {
        context?.openAlertBox("error", "Vui lòng chọn đầy đủ phân loại sản phẩm!");
      } else {
        setHasClickedOnce(true);
      }
  
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
  
    context?.addToCart(productItem, userId, quantity);
    setIsAdded(true);
    setIsShowTabs(false);
  };
  

  const handleClickActiveTab = (index, name) => {
    setActiveTab(index);
    setSelectedTabName(name);
  };

  const handleClickActiveTab2 = (index, name) => {
    setActiveTab2(index);
    setSelectedTabName2(name);
  };

  useEffect(() => {
    const item = context?.cartData?.filter((cartItem) =>
      cartItem.productId.includes(props?.item?._id)
    );

    if (item?.length > 0) {
      setCartItem(item);
      setIsAdded(true);
      setQuantity(item[0]?.quantity);
    } else {
      setQuantity(1);
    }
  }, [context?.cartData]);

  const minusQuantity = () => {
    if (quantity <= 1 && cartItem.length > 0) {
      deleteData(`/api/cart/delete-cart-item/${cartItem[0]?._id}`).then(
        (res) => {
          setIsAdded(false);
          setQuantity(1);
          context?.openAlertBox("success", res?.message);
          context?.getCartItems();
          setActiveTab(null);
          setActiveTab2(null);
        }
      );
    } else if (quantity > 1 && cartItem.length > 0) {
      const newQty = quantity - 1;
      const obj = {
        _id: cartItem[0]?._id,
        quantity: newQty,
        subTotal: props?.item?.price * newQty,
      };

      editData(`/api/cart/update-cart-item`, obj).then((res) => {
        setQuantity(newQty);
        context?.openAlertBox("success", res?.data?.message);
        context?.getCartItems();
      });
    }
  };

  const addQuantity = () => {
    if (quantity < props?.item?.countInStock) {
      setQuantity(quantity + 1);

      const obj = {
        _id: cartItem[0]?._id,
        quantity: quantity + 1,
        subTotal: props?.item?.price * (quantity + 1),
      };
      editData(`/api/cart/update-cart-item`, obj).then((res) => {
        context?.openAlertBox("success", res?.data?.message);
        context?.getCartItems();
      });
    } else {
      context?.openAlertBox(
        "success",
        "Số lượng bạn chọn đã đạt giới hạn số lượng sản phẩm!"
      );
    }
  };

  return (
    <div className="product-item bg-white rounded-md overflow-hidden border-1 border-solid border-[#ddd] transition-all shadow-lg">
      <div className="group img-wrapper w-[100%] rounded-t-md overflow-hidden relative">
        <Link to={`/product-details/${props?.item?._id}`}>
          <div className="product-img h-[220px] overflow-hidden">
            <img
              src={props?.item?.images[0]}
              className="w-full h-full bg-white object-cover group-hover:scale-105 transition-all duration-300"
            />
            {props?.item?.images?.length > 1 && (
              <img
                src={props?.item?.images[1]}
                className="w-full h-full bg-white object-cover transition-all duration-500 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
              />
            )}
          </div>
        </Link>

        {isShowTabs === true && (
          <div className="flex overflow-x-auto z-[100] items-center justify-center absolute top-0 left-0 w-full h-full bg-black/60 p-3 gap-2">
            <IoClose onClick={() => setIsShowTabs(false)} className="absolute cursor-pointer text-white text-[25px] link right-[10px] top-[10px]" />
            
            <div className="flex flex-col">
              <div className="flex mt-2 gap-2 overflow-x-auto items-center justify-center">
                {props?.item?.productFlavor?.length !== 0 &&
                  props?.item?.productFlavor?.map((flavor, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => handleClickActiveTab(index, flavor)}
                        className={`${
                          activeTab === index && "!bg-[#ff5252] !text-white"
                        } flex items-center justify-center p-1 px-2 bg-white/80 min-w-[30px] h-[30px] rounded-sm cursor-pointer hover:bg-white`}
                      >
                        {flavor}
                      </span>
                    );
                  })}
              </div>

              <div className="flex mt-2 gap-2 items-center justify-center">
                {props?.item?.productWeight?.length !== 0 &&
                  props?.item?.productWeight?.map((weight, index) => {
                    return (
                      <span
                        key={index}
                        onClick={() => handleClickActiveTab2(index, weight)}
                        className={`${
                          activeTab2 === index && "!bg-[#ff5252] !text-white"
                        } flex items-center justify-center p-1 px-2 bg-white/80 min-w-[30px] h-[30px] rounded-sm cursor-pointer hover:bg-white`}
                      >
                        {weight}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

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

        {isAdded === false ? (
          <Button
            onClick={() =>
              addToCart(props?.item, context?.userData?._id, quantity)
            }
            className="btn-border flex items-center gap-2 w-full !mt-3"
          >
            <IoCartOutline className="!text-[20px]" />
            <h2>Thêm vào giỏ</h2>
          </Button>
        ) : (
          <div className="flex items-center !mt-3 border justify-between overflow-hidden rounded-full">
            <Button
              onClick={minusQuantity}
              className="!min-w-[35px] !bg-[#f1f1f1] !text-black/70 !rounded-none !w-[35px] !h-[35px]"
            >
              <FaMinus />
            </Button>
            <span>{quantity}</span>
            <Button
              onClick={addQuantity}
              className="!min-w-[35px] !bg-[#ff5252] !text-[white] !rounded-none !w-[35px] !h-[35px]"
            >
              <FaPlus />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
