import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import iconCategory1 from "../../assets/image/icon-doanvatman.png";
import iconCategory2 from "../../assets/image/icon-doanvatngot.png";
import iconCategory3 from "../../assets/image/icon-dokhovahatdinhduong.png";
import iconCategory4 from "../../assets/image/icon-douongvatrasua.png";
import { Link } from "react-router-dom";

function HomeCategorySlider() {
  return (
    <div className="home-category-slider-container pt-4 py-8">
      <div className="container">
        <Swiper
          className="!overflow-visible"
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item-category-slider py-8 px-3 rounded-[7px] overflow-hidden bg-white p-3 text-center flex justify-center items-center flex-col group">
                <img
                  src={iconCategory1}
                  alt="Icon Category 1"
                  className="object-contain h-[100px] rounded-[50%] group-hover:scale-[1.1] transition-all duration-300"
                />
                <h3 className="text-[16px] font-[400] mt-3">Đồ ăn vặt mặn</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item-category-slider py-8 px-3 rounded-[7px] overflow-hidden bg-white p-3 text-center flex justify-center items-center flex-col group">
                <img
                  src={iconCategory2}
                  alt="Icon Category 2"
                  className="object-contain h-[100px] rounded-[50%] group-hover:scale-[1.1] transition-all duration-300"
                />
                <h3 className="text-[16px] font-[400] mt-3">Đồ ăn vặt ngọt</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item-category-slider py-8 px-3 rounded-[7px] overflow-hidden bg-white p-3 text-center flex justify-center items-center flex-col group">
                <img
                  src={iconCategory3}
                  alt="Icon Category 3"
                  className="object-contain h-[100px] rounded-[50%] group-hover:scale-[1.1] transition-all duration-300"
                />
                <h3 className="text-[16px] font-[400] mt-3">
                  Đồ khô & hạt dinh dưỡng
                </h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item-category-slider py-8 px-3 rounded-[7px] overflow-hidden bg-white p-3 text-center flex justify-center items-center flex-col group">
                <img
                  src={iconCategory4}
                  alt="Icon Category 4"
                  className="object-contain h-[100px] rounded-[50%] group-hover:scale-[1.1] transition-all duration-300"
                />
                <h3 className="text-[16px] font-[400] mt-3">
                  Đồ uống & trà sữa
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCategorySlider;
