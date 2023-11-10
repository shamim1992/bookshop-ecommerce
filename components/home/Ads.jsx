import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Ads = () => {
  return (
    <>
      <div className="container bg-yellow-100 shadow-sm rounded-xl lg:h-48 relative">
        <img
          src="../assets/banner.png"
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />

        <div className="absolute inset-0 flex items-center justify-end p-5">
          <button className="bg-blue-900 text-white font-semibold rounded-full px-2 py-2 lg:px-6 lg:py-4 text-xs hover:bg-blue-600 transition duration-300 ease-in-out flex items-center">
            Shop Now <RiArrowDropRightLine />
          </button>
        </div>
      </div>
    </>
  );
};

export default Ads;
