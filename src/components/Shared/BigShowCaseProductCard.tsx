import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import OrangeButton from './OrangeButton';
interface props {
    
    name:string;
    desc:string;
    productsImg:string;
    type: "left" | "right"
}
const BigShowCaseProductCard = ({name,desc,productsImg,type}:props) => {
  const backgroundcolor = type === "left" ? "#F2F4F5" : "#191C1F";
  return (
    <div
      className={`pl-1 md:pl-0 w-[100vw] md:w-[640px] bg-[${backgroundcolor}] h-[330px] flex  justify-center items-center gap-4  rounded-md mt-5`}
    >
      <div className="flex  justify-center flex-col gap-3 w-[280px]">
        <Button
          className={`${
            type === "left"
              ? "bg-[#2DA5F3] text-white"
              : "bg-[#EFD33D] text-black hover:bg-yellow-400"
          } w-[123px] `}
        >
          Introducing
        </Button>
        <h3
          className={`${
            type === "left" ? "text-[#191C1F]" : "text-white"
          } text-xl md:text-3xl lg:text-4xl`}
        >
          {name}
        </h3>
        <p
          className={`${
            type === "left" ? "text-[#475156]" : "text-[#ADB7BC]"
          } text-xs md:text-base lg:text-lg`}
        >
          {desc}
        </p>
        <OrangeButton className="w-[145px] md:w-[156px]">Shop now</OrangeButton>
      </div>
      <Image className='size-[175px] lg:size-[240px]' src={productsImg} height={240} width={240} alt="name" />
    </div>
  );
}

export default BigShowCaseProductCard