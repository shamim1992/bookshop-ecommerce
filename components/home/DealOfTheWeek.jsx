import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const DealOfTheWeek = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const saleEndTime = new Date("2023-11-01T00:00:00Z");
    const currentTime = new Date();
    const totalSeconds = Math.floor((saleEndTime - currentTime) / 1000);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="lg:flex lg:p-4">
      <div className="lg:w-1/3">
        <img
          src="/assets/image1.jpg"
          alt="Deal of the Week"
          className="object-cover w-full rounded-xl"
        />
      </div>
      <div className="lg:w-2/3 p-7 space-y-2 lg:space-y-4">
        <h2 className="text-3xl font-semibold">Name of the Book</h2>
        <div className="flex items-center">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
        </div>
        <p className="text-gray-600">Author Name</p>
        <p className="text-2xl text-red-500 font-semibold mt-2">&#8377;25.99</p>
        <p className="text-green-500 font-semibold">
          Discounted Price: &#8377;19.99
        </p>
        <p className="text-red-500 font-semibold text-base">
          Hurry up! Sale ends in:
          <br />
          <span className="text-2xl text-green-600">
            {`${timeRemaining.days} days ${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DealOfTheWeek;
