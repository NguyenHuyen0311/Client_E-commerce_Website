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
        {
          props?.data?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductItem item={item} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}

export default ProductsSlider;
