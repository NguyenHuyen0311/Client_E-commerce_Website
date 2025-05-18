import React, { useContext, useEffect, useState } from "react";
import { Button, Rating, TextField } from "@mui/material";
import { myContext } from "../../App";
import { fetchDataFromApi, postData } from "../../utils/api";

const Reviews = (props) => {
  const [reviews, setReviews] = useState({
    image: "",
    userName: "",
    review: "",
    rating: 1,
    userId: "",
    productId: "",
  });
  const [reviewsData, setReviewsData] = useState();

  const context = useContext(myContext);

  useEffect(() => {
    setReviews(() => ({
      ...reviews,
      image: context?.userData?.avatar,
      userName: context?.userData?.name,
      userId: context?.userData?._id,
      productId: props?.productId,
    }));

    getReviews();
  }, [context?.userData, props]);

  const onChangeInput = (e) => {
    setReviews(() => ({
      ...reviews,
      review: e.target.value,
    }));
  };

  const addReview = (e) => {
    e.preventDefault();

    if (reviews?.review !== "") {
      postData(`/api/user/add-review`, reviews).then((res) => {
        if (res?.error === false) {
          context.openAlertBox("success", res?.message);
          setReviews(() => ({
            ...reviews,
            review: "",
            rating: 1,
          }));

          getReviews();
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
    } else {
      context.openAlertBox("error", "Vui lòng đánh giá sản phẩm!");
    }
  };

  const getReviews = () => {
    fetchDataFromApi(`/api/user/get-review?productId=${props?.productId}`).then(
      (res) => {
        if (res?.error === false) {
          const sortedReviews = res.reviews.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setReviewsData(sortedReviews);
        props?.setReviewsCount(sortedReviews.length);

          if (props?.setAverageRating) {
          const totalStars = res?.reviews.reduce(
            (acc, review) => acc + (Number(review.rating) || 0),
            0
          );
          const avg = totalStars / res?.reviews.length || 0;
          props.setAverageRating(Number(avg.toFixed(1)));
        }
        }
      }
    );
  };

  return (
    <div className="w-full px-6 py-8 !shadow-md !rounded-md mt-4">
      <div className="w-full flex flex-col product-review-wrap">
        <h2 className="text-[16px] font-[500]">Nhận xét từ khách hàng</h2>

        {reviewsData?.length !== 0 && (
          <div className="scrool w-full max-h-[300px] overflow-y-scroll overflow-x-hidden">
            {reviewsData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="review pb-5 border-b w-full flex items-center justify-between mt-6"
                >
                  <div className="info w-[60%] flex items-center gap-3">
                    <div className="img w-[60px] !min-w-[60px] h-[60px] overflow-hidden rounded-full">
                      {
                        context?.userData?.avatar === "" ? (
                          <img
                            src="/user-avatar-default.png"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img className="w-full h-full object-cover" src={item?.image} />
                        )
                      }
                    </div>

                    <div className="w-[100%]">
                      <h4 className="text-[13px] font-[600]">
                        {item?.userName}
                      </h4>
                      <h5 className="text-[11px] font-[500]">
                        {new Date(item?.createdAt).toLocaleDateString("vi-VN").replace(/\//g, "-")}
                      </h5>
                      <p className="text-[12px] font-[400] mt-0 mb-0">
                        {item?.review}
                      </p>
                    </div>
                  </div>
                  <Rating
                    name="size-small"
                    value={item?.rating}
                    size="small"
                    className="mt-3"
                    readOnly
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="review-wrap rounded-md bg-[#fafafa] py-4 px-3 mt-6 w-full flex flex-col">
        <h2 className="text-[16px] font-[500] mb-4">Để lại đánh giá của bạn</h2>

        <form className="w-full flex flex-col" onSubmit={addReview}>
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
            onChange={onChangeInput}
            name="review"
            value={reviews.review}
          />
          <Rating
            onChange={(event, newValue) => {
              setReviews(() => ({
                ...reviews,
                rating: newValue,
              }));
            }}
            name="size-medium"
            value={reviews.rating}
            className="mt-4"
          />

          <Button type="submit" className="btn-org w-[130px] !mt-5">
            <h2>Gửi đánh giá</h2>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
