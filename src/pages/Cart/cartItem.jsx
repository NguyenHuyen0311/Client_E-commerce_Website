import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import { Button, ButtonGroup, Rating, Typography } from "@mui/material";

function CartItem(props) {
  const [quantity, setQuantity] = useState(1);
  const [flavorAnchorEl, setFlavorAnchorEl] = useState(null);
  const [weightAnchorEl, setWeightAnchorEl] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(props.flavor);
  const [selectedWeight, setSelectedWeight] = useState(props.weight);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const openFlavor = Boolean(flavorAnchorEl);
  const openWeight = Boolean(weightAnchorEl);

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

  return (
    <div className="viewcart-item pb-5 border-b relative w-full p-3 flex items-center gap-4">
      <IoMdClose className="cursor-pointer absolute top-[15px] link transition-all right-[15px] text-[22px]" />

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
          {props?.productFlavorData?.length !== 0 && (
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
                      item?.name === selectedFlavor && 'selected'}`}
                      key={index}
                      onClick={() => handleCloseFlavor(item?.name)}
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

          {props?.productWeightData?.length !== 0 && (
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
                        item?.name?.toString() === selectedWeight && 'selected'}`}
                      key={index}
                      onClick={() => handleCloseWeight(item?.name)}
                      sx={{
                        color:
                          selectedWeight === item?.name?.toString() ? "#ff5252" : "inherit",
                        fontSize: "12px"
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
              {quantity}
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

export default CartItem;
