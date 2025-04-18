import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import { Button, ButtonGroup, Rating, Typography } from "@mui/material";
import { deleteData, editData, fetchDataFromApi } from "../../utils/api";
import { myContext } from "../../App";

function CartItem(props) {
  const [flavorAnchorEl, setFlavorAnchorEl] = useState(null);
  const [weightAnchorEl, setWeightAnchorEl] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(props.flavor);
  const [selectedWeight, setSelectedWeight] = useState(props.weight);
  const [productData, setProductData] = useState([]);

  const context = useContext(myContext);

  const openFlavor = Boolean(flavorAnchorEl);
  const openWeight = Boolean(weightAnchorEl);

  useEffect(() => {
    fetchDataFromApi(`/api/product/${props?.item?.productId}`).then((res) => {
      setProductData((prevData) => [...prevData, res.product]);
    });
  }, []);

  const handleClickFlavor = (event) => {
    setFlavorAnchorEl(event.currentTarget);
  };

  const handleCloseFlavor = (value) => {
    setFlavorAnchorEl(null);
    if (value && value !== selectedFlavor) {
      setSelectedFlavor(value);
    }
  };

  const handleClickWeight = (event) => {
    setWeightAnchorEl(event.currentTarget);
  };

  const handleCloseWeight = (value) => {
    setWeightAnchorEl(null);
    if (value && value !== selectedWeight) {
      setSelectedWeight(value);
    }
  };

  const updateCart = (selectedVal, quantity) => {
    handleCloseFlavor(selectedVal);

    fetchDataFromApi(`/api/product/${props?.item?.productId}`).then((res) => {
      const product = res?.product;

      const itemFlavor = product?.productFlavor || [];
      const isFlavorExist = itemFlavor.includes(selectedVal);

      if (!isFlavorExist) {
        context?.openAlertBox("error", "Không tìm thấy hương vị");
        return;
      }

      const cartObj = {
        _id: props?.item?._id,
        quantity: quantity,
        subTotal: props?.item?.price * quantity,
        flavor: selectedVal,
        weight: selectedWeight,
      };

      editData("/api/cart/update-cart-item", cartObj).then((res) => {
        if (res?.data?.error === false) {
          context?.openAlertBox("success", res?.data?.message);
          setSelectedFlavor(selectedVal);
          context?.getCartItems();
        }
      });
    });
  };

  const updateCart2 = (selectedVal, quantity) => {
    handleCloseWeight(selectedVal);

    fetchDataFromApi(`/api/product/${props?.item?.productId}`).then((res) => {
      const product = res?.product;

      const itemWeight = product?.productWeight || [];
      const isWeightExist = itemWeight.includes(selectedVal);

      if (!isWeightExist) {
        context?.openAlertBox("error", "Không tìm thấy cân nặng");
        return;
      }

      const cartObj = {
        _id: props?.item?._id,
        quantity: quantity,
        subTotal: props?.item?.price * quantity,
        flavor: selectedFlavor,
        weight: selectedVal,
      };

      editData("/api/cart/update-cart-item", cartObj).then((res) => {
        if (res?.data?.error === false) {
          context?.openAlertBox("success", res?.data?.message);
          setSelectedWeight(selectedVal);
          context?.getCartItems();
        }
      });
    });
  };

  const handleDecrease = () => {
    const cartItem = props.item;

    if (cartItem?.quantity <= 1) {
      deleteData(`/api/cart/delete-cart-item/${cartItem._id}`).then((res) => {
        context?.openAlertBox("success", res?.message);
        context?.getCartItems();
      });
    } else {
      const newQty = cartItem.quantity - 1;
      const obj = {
        _id: cartItem._id,
        quantity: newQty,
        subTotal: cartItem.price * newQty,
        flavor: selectedFlavor,
        weight: selectedWeight,
      };

      editData(`/api/cart/update-cart-item`, obj).then((res) => {
        context?.openAlertBox("success", res?.data?.message);
        context?.getCartItems();
      });
    }
  };

  const handleIncrease = () => {
    const cartItem = props.item;

    if (cartItem?.quantity < cartItem?.countInStock) {
      const newQty = cartItem.quantity + 1;
      const obj = {
        _id: cartItem._id,
        quantity: newQty,
        subTotal: cartItem.price * newQty,
        flavor: selectedFlavor,
        weight: selectedWeight,
      };

      editData(`/api/cart/update-cart-item`, obj).then((res) => {
        context?.openAlertBox("success", res?.data?.message);
        context?.getCartItems();
      });
    } else {
      context?.openAlertBox(
        "warning",
        "Số lượng bạn chọn đã đạt giới hạn số lượng sản phẩm!"
      );
    }
  };

  const removeItem = (id) => {
    deleteData(`/api/cart/delete-cart-item/${id}`).then((res) => {
      context?.openAlertBox("success", res?.message);
      context?.getCartItems();
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
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-[85%]">
        <span className="text-[12px] text-black/70 font-[400]">
          {props?.item?.brand}
        </span>
        <h3 className="text-[15px] w-[70%] font-[600]  truncate overflow-hidden whitespace-nowrap">
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

        <div className="mt-1 flex items-center gap-4">
          {productData[0]?.productFlavor?.length !== 0 && (
            <div className="relative">
              <span
                onClick={handleClickFlavor}
                className="flex items-center justify-center cursor-pointer bg-[#f1f1f1] text-[12px] rounded-md px-2 font-[500] py-1"
              >
                Hương vị: {selectedFlavor}
                <GoTriangleDown />
              </span>

              <Menu
                id="flavor-menu"
                anchorEl={flavorAnchorEl}
                open={openFlavor}
                onClose={() => handleCloseFlavor(null)}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {props?.productFlavorData?.map((item, index) => {
                  return (
                    <MenuItem
                      className={`${
                        item?.name === selectedFlavor && "selected"
                      }`}
                      key={index}
                      onClick={() =>
                        updateCart(item?.name, props?.item?.quantity)
                      }
                      sx={{
                        color:
                          selectedFlavor === item?.name ? "#ff5252" : "inherit",
                      }}
                    >
                      {item?.name}
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          )}

          {productData[0]?.productWeight?.length !== 0 && (
            <div className="relative">
              <span
                onClick={handleClickWeight}
                className="flex items-center justify-center cursor-pointer bg-[#f1f1f1] !text-[12px] rounded-md px-2 font-[500] py-1"
              >
                Cân nặng: {selectedWeight}
                <GoTriangleDown />
              </span>

              <Menu
                id="weight-menu"
                anchorEl={weightAnchorEl}
                open={openWeight}
                onClose={() => handleCloseWeight(null)}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {props?.productWeightData?.map((item, index) => {
                  return (
                    <MenuItem
                      className={`${
                        item?.name?.toString() === selectedWeight && "selected"
                      }`}
                      key={index}
                      onClick={() =>
                        updateCart2(item?.name, props?.item?.quantity)
                      }
                      sx={{
                        color:
                          selectedWeight === item?.name?.toString()
                            ? "#ff5252"
                            : "inherit",
                        fontSize: "12px",
                      }}
                    >
                      {item?.name}
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          )}
        </div>

        <div className="flex w-full gap-2 items-center mt-3 cursor-pointer text-[12px] rounded-md px-2 font-[500] py-1">
          Số lượng:
          <ButtonGroup
            sx={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
              height: "25px",
            }}
          >
            <Button
              onClick={handleDecrease}
              sx={{
                border: "none",
                color: "#555",
                minWidth: "40px",
                "&:hover": { backgroundColor: "#f8f8f8" },
              }}
            >
              -
            </Button>

            <Typography
              sx={{
                px: 2,
                minWidth: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderLeft: "1px solid #ddd",
                borderRight: "1px solid #ddd",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              {props?.item?.quantity}
            </Typography>

            <Button
              onClick={handleIncrease}
              sx={{
                border: "none",
                color: "#555",
                minWidth: "40px",
                "&:hover": { backgroundColor: "#f8f8f8" },
              }}
            >
              +
            </Button>
          </ButtonGroup>
        </div>

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

export default CartItem;
