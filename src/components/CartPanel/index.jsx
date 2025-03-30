import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { myContext } from "../../App";

function CartPanel() {
  const context = useContext(myContext);

  return (
    <div>
      <div className="scroll py-3 px-3 w-full max-h-[65vh] overflow-y-scroll overflow-x-hidden">
        <div className="cart-item pr-6 w-full gap-4 flex items-center border-b mt-3 pb-3">
          <div className="img w-[25%] overflow-hidden object-cover h-[90px] rounded-md">
            <Link
              to="/product/333"
              className="block group overflow-hidden rounded-md"
            >
              <img
                className="w-full h-full group-hover:scale-105"
                src="http://localhost:5173/src/assets/image/banhbonglandaunanh.png"
              />
            </Link>
          </div>

          <div className="info w-[75%] relative">
            <h4 className="text-[13px] font-[500] w-[220px] line-clamp-1">
              <Link to="/product/333" className="link transition-all">
                FLORES Stylish Fashion Backpack For Girls and Boys
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-3">
              <span className="text-[13px] font-[400]">
                Số lượng: <span>2</span>
              </span>
              <span className="text-[#ff5252] text-[13px] font-bold">
                Giá: <span>60.000đ</span>
              </span>
            </p>
            <MdOutlineDelete className="absolute text-[20px] link transition-all cursor-pointer -right-[20px] top-[0]" />
          </div>
        </div>
      </div>

      <div className="bottom-section absolute bottom-[10px] w-full">
        <div className="info-cart-total py-3 px-4 flex items-center flex-col justify-between w-full">
          <div className="flex flex-col gap-2 border-b px-3 pt-3 border-t w-full pb-3">
            <div className="flex items-center justify-between w-full">
              <span className="text-[13px] font-[600]">18 sản phẩm</span>
              <span className="text-[#ff5252] text-[13px] font-bold">
                500.000đ
              </span>
            </div>

            <div className="flex items-center justify-between w-full">
              <span className="text-[13px] font-[600]">Phí vận chuyển</span>
              <span className="text-[#ff5252] text-[13px] font-bold">
                20.000đ
              </span>
            </div>
          </div>

          <div className="flex items-center mt-3 justify-between w-full px-3">
            <span className="text-[13px] font-[600]">Tổng tiền</span>
            <span className="text-[#ff5252] text-[13px] font-bold">
              520.000đ
            </span>
          </div>

          <div className="flex items-center mt-5 gap-5 w-full justify-between">
            <Link to="/cart" className="w-[50%]" onClick={context.toggleDrawerCartPanel(false)}>
              <Button className="btn-org w-full">Xem giỏ hàng</Button>
            </Link>
            <Link to="/checkout" className="w-[50%]" onClick={context.toggleDrawerCartPanel(false)}>
            <Button className="btn-border w-full">Thanh toán</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPanel;
