"use client";
import React, { Fragment } from "react";
//** react-slick is package to use slider card */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CatagorisData } from "@/constant";
import ProductCard from "@/components/Shared/ProductCard";
import { Divide } from "lucide-react";
import Image from "next/image";
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-3 w-full md:container mx-auto ">
      <h1 className="text-center text-[#191C1F] text-3xl font-semibold mb-3">
        Shop From Catagory
      </h1>
      {/* Slider component comes from react-slick */}
      <Slider {...settings}>
        {
          //**Here CatagorisData is constant */
          //TODO Fetch catagoried and update it
          CatagorisData.map((item, index) => {
            return (
              //**Here I am reusing existing product card */
              <Fragment key={index}>
                <ProductCard
                  name={item.name}
                  image={item.image}
                  type="catagori"
                  className="hidden md:flex"
                />
                <CatagoryCardMobile name={item.name} image={item.image} />
              </Fragment>
            );
          })
        }
      </Slider>
    </div>
  );
};

export default ShopFromCatagory;
//** Those are the arrow which are used navigate to slider */
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} hidden  size-[48px] rounded-full sm:!flex items-center justify-center mr-5 md:mr-0`}
      style={{
        ...style,
        display: "none",
        background: "#fa8232",
        height: "30px",
        width: "30px",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} size-[48px] rounded-full sm:!flex items-center justify-center z-10 ml-5 md:mr-0`}
      style={{
        ...style,
        display: "none",
        background: "#fa8232",
        height: "30px",
        width: "30px",
      }}
      onClick={onClick}
    />
  );
};
export const CatagoryCardMobile = ({
  name,
  image,
}: {
  name: string;
  image: string;
}) => {
  return (
    <div className="size-[85px] rounded-full border border-primary-500 flex-center md:hidden">
      <Image
        src={image}
        width={85}
        height={85}
        alt={name}
        className="rounded-full object-cover"
      />
    </div>
  );
};
