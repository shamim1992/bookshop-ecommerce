import React from "react";
import Items from "./Items";

const TopSellingProducts = ({ data }) => {
  return (
    <>
      <Items data={data?.filter((item) => item.is_recommended == true)} />
    </>
  );
};

export default TopSellingProducts;
