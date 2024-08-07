import Image from "next/image";
import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
const BottomBar = () => {
    return (
      <div className="w-full flex justify-center items-center flex-wrap  md:gap-5 mt-2 border-0 border-b-[1px] border-gray-300">
        <Select>
          <SelectTrigger className="bg-[#F2F4F5] w-[145px] md:w-[154px] h-[48px] bg-transparent !ring-0 !ring-offset-0  outline-none border-0 flex items-center justify-center active:outline-none">
            <SelectValue className="text-lg" placeholder="All catagory" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
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
        <div className="flex justify-center items-center gap-2">
          <Image
            className="size-[16px] md:size-[24px]"
            src={"/asset/icons/Info.svg"}
            height={24}
            width={24}
            alt="map logo"
          />
          <p className="text-gray-400 text-[11px] md:text-[16px]">Need Help</p>
        </div>
      </div>
    );
};

export default BottomBar;
