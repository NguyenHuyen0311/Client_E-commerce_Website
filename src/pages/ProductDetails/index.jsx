import React, { useEffect, useRef, useState } from "react";
import ProductZoom from "../../components/ProductZoom";
import ProductsSlider from "../../components/ProductsSlider";
import ProductDetailsContent from "../../components/ProductDetailsContent";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../../utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import Reviews from "./reviews";

function ProductDetails() {
  const [activeTab, setActiveTab] = useState(0);
  const [productData, setProductData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [relatedProductData, setRelatedProductData] = useState([]);

  const { id } = useParams();
  const reviewSection = useRef();

  useEffect(() => {
    fetchDataFromApi(`/api/user/get-review?productId=${id}`).then((res) => {
      if (res?.error === false) {
        setReviewsCount(res?.reviews?.length);
      }
    });
  }, [reviewsCount]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    fetchDataFromApi(`/api/product/${id}`).then((res) => {
      if (res?.error === false) {
        setProductData(res?.product);

        fetchDataFromApi(
          `/api/product/getAllProductsBySubCatId/${res?.product?.subCatId}`
        ).then((res) => {
          if (res?.error === false) {
            const filteredData = res?.products?.filter((item) => item._id !== id);
            setRelatedProductData(filteredData);
          }
        });

        setTimeout(() => {
          setIsLoading(false);
        }, 700);
      }
    });
  }, [id]);

  const gotoReviews = () => {
    window.scrollTo({
      top: reviewSection?.current.offsetTop - 170,
      behavior: "smooth",
    });

    setActiveTab(1);
  };

  return (
    <>
      <section className="py-5 pb-0 bg-white">
        {isLoading === true ? (
          <div className="flex items-center min-h-[300px] justify-center">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="container mx-auto flex items-center gap-8">
              <div className="product-zoom-container w-[40%]">
                <ProductZoom images={productData?.images} />
              </div>

              <div className="product-content-container w-[60%]">
                <ProductDetailsContent
                  gotoReviews={gotoReviews}
                  reviewsCount={reviewsCount}
                  item={productData}
                />
              </div>
            </div>

            <div className="container !mt-8">
              <div className="flex items-center gap-4 w-full border-b">
                <span
                  className={`py-2 cursor-pointer text-[15px] link font-[500] ${
                    activeTab === 0 &&
                    "text-[#ff5252] border-b border-[#ff5252]"
                  }`}
                  onClick={() => setActiveTab(0)}
                >
                  Mô tả
                </span>
                <span
                  className={`py-2 cursor-pointer text-[15px] link font-[500] ${
                    activeTab === 1 &&
                    "text-[#ff5252] border-b border-[#ff5252]"
                  }`}
                  ref={reviewSection}
                  onClick={() => setActiveTab(1)}
                >
                  Đánh giá ({reviewsCount})
                </span>
              </div>

              {activeTab === 0 && (
                <>
                  <div className="w-full px-6 py-8 !shadow-md !rounded-md mt-4 text-sm text-gray-600">
                    <p>{productData?.description}</p>
                  </div>
                </>
              )}

              {activeTab === 1 && (
                <>
                  {productData?.length !== 0 && (
                    <Reviews
                      productId={productData?._id}
                      setReviewsCount={setReviewsCount}
                    />
                  )}
                </>
              )}
            </div>

            <div className="container pt-8 pb-5">
              {
                relatedProductData?.length !== 0 && (
                  <>
                    <h2 className="text-[20px] font-[700] text-[#3b3a3a]">
                      Sản phẩm liên quan
                    </h2>
                    <ProductsSlider data={relatedProductData} item={5} />
                  </>
                )
              }
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default ProductDetails;
