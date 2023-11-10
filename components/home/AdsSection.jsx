import React from "react";
import { FaBook, FaUsers, FaShoppingCart, FaSmile } from "react-icons/fa";

const data = [
  {
    icon: <FaBook className="h-12 w-12 mx-auto text-blue-500" />,
    value: "1,200",
    label: "Total books",
  },
  {
    icon: <FaUsers className="h-12 w-12 mx-auto text-orange-500" />,
    value: "50",
    label: "Authors",
  },
  {
    icon: <FaShoppingCart className="h-12 w-12 mx-auto text-green-500" />,
    value: "600",
    label: "Book Sold",
  },
  {
    icon: <FaSmile className="h-12 w-12 mx-auto text-yellow-400" />,
    value: "97%",
    label: "Happy customers",
  },
];

const StatBox = ({ icon, value, label }) => (
  <div className="p-4 rounded-lg border flex gap-10">
    <div className="bg-blue-100 rounded-full w-20 h-20 items-center flex">
      {icon}
    </div>
    <div>
      <p className="text-3xl font-semibold ">{value}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  </div>
);

const AdsSection = () => {
  return (
    <div className="space-y-2">
      {data.map((item, index) => (
        <StatBox
          key={index}
          icon={item.icon}
          value={item.value}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default AdsSection;
