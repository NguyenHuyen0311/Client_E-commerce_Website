import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { IoBagCheck } from "react-icons/io5";
import CartItem from "./cartItem";
import { myContext } from "../../App";
import { fetchDataFromApi } from "../../utils/api";
import { Link } from "react-router-dom";

function Cart() {
  const context = useContext(myContext);

  const [productFlavorData, setProductFlavorData] = useState([]);
  const [productWeightData, setProductWeightData] = useState([]);

  useEffect(() => {
    window.scrollTo(0,0);

    fetchDataFromApi(`/api/product/productFlavor/get`).then((res) => {
      if (res?.error === false) {
        setProductFlavorData(res?.data);
      }
    });

    fetchDataFromApi(`/api/product/productWeight/get`).then((res) => {
      if (res?.error === false) {
        setProductWeightData(res?.data);
      }
    });
  }, []);

  return (
    <section className="section py-8">
      <div className="container flex max-w-[80%] w-[80%] gap-4">
        <div className="view-cart-product w-[70%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="view-cart-title w-full px-3 py-5 border-b">
              <h2 className="text-[15px] font-[600]">Giỏ hàng</h2>
              <p className="text-[13px] font-[400] mt-1">
                Hiện đang có{" "}
                <span className="text-[#ff5252] font-bold">
                  {context?.cartData?.length}
                </span>{" "}
                sản phẩm trong giỏ hàng của bạn
              </p>
            </div>

            {context?.cartData?.length !== 0 ?
              context?.cartData?.map((item, index) => {
                return (
                  <CartItem
                    flavor={item?.flavor}
                    weight={item?.weight}
                    productFlavorData={productFlavorData}
                    productWeightData={productWeightData}
                    quantity={item?.quantity}
                    item={item}
                    key={index}
                  />
                );
              })
              : 
              (
                <>
            <div className="flex items-center justify-center pt-8 pb-12 flex-col">
              <img src="/empty-cart.png" className="w-[120px]" />
              <h4 className="font-[500] text-[16px] mb-3">Giỏ hàng của bạn hiện đang trống</h4>
              <Link to="/product-list">
                <Button className="btn-org">Tiếp tục mua sắm</Button>
              </Link>
            </div>
          </>
              )
            }
          </div>
        </div>

        <div className="view-cart-total-price w-[30%]">
          <div className="sticky top-[150px] shadow-md rounded-md py-5 px-4 bg-white">
            <h3 className="border-b pb-3 text-[15px] font-[600]">
              Thông tin đơn hàng
            </h3>

            <p className="mt-3 flex items-center justify-between">
              <span className="text-[13px] font-[400]">Tạm tính:</span>
              <span className="text-[13px] text-[#ff5252] font-[600]">
              {(context?.cartData?.length !== 0
                  ? context?.cartData
                      ?.map((item) => parseInt(item.price) * item.quantity)
                      .reduce((total, value) => total + value, 0)
                  : 0
                )?.toLocaleString("vi-VN")}đ
              </span>
            </p>

            <p className="mt-2 flex items-center justify-between">
              <span className="text-[13px] font-[400]">Phí vận chuyển:</span>
              <span className="text-[13px] text-[#000] font-[600]">Free</span>
            </p>

            <p className="mt-2 flex items-center justify-between">
              <span className="text-[13px] font-[400]">Ước tính cho:</span>
              <span className="text-[13px] text-[#000] font-[600]">Hà Nội</span>
            </p>

            <p className="mt-3 mb-5 pt-3 flex items-center justify-between border-t">
              <span className="text-[13px] font-[400]">Tổng tiền:</span>
              <span className="text-[13px] text-[#ff5252] font-[700]">
              {(context?.cartData?.length !== 0
                  ? context?.cartData
                      ?.map((item) => parseInt(item.price) * item.quantity)
                      .reduce((total, value) => total + value, 0)
                  : 0
                )?.toLocaleString("vi-VN")}đ
              </span>
            </p>

            <Button className="btn-org w-full flex items-center gap-2">
              <IoBagCheck className="text-[18px]" />
              Thanh toán
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
