import React from "react";
import styles from "../../styles/Order.module.css";
import { useState } from "react";
import Button from "../ui/Button";
import { useAddReviewMutation } from "../../store/apis/orderApi";
import { useDispatch } from "react-redux";
import { createAlert } from "./../../store/slices/alertSlice";
const Rating = ({ order_id, item }) => {
  const [isLoading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(null);
  const dispatch = useDispatch();
  const [addReview] = useAddReviewMutation();
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleReview = async (e) => {
    e.preventDefault();
    if (!rating) {
      dispatch(
        createAlert({ type: "error", message: "Please Give your Rating" })
      );
      return;
    }
    setLoading(true);
    try {
      const result = await addReview({
        order_item_id: item.id,
        item_id: item.item_id,
        rating,
        comment,
      }).unwrap();
      if (result.status) {
        dispatch(createAlert({ type: "success", message: "Login Successful" }));
      } else {
        dispatch(createAlert({ type: "error", message: result?.message }));
      }
    } catch (err) {
      console.log(err);
      dispatch(createAlert({ type: "error", message: "Something went wrong" }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.review_section}>
      <h3>Write your review for {item.name}</h3>
      <label>
        Comment
        <textarea
          className="form-control"
          name="address"
          onChange={(e) => setComment(e.target.value)}
          value={comment || ""}
          required
        />
      </label>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? "selected" : ""}`}
            onClick={() => handleStarClick(star)}
          >
            &#9733;
          </span>
        ))}
      </div>
      <Button
        className="save"
        type="submit"
        loading={isLoading}
        style={{ width: 150 }}
        onClick={handleReview}
      >
        Save
      </Button>
    </div>
  );
};

export default Rating;
