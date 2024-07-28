"use client"
import React from 'react'
//** react-slick is package to use slider card */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CatagorisData } from '@/constant';
import ProductCard from '@/components/Shared/ProductCard';
const ShopFromCatagory = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      //** slidesToShow where number of slidesToShow is how many card you want to show on a single page */
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        //**Responsive breakpoint so that it looks good on every device */
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
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
    <div className="mt-3 container mx-auto">
      <h1 className="text-center text-[#191C1F] text-3xl font-semibold mb-3">
        Shop From Catagory
      </h1>
      //** Slider component comes from react-slick */
      <Slider {...settings}>
        {
          //**Here CatagorisData is constant */
          //TODO Fetch catagoried and update it
          CatagorisData.map((item) => {
            return (
              //**Here I am reusing existing product card */
              <ProductCard
                name={item.name}
                image={item.image}
                type="catagori"
              />
            );
          })
        }
      </Slider>
    </div>
  );
}

export default ShopFromCatagory;
//** Those are the arrow which are used navigate to slider */
const NextArrow = (props:any)=> {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} size-[48px] rounded-full`}
      style={{ ...style, display: "block", background: "#fa8232" }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props:any)=> {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} size-[48px] rounded-full`}
      style={{ ...style, display: "block", background: "#fa8232" }}
      onClick={onClick}
    />
  );
}
