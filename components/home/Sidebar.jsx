import React from "react";
import TopTen from "./TopTen";
import AdsSection from "./AdsSection";
import SideAds from "./SideAds";

const Sidebar = () => {
  const topTenItems = [
    {
      title: "Item 1",
      author: "Author 1",
      image: "/assets/image1.jpg",
    },
    {
      title: "Item 2",
      author: "Author 2",
      image: "/assets/image2.jpg",
    },
    {
      title: "Item 2",
      author: "Author 2",
      image: "/assets/image3.jpg",
    },
    {
      title: "Item 2",
      author: "Author 2",
      image: "/assets/image4.jpg",
    },
    // Add more items as needed
  ];

  return (
    <>
      <div className="bg-gray-200 rounded-xl p-4">
        <h1 className="text-3xl text-center text-blue-900 mb-4">
          Top 10 Items
        </h1>
        <hr className="bg-gray-400 m-10" />
        <TopTen items={topTenItems} />
      </div>
      <hr className="m-10" />
      <AdsSection />
      <hr className="m-10" />
      <SideAds />
    </>
  );
};

export default Sidebar;
