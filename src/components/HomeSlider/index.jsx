import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HomeSlider(props) {
  return (
    <div className="home-slider-container py-4">
      <div className="container">
        <Swiper
          className="slider-home"
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {props?.data?.length !== 0 &&
            props?.data?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="item-slider rounded-[17px] overflow-hidden">
                    <img
                      src={item?.images[0]}
                      alt="Banner"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
