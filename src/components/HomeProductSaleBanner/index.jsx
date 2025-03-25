import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

import banhbonglandaunanh1 from "../../assets/image/banhbonglandaunanh.png";
import horshsuachua1 from "../../assets/image/horshsuachua1.png";
import { Button } from "@mui/material";

function HomeProductSaleBanner() {
  return (
    <div className="banner-product-sale">
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="home-slider-container"
      >
        <SwiperSlide>
          <div className="w-full px-6 h-[450px] bg-[#f9facd] rounded-md overflow-hidden flex items-center">
            <div className="flex justify-center items-center w-1/2">
              <img
                src={banhbonglandaunanh1}
                className="w-[350px] h-[300px] object-cover rounded-md"
              />
            </div>

            <div className="info flex flex-col h-[300px] justify-center p-6 w-1/2 translate-x-full opacity-0 transition-all duration-700">
              <h4 className="text-[20px] font-[400] mb-5">Giảm Giá Cực Lớn</h4>
              <h2 className="text-[27px] font-bold line-clamp-2">Bánh Bông Lan Đậu Nành</h2>
              <h3 className="flex items-center gap-3 text-[20px] font-[400] mb-3 mt-3">
                Chỉ Với{" "}
                <span className="mt-[-1px] text-[#ff5252] text-[30px] font-bold">
                  20.000đ
                </span>
              </h3>
              <div>
                <Button className="btn-org text-center !px-4 !py-2">
                  MUA NGAY
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full px-6 h-[450px] bg-[#cdfafa] rounded-md overflow-hidden flex items-center">
            <div className="flex justify-center items-center w-1/2">
              <img
                src={horshsuachua1}
                className="w-[350px] h-[300px] object-cover rounded-md"
              />
            </div>

            <div className="info flex flex-col h-[300px] justify-center p-6 w-1/2 translate-x-full opacity-0 transition-all duration-700">
              <h4 className="text-[20px] font-[400] mb-5">Giảm Giá Cực Lớn</h4>
              <h2 className="text-[27px] font-bold line-clamp-2">HORSH SỮA CHUA (Mini-Pocket Lactic Acid Bacteria Bread)</h2>
              <h3 className="flex items-center gap-3 text-[20px] font-[400] mb-3 mt-3">
                Chỉ Với{" "}
                <span className="mt-[-1px] text-[#ff5252] text-[30px] font-bold">
                  45.000đ
                </span>
              </h3>
              <div>
                <Button className="btn-org text-center !px-4 !py-2">
                  MUA NGAY
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeProductSaleBanner;
