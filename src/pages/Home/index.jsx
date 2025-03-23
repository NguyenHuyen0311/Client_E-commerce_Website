import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCategorySlider from "../../components/HomeCategorySlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/ProductsSlider";

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
          <div className="flex items-center justify-between">
            <div className="left-section w-[75%]">
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Đồ ăn nhẹ" />
                  <Tab label="Đồ ăn vặt khô" />
                  <Tab label="Bộ trà sữa" />
                  <Tab label="Chè & Món tráng miệng" />
                  <Tab label="Trà" />
                  <Tab label="Ăn vặt khỏe mạnh" />
                </Tabs>
              </Box>
            </div>
            <div className="right-section w-[25%]"></div>
          </div>

          <ProductsSlider item={5} />
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="free-shipping w-full p-4 rounded-md border-2 border-solid border-[#ff5252] flex items-center justify-between gap-10">
            <div className="col-1 w-[40%] flex items-center justify-end gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[30px]">FREE SHIPPING</span>
            </div>
            <div className="col-2 w-[60%]">
              <span className="text-[17px]">
                Miễn phí vận chuyển cho tất cả đơn hàng từ 150.000VNĐ trở lên!
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
