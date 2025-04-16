import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { myContext } from "../../App";
import { deleteData } from "../../utils/api";

function CartPanel(props) {
  const context = useContext(myContext);

  const removeItem = (id) => {
    deleteData(`/api/cart/delete-cart-item/${id}`).then((res) => {
      context?.openAlertBox("success", res?.message);
      context?.getCartItems();
    });
  };

  return (
    <div>
      <div className="scroll py-3 px-3 w-full max-h-[65vh] overflow-y-scroll overflow-x-hidden">
        {props?.data?.map((item, index) => {
          return (
            <div
              key={index}
              className="cart-item pr-6 w-full gap-4 flex items-center border-b mt-3 pb-3"
            >
              <div className="img w-[25%] flex items-center justify-center overflow-hidden object-cover h-[90px] rounded-md">
                <Link
                  to={`/product-details/${item?.productId}`}
                  className="block group overflow-hidden rounded-md"
                >
                  <img
                    className="w-[70px] h-[70px] object-cover group-hover:scale-105"
                    src={item?.image}
                  />
                </Link>
              </div>

              <div className="info w-[75%] relative">
                <h4 className="text-[13px] font-[500] w-[220px] truncate overflow-hidden whitespace-nowrap">
                  <Link
                    to={`/product-details/${item?.productId}`}
                    className="link transition-all"
                  >
                    {item?.productTitle}
                  </Link>
                </h4>
                <p className="flex items-center gap-5 mt-3">
                  <span className="text-[13px] font-[400]">
                    Số lượng: <span>{item?.quantity}</span>
                  </span>
                  <span className="text-[#ff5252] text-[13px] font-bold">
                    Giá:{" "}
                    <span>
                      {item?.price.toLocaleString("vi-VN")}đ
                    </span>
                  </span>
                </p>
                <MdOutlineDelete
                  onClick={() => removeItem(item?._id)}
                  className="absolute text-[20px] link transition-all cursor-pointer -right-[20px] top-[0]"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bottom-section absolute bottom-[10px] w-full">
        <div className="info-cart-total py-3 px-4 flex items-center flex-col justify-between w-full">
          <div className="flex flex-col gap-2 border-b px-3 pt-3 border-t w-full pb-3">
            <div className="flex items-center justify-between w-full">
              <span className="text-[13px] font-[600]">
                {context?.cartData?.length} sản phẩm
              </span>
              <span className="text-[#ff5252] text-[13px] font-bold">
                {(context?.cartData?.length !== 0
                  ? context?.cartData
                      ?.map((item) => parseInt(item.price) * item.quantity)
                      .reduce((total, value) => total + value, 0)
                  : 0
                )?.toLocaleString("vi-VN")}đ
              </span>
            </div>

            {/* <div className="flex items-center justify-between w-full">
              <span className="text-[13px] font-[600]">Phí vận chuyển</span>
              <span className="text-[#ff5252] text-[13px] font-bold">
                20.000đ
              </span>
            </div> */}
          </div>

          <div className="flex items-center mt-3 justify-between w-full px-3">
            <span className="text-[13px] font-[600]">Tổng tiền</span>
            <span className="text-[#ff5252] text-[13px] font-bold">
            {(context?.cartData?.length !== 0
                  ? context?.cartData
                      ?.map((item) => parseInt(item.price) * item.quantity)
                      .reduce((total, value) => total + value, 0)
                  : 0
                )?.toLocaleString("vi-VN")}đ
            </span>
          </div>

          <div className="flex items-center mt-5 gap-5 w-full justify-between">
            <Link
              to="/cart"
              className="w-[50%]"
              onClick={context.toggleDrawerCartPanel(false)}
            >
              <Button className="btn-org w-full">Xem giỏ hàng</Button>
            </Link>
            <Link
              to="/checkout"
              className="w-[50%]"
              onClick={context.toggleDrawerCartPanel(false)}
            >
              <Button className="btn-border w-full">Thanh toán</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPanel;
