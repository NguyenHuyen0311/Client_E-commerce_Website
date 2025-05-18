import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

function HomeCategorySlider(props) {
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
          {props?.data?.map((cat, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to="/">
                  <div className="item-category-slider py-8 px-3 rounded-[7px] overflow-hidden bg-white p-3 text-center flex justify-center items-center flex-col group">
                    <img
                      src={cat?.images[0]}
                      alt={cat?.name}
                      className="object-cover w-[100px] h-[100px] rounded-[50%] group-hover:scale-[1.1] transition-all duration-300"
                    />
                    <h3 className="text-[16px] font-[400] mt-3">
                      {cat?.name}
                    </h3>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeCategorySlider;
