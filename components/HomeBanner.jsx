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
    // variableWidth: true,
    // centerMode: false,
    // draggable: true,
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
    <div className={styles.container}>
      <Slider {...settings}>
        {data &&
          data?.length > 0 &&
          data.map(({ id, image }) => {
            return (
              <div key={id} className={styles.card}>
                <Link href="#">
                  <div className={styles.image}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/images/${image}`}
                      layout="fill"
                      alt=""
                      objectFit="cover"
                    />
                  </div>
                </Link>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default HomeBanner;
