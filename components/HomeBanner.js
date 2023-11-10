import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import styles from "./../styles/Banner.module.css";
const HomeBanner = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: "5px" }}>
      <Slider {...settings}>
        {data.map((banner, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.image}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/images/${banner.image}`}
                  alt={banner.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeBanner;
