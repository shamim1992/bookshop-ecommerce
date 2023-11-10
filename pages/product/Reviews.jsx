import React from "react";
import ReviewCard from "../../components/review/ReviewCard";
import { useGetReviewsQuery } from "../../store/apis/orderApi";

const Reviews = ({ item }) => {
  const {
    data: reviews = [],
    isLoading: isLoadingGetReviews,
    isSuccess: isSuccessGetReviews,
    isError: isErrorGetReviews,
  } = useGetReviewsQuery(item?.id);

  return (
    <>
      <div className="review-container">
        <div className="review-list">
          {isLoadingGetReviews ? (
            <></>
          ) : (
            <>
              {isSuccessGetReviews && reviews
                ? reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))
                : null}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Reviews;
