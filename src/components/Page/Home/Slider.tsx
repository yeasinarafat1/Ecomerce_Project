"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

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
        <>
        
            {/* Slider div */}
            <div className="flex items-center">
                {/* slider left side content */}
                <div className="w-[80%]">
                    <h3 className="text-[#2484C2] font-semibold text-[14px]">
                        {title}
                    </h3>

                    <h1 className="text-[#191C1F] text-[48px] font-semibold ">
                        {heading}
                    </h1>

                    <p className="text-[#475156] text-[18px] mt-2">
                        {description}
                    </p>

                    <Button
                        variant="primary"
                        className="flex items-center mt-6"
                    >
                        Button{" "}
                        <GoArrowRight className="text-xl font-bold ml-2" />
                    </Button>
                </div>

                {/* image container */}
                <div className="relative">
                    <Image src={image} alt={heading} width={500} height={100} />

                    <div className="w-20 h-20 bg-[#2DA5F3] rounded-full text-white font-bold flex items-center justify-center text-xl absolute top-0 right-0">
                        $ {discount}
                    </div>
                </div>
            </div>
        </>
    );
}
