import React, { useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import banhmochikemsualanh from "../../assets/image/banhmochikemsualanh.png";
import banhmochikemsualanh2 from "../../assets/image/banhmochikemsualanh2.png";
import banhmochikemsualanh3 from "../../assets/image/banhmochikemsualanh3.png";
import banhmochikemsualanh4 from "../../assets/image/banhmochikemsualanh4.png";
import banhmochikemsualanh5 from "../../assets/image/banhmochikemsualanh5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function ProductZoom() {
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
        <div className="slider w-[15%]">
          <Swiper
            onSwiper={setSwiperSmall}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="zoom-product-slider home-category-slider-container max-h-[400px] overflow-hidden"
          >
            {[banhmochikemsualanh, banhmochikemsualanh2, banhmochikemsualanh3, banhmochikemsualanh4, banhmochikemsualanh5].map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`item rounded-md overflow-hidden cursor-pointer group ${sliderIndex === index ? "opacity-100" : "opacity-40"}`}
                  onClick={() => goto(index)}
                >
                  <img className="w-full" src={img} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="zoom-wrap w-[85%]">
          <Swiper
            onSwiper={setSwiperBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            {[banhmochikemsualanh, banhmochikemsualanh2, banhmochikemsualanh3, banhmochikemsualanh4, banhmochikemsualanh5].map((img, index) => (
              <SwiperSlide key={index}>
                <InnerImageZoom
                  className="rounded-lg w-full max-h-[400px] overflow-hidden object-cover"
                  src={img}
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
