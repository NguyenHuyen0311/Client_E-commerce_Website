import React, { useState } from "react";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import QuantityBox from "../../components/QuantityBox";
import { IoCartOutline } from "react-icons/io5";
import ProductsSlider from "../../components/ProductsSlider";

function ProductDetails() {
  const [productTypeActionIndex, setProductTypeActionIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-5 pb-0 bg-white">
      <div className="container mx-auto flex items-center gap-8">
        <div className="product-zoom-container w-[40%]">
          <ProductZoom />
        </div>

        <div className="product-content-container w-[60%]">
          <h2 className="text-[20px] font-semibold">
            FLORES Stylish Fashion Backpack For Girls and Boys
          </h2>

          <div className="flex items-center gap-3 text-gray-500 mt-2">
            <span className="text-[13px]">
              Thương hiệu:{" "}
              <span className="text-[12px] font-[600]">MCLUNE</span>
            </span>
            <span className="mt-1">
              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
            </span>
            <span className="text-[13px]">Reviews (5)</span>
          </div>

          <div className="mt-3 flex items-center gap-4">
            <span className="text-gray-400 text-[15px] line-through">
              50.000đ
            </span>
            <span className="text-[17px] text-[#ff5252] font-bold">
              40.000đ
            </span>
            <span className="text-gray-500 text-[13px] font-medium">
              Số lượng: <b className="text-green-600 text-[13px]">84</b>
            </span>
          </div>

          <p className="text-gray-500 mt-4 text-[13px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-[14px] text-gray-600">Hương vị:</span>
            <div className="flex items-center gap-2 actions">
              <Button
                className={`${
                  productTypeActionIndex === 0
                    ? "!bg-[#ff5252] !text-white"
                    : ""
                }`}
                onClick={() => setProductTypeActionIndex(0)}
              >
                Vani
              </Button>
              <Button
                className={`${
                  productTypeActionIndex === 1
                    ? "!bg-[#ff5252] !text-white"
                    : ""
                }`}
                onClick={() => setProductTypeActionIndex(1)}
              >
                Matcha
              </Button>
              <Button
                className={`${
                  productTypeActionIndex === 2
                    ? "!bg-[#ff5252] !text-white"
                    : ""
                }`}
                onClick={() => setProductTypeActionIndex(2)}
              >
                Khoai môn
              </Button>
              <Button
                className={`${
                  productTypeActionIndex === 3
                    ? "!bg-[#ff5252] !text-white"
                    : ""
                }`}
                onClick={() => setProductTypeActionIndex(3)}
              >
                Chocolate
              </Button>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-[13px]">
            Thời gian giao hàng dự kiến 2-3 ngày
          </p>

          <div className="flex items-center gap-4 mt-4">
            <QuantityBox />
            <Button className="btn-org flex items-center gap-2 !px-5">
              <IoCartOutline className="!text-[20px]" />
              <h2>Thêm vào giỏ</h2>
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-3 text-gray-500">
            <Button className=" !text-black !normal-case !bg-white hover:!text-[#ff5252] transition-all flex items-center justify-center gap-2">
              <FaRegHeart className="text-[16px]" />
              <span className="text-[13px] mt-1">Thêm vào Yêu Thích</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="container !mt-8">
        <div className="flex items-center gap-4 w-full border-b">
          <span
            className={`py-2 cursor-pointer text-[15px] link font-[500] ${
              activeTab === 0 && "text-[#ff5252] border-b border-[#ff5252]"
            }`}
            onClick={() => setActiveTab(0)}
          >
            Mô tả
          </span>
          <span
            className={`py-2 cursor-pointer text-[15px] link font-[500] ${
              activeTab === 1 && "text-[#ff5252] border-b border-[#ff5252]"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Đánh giá (0)
          </span>
        </div>

        {activeTab === 0 && (
          <>
            <div className="w-full px-6 py-8 !shadow-md !rounded-md mt-4 text-sm text-gray-600">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem, labore exercitationem. Aliquid tenetur dolores illo
                quidem, voluptates atque? Similique, iure! Eaque voluptatibus
                amet recusandae rerum. Similique itaque error maxime unde!
              </p>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="w-full px-6 py-8 !shadow-md !rounded-md mt-4">
              <div className="w-full flex flex-col product-review-wrap">
                <h2 className="text-[16px] font-[500]">
                  Nhận xét từ khách hàng
                </h2>
                <textarea
                  className="w-full h-24 border p-2 mt-3 rounded-md outline-none text-[14px] placeholder:text-[13px]"
                  placeholder="Viết đánh giá..."
                ></textarea>
                <Rating
                  name="size-small"
                  defaultValue={1}
                  size="small"
                  className="mt-3"
                />
                <Button className="btn-org w-[130px] !mt-5">
                  <h2>Gửi đánh giá</h2>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="container pt-8">
        <h2 className="text-[20px] font-[700] text-[#3b3a3a]">
          Sản phẩm liên quan
        </h2>
        <ProductsSlider item={5} />
      </div>
    </section>
  );
}

export default ProductDetails;
