import React, { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { useRouter } from "next/router";

const Items = ({ data = [] }) => {
  const router = useRouter();
  // Function to render star icons based on the rating
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (hasHalfStar) {
        stars.push(<FaStarHalf key={i} className="text-yellow-400" />);
        // hasHalfStar = false;
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }

    return stars;
  };
  const handleClick = (e) => {
    // router.push(`/product/tofacitinib-in-ulcerative-colitis-q-and-a-2`);
  };

  return (
    <div className="container mx-auto p-2 lg:p-4">
      <div className="flex flex-wrap -m-4">
        {data?.map((item) => (
          <div
            key={item.id}
            className="grid gap-4 lg:w-1/4 p-2 cursor-pointer"
            onClick={() => {
              router.push(`/product/${item?.slug}-${item?.id}`);
            }}
          >
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/images/${item.image}`}
                alt="image"
                className=""
              />
            </div>
            <div className="mt-1">
              <h2 className="text-sm sm:text-xl font-medium">{item.name}</h2>
              <div className="flex items-center">
                {renderRatingStars(item.rating)}
              </div>
              <p className="text-gray-600">{item.author}</p>
              <p className="text-lg flex gap-3 lg:text-xl font-medium mt-1">
                {/* &#8377;{item.price} */}
                <h4 className="">&#8377; {item.price}</h4>
                <del>&#8377;{item.mrp}</del>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
