import React from "react";

const TopTen = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex">
            <div className="rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-44 md:h-32 lg:h-44"
              />
            </div>
            <div className="w-2/3 p-2">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.author}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopTen;
