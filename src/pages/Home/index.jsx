import React, { useContext, useEffect, useState } from "react";
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
import HomeProductSaleBanner from "../../components/HomeProductSaleBanner";
import { fetchDataFromApi } from "../../utils/api";
import { myContext } from "../../App";
import ProductLoading from "../../components/ProductLoading";

function Home() {
  const [value, setValue] = useState(0);
  const [homeSlidesData, setHomeSlidesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [allProductsData, setAllProductsData] = useState([]);
  const [featuredProductsData, setFeaturedProductsData] = useState([]);
  const [blogData, setBlogData] = useState([]);

  const context = useContext(myContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    fetchDataFromApi("/api/homeSlider").then((res) => {
      setHomeSlidesData(res?.data);
    });
    fetchDataFromApi("/api/product/getAllProducts").then((res) => {
      setAllProductsData(res?.products);
    });
    fetchDataFromApi("/api/product/getAllFeaturedProducts").then((res) => {
      setFeaturedProductsData(res?.products);
    });
    fetchDataFromApi("/api/blog").then((res) => {
      setBlogData(res?.blogs);
    });
  }, []);

  useEffect(() => {
    fetchDataFromApi(
      `/api/product/getAllProductsByCatId/${context?.catData[0]?._id}`
    ).then((res) => {
      if (res?.error === false) {
        setProductsData(res?.products);
      }
    });
  }, [context?.catData]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterByCatId = (id) => {
    setProductsData([]);

    fetchDataFromApi(`/api/product/getAllProductsByCatId/${id}`).then((res) => {
      if (res?.error === false) {
        setProductsData(res?.products);
      }
    });
  };

  return (
    <div>
      {homeSlidesData?.length !== 0 && <HomeSlider data={homeSlidesData} />}

      {context?.catData?.length !== 0 && (
        <HomeCategorySlider data={context?.catData} />
      )}

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
                  {context?.catData?.length !== 0 &&
                    context?.catData?.map((cat, index) => {
                      return (
                        <Tab
                          key={index}
                          onClick={() => filterByCatId(cat?._id)}
                          label={cat?.name}
                          className="!capitalize"
                        />
                      );
                    })}
                </Tabs>
              </Box>
            </div>
          </div>

          {productsData?.length === 0 && <ProductLoading />}

          {productsData?.length !== 0 && (
            <ProductsSlider item={5} data={productsData} />
          )}
        </div>
      </section>

      <section className="bg-white pb-10">
        <div className="container w-full">
          <HomeProductSaleBanner />
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

          {allProductsData?.length === 0 && <ProductLoading />}

          {allProductsData?.length !== 0 && (
            <ProductsSlider
              data={[...allProductsData].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
              )}
              item={5}
            />
          )}
        </div>
      </section>

      <section className="product-popular py-5 pt-0 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="left-section w-[75%]">
              <h2 className="text-[20px] font-[700] text-[#3b3a3a]">
                Sản phẩm nổi bật
              </h2>
            </div>
            <div className="right-section w-[25%]"></div>
          </div>

          {featuredProductsData?.length === 0 && <ProductLoading />}

          {featuredProductsData?.length !== 0 && (
            <ProductsSlider item={5} data={featuredProductsData} />
          )}
        </div>
      </section>

      {blogData?.length !== 0 && (
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
              {blogData?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <BlogItem item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;
