"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import OrangeButton from "@/components/Shared/OrangeButton";

export default function Slider({
  title,
  heading,
  description,
  image,
  discount,
}: {
  title: string;
  heading: string;
  description: string;
  image: string;
  discount: number;
}) {
  return (
    <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Content section */}
        <div className="w-full md:w-[80%] space-y-4 text-center md:text-left">
          <h3 className="text-[#2484C2] font-semibold text-sm md:text-[14px]">
            {title}
          </h3>

          <h1 className="text-[#191C1F] text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight">
            {heading}
          </h1>

          <p className="text-[#475156] text-base md:text-[18px] max-w-prose">
            {description}
          </p>

          <div className="pt-2">
            <OrangeButton>Button</OrangeButton>
          </div>
        </div>

        {/* Image section */}
        <div className="relative w-full md:w-auto">
          <div className="relative aspect-square md:aspect-auto max-w-[500px] mx-auto">
            <Image
              src={image}
              alt={heading}
              width={500}
              height={100}
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute top-0 right-0 md:right-0 w-16 h-16 md:w-20 md:h-20 bg-[#2DA5F3] rounded-full text-white font-bold flex items-center justify-center text-lg md:text-xl shadow-lg">
            $ {discount}
          </div>
        </div>
      </div>
    </div>
  );
}
