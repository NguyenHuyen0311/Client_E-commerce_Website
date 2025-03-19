import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../assets/image/banner-cacloaihat.jpg";
import banner2 from "../../assets/image/banner-trasua.jpg";
import banner3 from "../../assets/image/banner-vngrocery.jpg";

function HomeSlider() {
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
          <SwiperSlide>
            <div className="item-slider rounded-[17px] overflow-hidden">
              <img
                src={banner1}
                alt="Banner 1"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-slider rounded-[17px] overflow-hidden">
              <img
                src={banner2}
                alt="Banner 2"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-slider rounded-[17px] overflow-hidden">
              <img
                src={banner3}
                alt="Banner 3"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeSlider;
