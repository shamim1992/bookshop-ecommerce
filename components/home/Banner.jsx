import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const Banner = () => {
  return (
    <>
      <div className="container mx-auto lg:p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {/* Banner 1 */}
          <div className="col-span-1 bg-blue-100 rounded-lg p-4 space-y-3 text-white">
            <h2 className="text-2xl font-semibold transform transition-transform hover:-translate-y-1 hover:underline">
              Up to 20% off
            </h2>
            <p className="text-3xl font-semibold">
              Enjoy The Weekend with Good Books
            </p>
            <a
              href="/shop-now-link"
              className="text-blue-600 hover:underline text-lg flex items-center"
            >
              Shop Now <RiArrowDropRightLine />
            </a>
          </div>

          {/* Banner 2 */}
          <div className="bg-yellow-100 rounded-lg p-4 space-y-3">
            <h2 className="text-2xl font-semibold transform transition-transform hover:-translate-y-1 hover:underline">
              Special Offer
            </h2>
            <p className="text-2xl font-semibold">20% off</p>
            <p className="text-3xl font-semibold">Best book in this town</p>
            <a
              href="/shop-now-link"
              className="text-yellow-600 hover:underline text-lg flex items-center"
            >
              Shop Now <RiArrowDropRightLine />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
