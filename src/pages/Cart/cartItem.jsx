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
  const [selectedFlavor, setSelectedFlavor] = useState(props.flavor);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const openFlavor = Boolean(flavorAnchorEl);

  const handleClickFlavor = (event) => {
    setFlavorAnchorEl(event.currentTarget);
  };

  const handleCloseFlavor = (value) => {
    setFlavorAnchorEl(null);
    if (value && value !== selectedFlavor) {
      setSelectedFlavor(value);
    }
  };
  
  return (
    <div className="viewcart-item pb-5 border-b relative w-full p-3 flex items-center gap-4">
      <IoMdClose className="cursor-pointer absolute top-[15px] link transition-all right-[15px] text-[22px]" />

      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to="/product/333" className="group">
          <img
            src="https://serviceapi.spicezgold.com/download/1742462909156_gdgd1.jpg"
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-[85%]">
        <span className="text-[12px] text-black/70 font-[400]">MCLUNE</span>
        <h3 className="text-[15px] font-[600]">
          <Link className="link transition-all">
            FLORES Stylish Fashion Backpack For Girls and Boys
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="mt-1 flex items-center gap-4">
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
              <MenuItem onClick={() => handleCloseFlavor("Vani")} sx={{ color: selectedFlavor === "Vani" ? "#ff5252" : "inherit" }}>Vani</MenuItem>
              <MenuItem onClick={() => handleCloseFlavor("Chocolate")} sx={{ color: selectedFlavor === "Chocolate" ? "#ff5252" : "inherit" }}>Chocolate</MenuItem>
              <MenuItem onClick={() => handleCloseFlavor("Khoai môn")} sx={{ color: selectedFlavor === "Khoai môn" ? "#ff5252" : "inherit" }}>Khoai môn</MenuItem>
            </Menu>
          </div>

          <span className="flex gap-2 items-center justify-center cursor-pointer text-[12px] rounded-md px-2 font-[500] py-1">
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
          </span>
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
