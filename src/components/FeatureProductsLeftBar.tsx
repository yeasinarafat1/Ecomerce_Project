import Image from "next/image";
import React from "react";
import OrangeButton from "./Shared/OrangeButton";

const FeatureProductsLeftBar = () => {
  return (
    <div className="flex items-center justify-between flex-col gap-3 w-full md:w-[300px] h-[565px] lg:h-[640px]   border-[#E4E7E9] border-[1px] bg-[#F3DE6D]">
      <div className="flex-center flex-col gap-2 flex-1">
        <p className="text-[14px] text-[#BE4646] text-public_sans font-semibold">
          COMPUTER & ACCESSORIES
        </p>
        <p className="text-[#191C1F] font-semibold text-3xl ">32% Discount</p>
        <p className="text-[#475156] font-normal text-[16px] text-public_sans">
          For all ellectronics products
        </p>
        <OrangeButton>Shop Now</OrangeButton>
      </div>
      <Image
      className="h-[380px] w-full md:h-[415px] md:w-[315px] lg:h-[428px] lg:w-[328px]"
        src={"/asset/DemoPic/computer_accesories.jpg"}
        alt="computer accesories"
        height={428}
        width={328}
      />
    </div>
  );
};

export default FeatureProductsLeftBar;
