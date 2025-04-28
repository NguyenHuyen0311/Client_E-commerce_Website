import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

import { Button } from "@mui/material";
import { fetchDataFromApi } from "../../utils/api";

function HomeProductSaleBanner(props) {
  const [allProductsData, setAllProductsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataFromApi("/api/product/getAllProducts").then((res) => {
      setAllProductsData(res?.products);
    });
  }, []);

  const slideBackgrounds = ["#f9facd", "#cdfafa"];

  return (
    <>
      <div className="w-full flex gap-5">
        <div className="part-1 w-[70%]">
          <div className="banner-product-sale">
            {allProductsData.length > 0 && (
              <Swiper
                key={allProductsData.length}
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
                {allProductsData
                  ?.filter((item) => item.discount > 0)
                  ?.sort((a, b) => b.discount - a.discount)
                  ?.slice(0, 2)
                  ?.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div
                          style={{
                            backgroundColor: slideBackgrounds[index % 2],
                          }}
                          className="w-full px-6 h-[450px] rounded-md overflow-hidden flex items-center"
                        >
                          <div className="flex justify-center items-center w-1/2">
                            <img
                              src={item.images[0]}
                              className="w-[350px] h-[300px] object-cover rounded-md"
                            />
                          </div>

                          <div className="info flex flex-col h-[300px] justify-center p-6 w-1/2 translate-x-full opacity-0 transition-all duration-700">
                            <h4 className="text-[20px] font-[400] mb-5">
                              Giảm Giá Cực Lớn
                            </h4>
                            <h2 className="text-[27px] font-bold line-clamp-2">
                              {item?.name}
                            </h2>
                            <h3 className="flex items-center gap-3 text-[20px] font-[400] mb-3 mt-3">
                              Chỉ Với{" "}
                              <span className="mt-[-1px] text-[#ff5252] text-[30px] font-bold">
                                {item?.price?.toLocaleString("vi-VN")}đ
                              </span>
                            </h3>
                            <div>
                              <Button
                                className="btn-org text-center !px-4 !py-2"
                                onClick={() =>
                                  navigate(`/product-details/${item._id}`)
                                }
                              >
                                MUA NGAY
                              </Button>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            )}
          </div>
        </div>

        <div className="part-2 w-[30%]">
          <div className="banner-product-sale-mini w-full flex flex-col items-center justify-between gap-5 h-[450px]">
            {allProductsData
              ?.filter((item) => item.discount > 0)
              ?.sort((a, b) => b.discount - a.discount)
              ?.slice(2, 4)
              ?.map((item, index) => (
                <div
                  key={index}
                  className="banner-product-mini-1 rounded-md w-full group overflow-hidden relative"
                >
                  <img
                    src={item.images[0]}
                    alt={item?.name}
                    className="w-full h-[215px] object-cover transition-all duration-150 group-hover:scale-105"
                  />
                  <div className="info absolute top-0 left-0 w-full h-full flex flex-col justify-center p-6 bg-black/30 text-white opacity-0 transition-all duration-700 group-hover:opacity-100">
                    <h2 className="text-[20px] truncate font-bold">
                      {item.name}
                    </h2>
                    <h3 className="flex items-center gap-3 text-[17px] font-[400] mb-3 mt-3">
                      Chỉ Với{" "}
                      <span className="mt-[-1px] underline text-[#ff5252] text-[20px] font-bold">
                        {item.price?.toLocaleString("vi-VN")}đ
                      </span>
                    </h3>
                    <div>
                      <Button
                        className="btn-org text-center !px-4 !py-2"
                        onClick={() => navigate(`/product-details/${item._id}`)}
                      >
                        MUA NGAY
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProductSaleBanner;
