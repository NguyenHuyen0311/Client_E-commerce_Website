import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function ProductZoom(props) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [swiperSmall, setSwiperSmall] = useState(null);
  const [swiperBig, setSwiperBig] = useState(null);

  const goto = (index) => {
    setSliderIndex(index);
    if (swiperSmall) swiperSmall.slideTo(index);
    if (swiperBig) swiperBig.slideTo(index);
  };

  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%] overflow-hidden">
          <Swiper
            onSwiper={setSwiperSmall}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="zoom-product-slider home-category-slider-container max-h-[400px] h-[400px] w-full overflow-hidden"
          >
            {props?.images?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className={`item rounded-md overflow-hidden cursor-pointer group ${
                      sliderIndex === index ? "opacity-100" : "opacity-40"
                    }`}
                    onClick={() => goto(index)}
                  >
                    <img className="w-full" src={item} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="zoom-wrap w-[85%] overflow-hidden">
          <Swiper
            onSwiper={setSwiperBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
            className="overflow-hidden"
          >
            {props?.images?.map((item, index) => (
              <SwiperSlide className="overflow-hidden" key={index}>
                <InnerImageZoom
                  className="rounded-lg w-full h-[400px] max-h-[400px] overflow-hidden object-cover"
                  src={item}
                  zoomType="hover"
                  zoomScale={1}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProductZoom;
