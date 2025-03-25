import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCategorySlider from "../../components/HomeCategorySlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/ProductsSlider";
import { Button } from "@mui/material";
import { MdArrowForward } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";
import HomeProductSaleBanner from "../../components/HomeProductSaleBanner";
import HomeProductSaleBannerMini from "../../components/HomeProductSaleBannerMini";

function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <HomeSlider />
      <HomeCategorySlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="py-3 flex items-center justify-between">
            <div className="left-section w-[75%]">
              <h2 className="text-[20px] font-[700] text-[#3b3a3a]">
                Danh sách sản phẩm
              </h2>
            </div>
            <div className="right-section w-[25%] flex items-center justify-end">
              <Button className="btn-view-all !p-1 !pl-2 gap-1 !border !border-[#ff5252] !text-black hover:!text-white !bg-white hover:!bg-[#ff5252] transition-all flex items-center justify-center !capitalize">
                Xem tất cả
                <MdArrowForward className="text-[20px]" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="products-list w-[75%]">
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Đồ ăn nhẹ" className="!capitalize" />
                  <Tab label="Đồ ăn vặt khô" className="!capitalize" />
                  <Tab label="Bộ trà sữa" className="!capitalize" />
                  <Tab label="Chè & Món tráng miệng" className="!capitalize" />
                  <Tab label="Trà" className="!capitalize" />
                  <Tab label="Ăn vặt khỏe mạnh" className="!capitalize" />
                </Tabs>
              </Box>
            </div>
          </div>

          <ProductsSlider item={5} />
        </div>
      </section>

      <section className="bg-white pb-10">
        <div className="container flex gap-5">
          <div className="part-1 w-[70%]">
            <HomeProductSaleBanner />
          </div>

          <div className="part-2 w-[30%]">
            <HomeProductSaleBannerMini />
          </div>
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <div className="free-shipping w-full p-4 rounded-md border-2 border-solid border-[#ff5252] flex items-center justify-between gap-10">
            <div className="col-1 w-[40%] flex items-center justify-end gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[30px]">FREE SHIPPING</span>
            </div>
            <div className="col-2 w-[60%]">
              <span className="text-[17px]">
                Miễn phí vận chuyển cho tất cả đơn hàng từ <b>100.000VNĐ</b> trở
                lên!
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="product-lastest py-5 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="left-section w-[75%]">
              <h2 className="text-[20px] font-[700] text-[#3b3a3a]">
                Sản phẩm mới nhất
              </h2>
            </div>
            <div className="right-section w-[25%]"></div>
          </div>

          <ProductsSlider item={5} />
        </div>
      </section>

      <section className="product-popular py-5 pt-0 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="left-section w-[75%]">
              <h2 className="text-[20px] font-[700] text-[#3b3a3a]">
                Sản phẩm phổ biến
              </h2>
            </div>
            <div className="right-section w-[25%]"></div>
          </div>

          <ProductsSlider item={5} />
        </div>
      </section>

      <section className="blog-section pb-5  pt-0 bg-white">
        <div className="container">
          <h2 className="pb-6 text-[20px] font-[700] text-[#3b3a3a]">
            Bài viết mới nhất
          </h2>
          <Swiper
            className="blog-slider"
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
