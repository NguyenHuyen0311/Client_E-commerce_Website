import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FaRegCreditCard } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";
import { myContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import { Radio } from "@mui/material";
import { deleteData, fetchDataFromApi, postData } from "../../utils/api";

function Checkout() {
  const [isChecked, setIsChecked] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState("");

  const context = useContext(myContext);
  const history = useNavigate();

  useEffect(() => {
    context?.getAddressLists();
  }, []);

  // useEffect(() => {
  //   setSelectedAddress(context?.userData?.address_details[0]?._id);

  //   fetchDataFromApi(`/api/order/order-list`).then((res) => {
  //     console.log(res);
  //   });
  // }, [context?.userData]);

  useEffect(() => {
    setTotalAmount(
      context?.cartData?.length !== 0
        ? context?.cartData
            ?.map((item) => parseInt(item?.price) * item.quantity)
            .reduce((total, value) => total + value, 0)
        : 0
    )?.toLocaleString("en-US");
  }, [context?.cartData]);

  const handleChange = (e, index) => {
    if (e.target.checked) {
      setIsChecked(index);
      setSelectedAddress(e.target.value);
    }
  };
  
  const checkout = (e) => {
    e.preventDefault();
  };

  const cashOnDelivery = () => {
    const user = context?.userData;

    if (!selectedAddress) {
      return context.openAlertBox("error", "Vui lòng chọn địa chỉ giao hàng!");
    }
    
    const payLoad = {
      userId: user?._id,
      products: context?.cartData,
      paymentId: "",
      payment_status: "Thanh toán khi nhận hàng",
      delivery_address: selectedAddress,
      totalAmount: totalAmount,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    postData(`/api/order/create`, payLoad).then((res) => {
      context.openAlertBox("success", res?.message);
      if (res?.error === false) {
        deleteData(`/api/cart/empty-cart/${user?._id}`).then((res) => {
          context?.getCartItems();
        });
        history("/my-orders");
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
  };

  return (
    <section className="py-10">
      <form onSubmit={checkout}>
        <div className="container flex gap-5">
          <div className="bill-details w-[70%]">
            <div className="card bg-white rounded-md shadow-md p-5 w-full">
              <div className="flex items-center justify-between mb-5">
                {context?.userData?.address_details?.length !== 0 && (
                  <>
                    <h1 className="text-[18px] text-center font-[600]">
                      Chọn địa chỉ giao hàng
                    </h1>
                    <Link to="/my-address">
                      <Button variant="outlined">Thêm địa chỉ mới</Button>
                    </Link>
                  </>
                )}
              </div>

              <div className="max-h-[450px] flex flex-col gap-3 px-3 overflow-y-scroll">
                {context?.userData?.address_details?.length !== 0 ? (
                  context?.addressList?.map((address, index) => {
                    return (
                      <label
                        key={index}
                        class={`${
                          isChecked === index && "!bg-[#f3f9ff]"
                        } flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-gray-50`}
                      >
                        <Radio
                          checked={isChecked === index}
                          onChange={(e) => handleChange(e, index)}
                          size="small"
                          value={address?._id}
                        />
                        <div className="info">
                          <span class="text-[12px] bg-gray-200 text-gray-700 px-2 py-1 rounded">
                            {address?.position}
                          </span>
                          <div class="font-semibold mt-1 text-[15px]">
                            {address?.name} - {address?.mobile}
                          </div>
                          <div class="text-sm text-gray-600">
                            {address?.address_details}
                          </div>
                        </div>
                      </label>
                    );
                  })
                ) : (
                  <>
                    <div className="flex items-center justify-center flex-col">
                      <img
                        className="w-[100px] h-[100px]"
                        src="/relocation.png"
                      />
                      <h2 className="text-center text-[15px] font-[500] mb-5">
                        Bạn chưa có địa chỉ giao hàng!
                      </h2>
                      <Link to="/my-address">
                        <Button className="btn-org !px-5">
                          Thêm địa chỉ mới
                        </Button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="order-info w-[30%]">
            <div className="card bg-white rounded-md shadow-md py-5 px-4 w-full">
              <h1 className="text-[18px] border-b pb-5 text-center font-[600]">
                Tóm tắt đơn hàng
                <h3 className="text-[14px] font-[500]">
                  Tổng tiền:{" "}
                  {(context?.cartData?.length !== 0
                    ? context?.cartData
                        ?.map((item) => parseInt(item.price) * item.quantity)
                        .reduce((total, value) => total + value, 0)
                    : 0
                  )?.toLocaleString("vi-VN")}
                  đ
                </h3>
              </h1>

              <div className="flex items-center justify-between border-b py-2">
                <span className="text-[14px] font-[500]">Sản phẩm</span>
                <span className="text-[14px] font-[500]">Thành tiền</span>
              </div>

              <div className="scroll max-h-[300px] overflow-x-hidden overflow-y-scroll mb-5 pr-3">
                {context?.cartData?.length !== 0 &&
                  context?.cartData?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between pt-3 pb-1.5"
                      >
                        <div className="part1 flex items-center w-[80%] gap-3 pr-4">
                          <div className="w-[30%]">
                            <div className="cursor-pointer img w-[60px] h-[60px] object-cover overflow-hidden rounded-md bg-center">
                              <img src={item?.image} />
                            </div>
                          </div>

                          <div className="info w-[70%]">
                            <h4
                              title={item?.productTitle}
                              className="line-clamp-1 whitespace-nowrap, overflow-hidden, text-ellipsis text-[13px] font-[600]"
                            >
                              {item?.productTitle?.substr(0, 20) + "..."}
                            </h4>
                            <p className="font-[400] mt-2 text-[12px]">
                              Số lượng: {item?.quantity}
                            </p>
                          </div>
                        </div>

                        <span className="part2 w-[20%] font-[500] mt-2 text-[13px]">
                          {(item?.quantity * item.price)?.toLocaleString(
                            "vi-VN"
                          )}
                          đ
                        </span>
                      </div>
                    );
                  })}
              </div>

              <Button
                type="submit"
                className="btn-org w-full flex items-center gap-2 !mb-3"
              >
                <FaRegCreditCard className="text-[18px]" />
                Thanh toán bằng thẻ
              </Button>

              <Button
                onClick={cashOnDelivery}
                type="submit"
                className="btn-org w-full flex items-center gap-2"
              >
                <BsCashCoin className="text-[18px]" />
                Thanh toán khi nhận hàng
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Checkout;
