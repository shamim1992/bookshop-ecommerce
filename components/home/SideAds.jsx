import Link from "next/link";
import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";

const SideAds = () => {
  return (
    <>
      <div className="border rounded-xl overflow-hidden relative">
        <img
          src="../assets/image4.jpg"
          alt=""
          className="rounded-t-xl w-full object-cover"
        />
        <div className="p-4 absolute inset-0 flex flex-col justify-between text-white">
          <p className="text-lg mb-2 text-center text-blue-900 font-bold hover:underline">
            BEST SELLER BOOK
          </p>
          <div className="text-center text-orange-500 text-base font-semibold hover:underline">
            <Link href="/shop" className="">
              <span className="flex items-center justify-center">
                Shop Now <RiArrowDropRightLine />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideAds;
