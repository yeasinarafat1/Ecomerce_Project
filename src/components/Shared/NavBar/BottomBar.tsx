import Image from "next/image";
import React from "react";

import CatagoryTabs from "@/components/Page/Home/CatagoryTabs";
import Link from "next/link";
const BottomBar = () => {
    return (
      <div className="w-full flex justify-center items-center flex-wrap  md:gap-5 my-2 border-0 border-b-[1px] border-gray-300 pb-3">
        <CatagoryTabs />
        <div className="flex justify-center items-center gap-2">
          <Image
            className="size-[16px] md:size-[24px]"
            src={"/asset/icons/MapPinLine.svg"}
            height={24}
            width={24}
            alt="map logo"
          />
          <p className="text-gray-400 text-[11px] md:text-[16px]">
            Track Order
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image
            className="size-[16px] md:size-[24px]"
            src={"/asset/icons/ArrowsCounterClockwise.svg"}
            height={24}
            width={24}
            alt="map logo"
          />
          <p className="text-gray-400 text-[11px] md:text-[16px]">Compare</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Image
            className="size-[16px] md:size-[24px]"
            src={"/asset/icons/Headphones.svg"}
            height={24}
            width={24}
            alt="map logo"
          />
          <p className="text-gray-400 text-[11px] md:text-[16px]">
            Customer Service
          </p>
        </div>
        <Link href={'/aboutus'} className="flex justify-center items-center gap-2">
          <Image
            className="size-[16px] md:size-[24px]"
            src={"/asset/icons/Info.svg"}
            height={24}
            width={24}
            alt="map logo"
          />
          <p className="text-gray-400 text-[11px] md:text-[16px]">About us</p>
        </Link>
      </div>
    );
};

export default BottomBar;
