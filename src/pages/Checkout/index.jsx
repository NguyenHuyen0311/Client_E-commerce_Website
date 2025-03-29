import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaRegCreditCard } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";

function Checkout() {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="bill-details w-[70%]">
          <div className="card bg-white rounded-md shadow-md p-5 w-full">
            <h1 className="text-[18px] text-center font-[600] mb-5">
              Thông tin thanh toán
            </h1>
            <form className="w-full">
              <div className="flex items-center gap-5 pb-4">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    size="small"
                    type="text"
                    label="Họ và Tên"
                    variant="outlined"
                    required
                    InputLabelProps={{
                      style: { fontSize: "14px" },
                    }}
                  />
                </div>

                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    type="email"
                    size="small"
                    label="Email"
                    variant="outlined"
                    required
                    InputLabelProps={{
                      style: { fontSize: "14px" },
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 pb-4">
                <TextField
                  className="w-full pb-4"
                  size="small"
                  label="Địa chỉ nhận hàng"
                  variant="outlined"
                  required
                  InputLabelProps={{
                    style: { fontSize: "14px" },
                  }}
                />
              </div>
              <div className="flex items-center gap-5 pb-4">
                <TextField
                  className="w-full pb-4"
                  type="tel"
                  size="small"
                  label="Số điện thoại"
                  variant="outlined"
                  required
                  InputLabelProps={{
                    style: { fontSize: "14px" },
                  }}
                />
              </div>

              <div className="flex items-center gap-5 pb-4">
                <TextField
                  className="w-full pb-4"
                  multiline
                  rows={3}
                  size="small"
                  label="Ghi chú đơn hàng (không bắt buộc)"
                  variant="outlined"
                  InputLabelProps={{
                    style: { fontSize: "14px" },
                  }}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="order-info w-[30%]">
          <div className="card bg-white rounded-md shadow-md py-5 px-4 w-full">
            <h1 className="text-[18px] border-b pb-5 text-center font-[600]">
              Tóm tắt đơn hàng
            </h1>

            <div className="flex items-center justify-between border-b py-2">
              <span className="text-[14px] font-[500]">Sản phẩm</span>
              <span className="text-[14px] font-[500]">Thành tiền</span>
            </div>

            <div className="scroll max-h-[300px] overflow-x-hidden overflow-y-scroll mb-5">
                <div className="flex items-center justify-between pt-3 pb-1.5">
                <div className="part1 flex items-center gap-3 w-[80%] pr-4">
                    <div className="w-[40%]">
                    <div className="cursor-pointer img w-[60px] h-[60px] object-cover overflow-hidden rounded-md bg-center">
                        <img src="https://serviceapi.spicezgold.com/download/1742447215241_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-0-202312201359.webp" />
                    </div>
                    </div>

                    <div className="info">
                    <h4 className="line-clamp-1 text-[13px] font-[600]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Eveniet enim, praesentium veritatis, perspiciatis aliquam
                        dicta repudiandae nostrum neque omnis dolorem ut? Blanditiis
                        repudiandae, ut rem aut odio mollitia voluptatem quas?
                    </h4>
                    <p className="font-[400] mt-2 text-[12px]">Số lượng: 1</p>
                    </div>
                </div>

                <span className="part2 w-[20%] font-[500] mt-2 text-[13px]">
                    100.000đ
                </span>
                </div>

                <div className="flex items-center justify-between pt-3 pb-1.5">
                <div className="part1 flex items-center gap-3 w-[80%] pr-4">
                    <div className="w-[40%]">
                    <div className="cursor-pointer img w-[60px] h-[60px] object-cover overflow-hidden rounded-md bg-center">
                        <img src="https://serviceapi.spicezgold.com/download/1742447215241_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-0-202312201359.webp" />
                    </div>
                    </div>

                    <div className="info">
                    <h4 className="line-clamp-1 text-[13px] font-[600]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Eveniet enim, praesentium veritatis, perspiciatis aliquam
                        dicta repudiandae nostrum neque omnis dolorem ut? Blanditiis
                        repudiandae, ut rem aut odio mollitia voluptatem quas?
                    </h4>
                    <p className="font-[400] mt-2 text-[12px]">Số lượng: 1</p>
                    </div>
                </div>

                <span className="part2 w-[20%] font-[500] mt-2 text-[13px]">
                    100.000đ
                </span>
                </div>

                <div className="flex items-center justify-between pt-3 pb-1.5">
                <div className="part1 flex items-center gap-3 w-[80%] pr-4">
                    <div className="w-[40%]">
                    <div className="cursor-pointer img w-[60px] h-[60px] object-cover overflow-hidden rounded-md bg-center">
                        <img src="https://serviceapi.spicezgold.com/download/1742447215241_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-0-202312201359.webp" />
                    </div>
                    </div>

                    <div className="info">
                    <h4 className="line-clamp-1 text-[13px] font-[600]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Eveniet enim, praesentium veritatis, perspiciatis aliquam
                        dicta repudiandae nostrum neque omnis dolorem ut? Blanditiis
                        repudiandae, ut rem aut odio mollitia voluptatem quas?
                    </h4>
                    <p className="font-[400] mt-2 text-[12px]">Số lượng: 1</p>
                    </div>
                </div>

                <span className="part2 w-[20%] font-[500] mt-2 text-[13px]">
                    100.000đ
                </span>
                </div>

                <div className="flex items-center justify-between pt-3 pb-1.5">
                <div className="part1 flex items-center gap-3 w-[80%] pr-4">
                    <div className="w-[40%]">
                    <div className="cursor-pointer img w-[60px] h-[60px] object-cover overflow-hidden rounded-md bg-center">
                        <img src="https://serviceapi.spicezgold.com/download/1742447215241_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-0-202312201359.webp" />
                    </div>
                    </div>

                    <div className="info">
                    <h4 className="line-clamp-1 text-[13px] font-[600]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Eveniet enim, praesentium veritatis, perspiciatis aliquam
                        dicta repudiandae nostrum neque omnis dolorem ut? Blanditiis
                        repudiandae, ut rem aut odio mollitia voluptatem quas?
                    </h4>
                    <p className="font-[400] mt-2 text-[12px]">Số lượng: 1</p>
                    </div>
                </div>

                <span className="part2 w-[20%] font-[500] mt-2 text-[13px]">
                    100.000đ
                </span>
                </div>

                <div className="flex items-center justify-between pt-3 pb-1.5">
                <div className="part1 flex items-center gap-3 w-[80%] pr-4">
                    <div className="w-[40%]">
                    <div className="cursor-pointer img w-[60px] h-[60px] object-cover overflow-hidden rounded-md bg-center">
                        <img src="https://serviceapi.spicezgold.com/download/1742447215241_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-0-202312201359.webp" />
                    </div>
                    </div>

                    <div className="info">
                    <h4 className="line-clamp-1 text-[13px] font-[600]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Eveniet enim, praesentium veritatis, perspiciatis aliquam
                        dicta repudiandae nostrum neque omnis dolorem ut? Blanditiis
                        repudiandae, ut rem aut odio mollitia voluptatem quas?
                    </h4>
                    <p className="font-[400] mt-2 text-[12px]">Số lượng: 1</p>
                    </div>
                </div>

                <span className="part2 w-[20%] font-[500] mt-2 text-[13px]">
                    100.000đ
                </span>
                </div>

                <div className="flex items-center justify-between pt-3 pb-1.5">
                <div className="part1 flex items-center gap-3 w-[80%] pr-4">
                    <div className="w-[40%]">
                    <div className="cursor-pointer img w-[60px] h-[60px] object-cover overflow-hidden rounded-md bg-center">
                        <img src="https://serviceapi.spicezgold.com/download/1742447215241_blubags-waterproof-school-backpack-36-l-laptop-bag-college-backpack-school-bag-product-images-rvxyzquw2b-0-202312201359.webp" />
                    </div>
                    </div>

                    <div className="info">
                    <h4 className="line-clamp-1 text-[13px] font-[600]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Eveniet enim, praesentium veritatis, perspiciatis aliquam
                        dicta repudiandae nostrum neque omnis dolorem ut? Blanditiis
                        repudiandae, ut rem aut odio mollitia voluptatem quas?
                    </h4>
                    <p className="font-[400] mt-2 text-[12px]">Số lượng: 1</p>
                    </div>
                </div>

                <span className="part2 w-[20%] font-[500] mt-2 text-[13px]">
                    100.000đ
                </span>
                </div>
            </div>

            <Button className="btn-org w-full flex items-center gap-2 !mb-3">
              <FaRegCreditCard className="text-[18px]" />
              Thanh toán bằng thẻ
            </Button>

            <Button className="btn-org w-full flex items-center gap-2">
              <BsCashCoin className="text-[18px]" />
              Thanh toán khi nhận hàng
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
