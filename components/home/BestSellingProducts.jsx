import React from "react";
import Items from "./Items";

const BestSellingProducts = ({ data }) => {
  return (
    <>
      <div>
        <Items data={data?.filter((item) => item.is_bestseller == true)} />
      </div>
    </>
  );
};

export default BestSellingProducts;
