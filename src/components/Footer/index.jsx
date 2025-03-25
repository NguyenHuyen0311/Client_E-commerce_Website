import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-6 bg-white">
      <hr />
      <div className="container">
        <div className="flex items-center justify-center gap-2 py-8">
          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
            <h3 className="text-[17px] font-[500] mt-3">Miễn phí vận chuyển</h3>
            <p className="text-[14px] text-[#474747] font-[500] mt-3 text-center">
              Cho đơn hàng trên 100.000đ
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <PiKeyReturn className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
            <h3 className="text-[17px] font-[500] mt-3">
              Đổi trả trong 30 ngày
            </h3>
            <p className="text-[14px] text-[#474747] font-[500] mt-3 text-center">
              Hỗ trợ đổi trả sản phẩm
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <BsWallet2 className="text-[35px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
            <h3 className="text-[17px] font-[500] mt-3">Thanh toán an toàn</h3>
            <p className="text-[14px] text-[#474747] font-[500] mt-3 text-center">
              Chấp nhận thẻ thanh toán
            </p>
          </div>

          <div className="col flex items-center justify-center flex-col group w-[20%]">
            <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1" />
            <h3 className="text-[17px] font-[500] mt-3">Hỗ trợ 24/7</h3>
            <p className="text-[14px] text-[#474747] font-[500] mt-3 text-center">
              Liên hệ bất cứ lúc nào
            </p>
          </div>
        </div>

        <hr />

        <div className="footer flex !justify-between gap-5 pl-10 py-7 mx-auto">
          <div className="part-1 w-[30%] flex flex-col gap-5 text-left border-r-[1px] border-gray-200 pr-5">
            <Link to="/" className="logo-footer">
              <img
                className="w-40 object-contain rounded-lg"
                src="/logo.png"
                alt="Onimarket"
              />
            </Link>
            <p className="text-[#3e3e3e] text-[14px]">
              Thưởng thức những món ăn vặt thơm ngon tại Onimarket, nơi mang đến
              hương vị tuyệt vời cho mọi khoảnh khắc của bạn!
            </p>
          </div>

          <div className="part-2 w-[22%] flex flex-col gap-3 text-left border-r-[1px] border-gray-200 pr-5">
            <h2 className="font-semibold text-lg">Về chúng tôi</h2>
            <ul className="list-none space-y-3">
              <li className="text-[#3e3e3e] text-[15px]" >
                <Link to="/" className="hover:text-[#ff5252]">
                  Giới thiệu
                </Link>
              </li>
              <li className="text-[#3e3e3e] text-[15px]">
                <Link to="/" className="hover:text-[#ff5252]">
                  Cửa hàng
                </Link>
              </li>
              <li className="text-[#3e3e3e] text-[15px]">
                <Link to="/" className="hover:text-[#ff5252]">
                  Bài viết
                </Link>
              </li>
              <li className="text-[#3e3e3e] text-[15px]">
                <Link to="/" className="hover:text-[#ff5252]">
                  Liên hệ
                </Link>
              </li>
              <li className="text-[#3e3e3e] text-[15px]">
                <Link to="/" className="hover:text-[#ff5252]">
                  Chính sách & bảo mật
                </Link>
              </li>
            </ul>
          </div>

          <div className="part-3 w-[22%] flex flex-col gap-3 text-left border-r-[1px] border-gray-200 pr-5">
            <h2 className="font-semibold text-lg">Danh mục sản phẩm</h2>
            <ul className="list-none space-y-3">
              <li className="text-[#3e3e3e] text-[15px]">
                <Link to="/" className="hover:text-[#ff5252]">
                  Món ăn vặt
                </Link>
              </li>
              <li className="text-[#3e3e3e] text-[15px]">
                <Link to="/" className="hover:text-[#ff5252]">
                  Đồ uống
                </Link>
              </li>
              <li className="text-[#3e3e3e] text-[15px]">
                <Link to="/" className="hover:text-[#ff5252]">
                  Bánh kẹo
                </Link>
              </li>
              <li className="text-[#3e3e3e] text-[15px]">
                <Link to="/" className="hover:text-[#ff5252]">
                  Hóa phẩm
                </Link>
              </li>
            </ul>
          </div>

          <div className="part-4 w-[26%] flex flex-col gap-3 text-left">
            <h2 className="font-semibold text-lg">Liên hệ với chúng tôi</h2>
            <Link to="mailto:onimarket@gmail.com" className="hover:text-[#ff5252] text-[#3e3e3e] text-[15px]">
              onimarket@gmail.com
            </Link>
            <span className="text-[#ff5252] text-[15px]">(+84) 966 556 026</span>
            <div className="list-social flex gap-3 mt-2">
              <a
                href="https://fb.com/onimarket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600">
                <FaFacebook className="text-[25px]" />
              </a>
              <a
                href="https://instagram.com/onimarket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500">
                <FaInstagram className="text-[26px]" />
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="bottom-strip">
            <div className="container flex items-center justify-between">
                <span className="py-4 text-[13px] text-[#3e3e3e] text-center w-full">© 2025 - Ecommerce Website</span>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
