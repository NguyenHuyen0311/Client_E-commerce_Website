import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Navigation from "./Navigation";
import { myContext } from "../../App";

import Drawer from "@mui/material/Drawer";
import CartPanel from "../CartPanel";
import { IoMdClose } from "react-icons/io";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 5,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 6px 0 4px",
  },
}));

function Header() {
  const context = useContext(myContext);

  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px] border-gray-200 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[400] flex items-center gap-2">
                <AiFillPhone className="text-[16px]" /> +84 966 556 026 | Kết
                nối
                <a
                  href="https://fb.com/onimarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 hover:underline"
                >
                  <FaFacebook className="text-[15px]" />
                </a>
                <a
                  href="https://instagram.com/onimarket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-pink-500 hover:underline"
                >
                  <FaInstagram className="text-[16px]" />
                </a>
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-4">
                <li className="list-none">
                  <Link
                    to="help-center"
                    className="text-[13px] link transition font-[400]"
                  >
                    Hỗ trợ
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="order-tracking"
                    className="text-[13px] link transition font-[400]"
                  >
                    Theo dõi đơn hàng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-3 border-b-[1px] border-gray-200">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to="/" className="logo">
              <img
                className="w-40 h-20 object-contain rounded-lg"
                src="/logo.png"
              />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="text-[15px] link transition font-[400]"
                >
                  Đăng nhập
                </Link>{" "}
                /{" "}
                <Link
                  to="/register"
                  className="text-[15px] link transition font-[400]"
                >
                  Đăng ký
                </Link>
              </li>

              <li>
                <Tooltip title="Yêu thích">
                  <IconButton aria-label="wishlist">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart className="!text-[21px]" />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Giỏ hàng">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoCartOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />

      {/* Cart Panel */}
      <Drawer
        open={context.openCartPanel}
        anchor={"right"}
        onClose={context.toggleDrawerCartPanel(false)}
        className="cart-panel"
      >
        <div className="flex items-center justify-between gap-3 py-3 px-4 border-b">
          <h4 className="text-[16px] font-[500]">Giỏ hàng (0)</h4>

          <IoMdClose
            className="text-[20px] cursor-pointer"
            onClick={context.toggleDrawerCartPanel(false)}
          />
        </div>

        <CartPanel />
      </Drawer>
    </header>
  );
}

export default Header;
