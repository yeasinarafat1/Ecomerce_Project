import Image from "next/image";
import React from "react";
import OrangeButton from "./Shared/OrangeButton";

const FeatureProductsLeftBar = () => {
  return (
    <div className="flex items-center justify-between flex-col gap-3 w-[450px] h-[565px]  border-[#E4E7E9] border-[1px] bg-[#F3DE6D]">
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
        src={"/asset/DemoPic/computer_accesories.jpg"}
        alt="computer accesories"
        height={428}
        width={328}
      />
    </div>
  );
};

export default FeatureProductsLeftBar;
