import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

function ProductsSlider(props) {
  return (
    <div className="products-slider home-slider-container py-3">
      <Swiper
        slidesPerView={props.item}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductsSlider;
