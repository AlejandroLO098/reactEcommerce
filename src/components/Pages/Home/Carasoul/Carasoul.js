import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carasoul.css";
import { carouselData } from "./data";

const Carasoul = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="app">
      <h1 className="lowstock">Low Stock</h1>
      <Slider {...settings}>
        {carouselData.map((product) => {
          return (
            <div className="card">
              <div className="card-top">
                <img src={product.img} alt={product.title} />
                <h1>{product.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>${product.price}</h3>
              </div>
              <button className="slide-btn">Buy Now</button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carasoul;
