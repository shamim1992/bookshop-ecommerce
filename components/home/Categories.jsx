import React from "react";
import Category from "../Category";
import styles from "./../../styles/Category.module.css";
import Slider from "react-slick";
import { HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi";
import { RiArrowDropRightLine } from "react-icons/ri";

const Categories = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: true,
    adaptiveHeight: true,
    // customPaging: (i) => <div className="custom-slider-dot"></div>,
    // prevArrow: (
    //   <div className="custom-slider-arrow custom-slider-arrow-left">
    //     <AiOutlineArrowLeft />
    //   </div>
    // ),
    // nextArrow: (
    //   <div className="custom-slider-arrow custom-slider-arrow-right">
    //     <AiOutlineArrowRight />
    //   </div>
    // ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={`${styles.container} categories`}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 15 }}>
        <span className={styles.line}></span>
        <h4>Categories</h4>
      </div>
      <h3>Explore our Top Categories</h3>
      <Slider {...settings}>
        {data?.map((data) => (
          <Category key={data.id} data={data} />
        ))}
      </Slider>
      <div className="flex-center">
        <button className="bg-blue-900 text-white font-semibold rounded-full px-8 py-4 hover:bg-blue-600 transition duration-300 ease-in-out flex items-center gap-2">
          View More <RiArrowDropRightLine />
        </button>
      </div>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // >
    //   <AiOutlineArrowRight />
    // </div>
    <div className="custom-prev-arrow" onClick={onClick}>
      <HiOutlineArrowLeft size={20} color={"#808080"} />
    </div>
  );
};
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
    <div className="custom-next-arrow" onClick={onClick}>
      <HiOutlineArrowRight size={20} color={"white"} />
    </div>
  );
};
export default Categories;

// const CustomDots = ({ slideCount, currentSlide, onClick }) => {
//   const dots = [];

//   for (let i = 0; i < slideCount; i++) {
//     dots.push(
//       <button
//         key={i}
//         className={i === currentSlide ? "active" : ""}
//         onClick={() => onClick(i)}
//       >
//         {i + 1}
//       </button>
//     );
//   }

//   return <div className="custom-dots">{dots}</div>;
// };
