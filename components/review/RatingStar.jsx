import React from "react";
import PropTypes from "prop-types";

const ReviewStar = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="star filled"></span>);
    } else {
      stars.push(<span key={i} className="star empty"></span>);
    }
  }
  return <div className="review-star">{stars}</div>;
};

ReviewStar.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default ReviewStar;
