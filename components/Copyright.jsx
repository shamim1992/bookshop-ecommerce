import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const Copyright = () => {
  return (
    <>
      <div className="bg-blue-900 h-16 grid lg:grid-cols-2 items-center text-xs lg:text-base font-medium">
        <h6 className="text-center text-white">
          Copyright &copy; 2022-23{" "}
          <span className="font-semibold text-blue-300"> ChanRe Bookshop </span>
          . All rights reserved.
        </h6>
        <p className="flex justify-center items-center gap-3 text-red-400 text-center ">
          <FiPhoneCall />
          Call Us: +1811-234765
        </p>
      </div>
    </>
  );
};

export default Copyright;
