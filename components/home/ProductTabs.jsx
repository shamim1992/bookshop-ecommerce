import React, { useState } from "react";
import TopSellingProducts from "./TopSellingProducts";
import BestSellingProducts from "./BestSellingProducts";

const ProductTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState("topSelling");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex space-x-4">
        <button
          className={`
          text-blue-900 text-2xl relative ${
            activeTab === "topSelling" ? "text-yellow-500" : ""
          } hover:text-yellow-500 hover:underline
  `}
          onClick={() => handleTabClick("topSelling")}
        >
          Top Selling
        </button>

        <button
          className={`
     text-blue-900 text-2xl relative ${
       activeTab === "bestSelling" ? "text-yellow-500" : ""
     } hover:text-yellow-500 hover:underline
  `}
          onClick={() => handleTabClick("bestSelling")}
        >
          Best Selling
        </button>
      </div>
      <hr className="my-2" />
      <div className="mt-4">
        {activeTab === "topSelling" && <TopSellingProducts data={data} />}
        {activeTab === "bestSelling" && <BestSellingProducts data={data} />}
      </div>
    </>
  );
};

export default ProductTabs;
