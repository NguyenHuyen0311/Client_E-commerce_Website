import React from "react";
import banhmochikemsualanh from "../../assets/image/banhmochikemsualanh.png";
import trathaikhoaite from "../../assets/image/trathaikhoaite.png";
import { Button } from "@mui/material";

function HomeProductSaleBannerMini() {
  return (
    <div className="banner-product-sale-mini w-full flex flex-col items-center justify-between gap-5 h-[450px]">
      <div className="banner-product-mini-1 rounded-md w-full group overflow-hidden relative">
        <img
          src={banhmochikemsualanh}
          className="w-full h-[215px] object-cover transition-all duration-150 group-hover:scale-105"
        />
        <div className="info absolute top-0 left-0 w-full h-full flex flex-col justify-center p-6 bg-black/30 text-white opacity-0 transition-all duration-700 group-hover:opacity-100">
          <h2 className="text-[20px] font-bold line-clamp-2">
            Bánh Mochi Kem Sữa Lạnh
          </h2>
          <h3 className="flex items-center gap-3 text-[17px] font-[400] mb-3 mt-3">
            Chỉ Với{" "}
            <span className="mt-[-1px] underline text-[#ff5252] text-[20px] font-bold">
              34.000đ
            </span>
          </h3>
          <div>
            <Button className="btn-org text-center !px-4 !py-2">
              MUA NGAY
            </Button>
          </div>
        </div>
      </div>

      <div className="banner-product-mini-1 rounded-md w-full group overflow-hidden relative">
        <img
          src={trathaikhoaite}
          className="w-full h-[215px] object-cover transition-all duration-150 group-hover:scale-105"
        />
        <div className="info absolute top-0 left-0 w-full h-full flex flex-col justify-center p-6 bg-black/30 text-white opacity-0 transition-all duration-700 group-hover:opacity-100">
          <h2 className="text-[20px] font-bold line-clamp-2">
          Trà Thai Khoai Tế
          </h2>
          <h3 className="flex items-center gap-3 text-[17px] font-[400] mb-3 mt-3">
            Chỉ Với{" "}
            <span className="mt-[-1px] underline text-[#ff5252] text-[20px] font-bold">
              40.000đ
            </span>
          </h3>
          <div>
            <Button className="btn-org text-center !px-4 !py-2">
              MUA NGAY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProductSaleBannerMini;
