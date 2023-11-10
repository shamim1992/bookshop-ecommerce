import React, { useState } from "react";
import Discription from "./Discription";
import Reviews from "./Reviews";
import VandorInfo from "./VandorInfo";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("discription");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="flex justify-center space-x-4 ">
        <button
          className={`
              text-blue-900 text-2xl relative ${
                activeTab === "discription" ? "text-orange-500" : ""
              } hover:text-orange-500 hover:underline
            `}
          onClick={() => handleTabClick("discription")}
        >
          Discription
        </button>

        <button
          className={`
              text-blue-900 text-2xl relative ${
                activeTab === "reviews" ? "text-orange-500" : ""
              } hover:text-orange-500 hover:underline
            `}
          onClick={() => handleTabClick("reviews")}
        >
          Reviews
        </button>

        <button
          className={`
              text-blue-900 text-2xl relative ${
                activeTab === "vandorInfo" ? "text-orange-500" : ""
              } hover:text-orange-500 hover:underline
            `}
          onClick={() => handleTabClick("vandorInfo")}
        >
          Vandor Info
        </button>
      </div>
      <hr className="my-2" />
      <div className="mt-4 border rounded-2xl p-6 pl-10">
        {activeTab === "discription" && <Discription />}
        {activeTab === "reviews" && <Reviews />}
        {activeTab === "vandorInfo" && <VandorInfo />}
      </div>
    </>
  );
};

export default Tab;
