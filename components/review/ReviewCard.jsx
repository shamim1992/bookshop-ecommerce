import React from "react";
import styles from "./../../styles/Review.module.css";
import { AiOutlineUser, AiOutlineCheck } from "react-icons/ai";
import ReviewStar from "./RatingStar";
const ReviewCard = ({ review }) => {
  return (
    <div className={styles.card}>
      <div>
        <AiOutlineUser className={styles.user_icon} />
      </div>
      <div>
        <div className="flex-between">
          <div>
            <h5>
              {review.username} <AiOutlineCheck /> <mark>Verfied User</mark>
            </h5>
            <ReviewStar rating={review.rating} />
          </div>
          <div>
            <h6>{review.created_at}</h6>
          </div>
        </div>
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
