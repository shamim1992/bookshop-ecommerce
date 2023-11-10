import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Subscribe = () => {
  return (
    <>
      <div className="container bg-yellow-100 shadow-md rounded-xl lg:h-48 relative">
        <img
          src="../assets/BG.jpg"
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />

        <div className="absolute inset-0 flex items-center gap-2 justify-end p-5">
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-yellow-300 rounded-full w-5/6 lg:w-2/6 px-4 py-1 lg:px-6 lg:py-3 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-transparent"
          />
          <button className="bg-blue-900 text-white font-semibold rounded-full px-2 py-2 lg:px-8 lg:py-4 text-xs  hover:bg-blue-600 transition duration-300 ease-in-out flex items-center">
            Subscribe <RiArrowDropRightLine />
          </button>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
