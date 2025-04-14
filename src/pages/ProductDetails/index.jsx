import React, { useState } from "react";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import ProductsSlider from "../../components/ProductsSlider";
import ProductDetailsContent from "../../components/ProductDetailsContent";
import TextField from "@mui/material/TextField";

function ProductDetails() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-5 pb-0 bg-white">
      <div className="container mx-auto flex items-center gap-8">
        <div className="product-zoom-container w-[40%]">
          <ProductZoom />
        </div>

        <div className="product-content-container w-[60%]">
          <ProductDetailsContent />
        </div>
      </div>

      <div className="container !mt-8">
        <div className="flex items-center gap-4 w-full border-b">
          <span
            className={`py-2 cursor-pointer text-[15px] link font-[500] ${
              activeTab === 0 && "text-[#ff5252] border-b border-[#ff5252]"
            }`}
            onClick={() => setActiveTab(0)}
          >
            Mô tả
          </span>
          <span
            className={`py-2 cursor-pointer text-[15px] link font-[500] ${
              activeTab === 1 && "text-[#ff5252] border-b border-[#ff5252]"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Đánh giá (0)
          </span>
        </div>

        {activeTab === 0 && (
          <>
            <div className="w-full px-6 py-8 !shadow-md !rounded-md mt-4 text-sm text-gray-600">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quidem, labore exercitationem. Aliquid tenetur dolores illo
                quidem, voluptates atque? Similique, iure! Eaque voluptatibus
                amet recusandae rerum. Similique itaque error maxime unde!
              </p>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="w-full px-6 py-8 !shadow-md !rounded-md mt-4">
              <div className="w-full flex flex-col product-review-wrap">
                <h2 className="text-[16px] font-[500]">
                  Nhận xét từ khách hàng
                </h2>

                <div className="scrool w-full max-h-[300px] overflow-y-scroll overflow-x-hidden">
                  <div className="review pb-5 border-b w-full flex items-center justify-between mt-6">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[60px] !min-w-[60px] h-[60px] overflow-hidden rounded-full">
                        <img
                          className="w-full h-full"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4Cp0JO-s03hFKGZ2WgyO4luH1JSSzcB0ZA&s"
                        />
                      </div>

                      <div className="w-[100%]">
                        <h4 className="text-[13px] font-[600]">Nina</h4>
                        <h5 className="text-[11px] font-[500]">22-03-2025</h5>
                        <p className="text-[12px] font-[400] mt-0 mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Doloremque voluptatibus consequatur ab saepe
                          perferendis nihil vero suscipit! Placeat ullam at
                          doloremque animi tenetur ab ducimus, natus nam eos
                          veniam eveniet.
                        </p>
                      </div>
                    </div>
                    <Rating
                      name="size-small"
                      defaultValue={1}
                      size="small"
                      className="mt-3"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="review-wrap rounded-md bg-[#fafafa] py-4 px-3 mt-6 w-full flex flex-col">
                <h2 className="text-[16px] font-[500] mb-4">
                  Để lại đánh giá của bạn
                </h2>

                <form className="w-full">
                  <TextField
                    className="w-full"
                    id="outlined-multiline-flexible"
                    label="Viết đánh giá..."
                    multiline
                    rows={4}
                    maxRows={4}
                    InputLabelProps={{
                      style: { fontSize: "14px" },
                    }}
                  />
                </form>

                <Rating name="size-medium" defaultValue={1} className="mt-4" />

                <Button className="btn-org w-[130px] !mt-5">
                  <h2>Gửi đánh giá</h2>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="container pt-8 pb-5">
        <h2 className="text-[20px] font-[700] text-[#3b3a3a]">
          Sản phẩm liên quan
        </h2>
        <ProductsSlider item={5} />
      </div>
    </section>
  );
}

export default ProductDetails;
