import Image from 'next/image';
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const BottomBar = () => {
  return (
    <div className="flex justify-center items-center gap-5 mt-2 border-0 border-b-[1px] border-gray-300">
      <Select>
        <SelectTrigger className="bg-[#F2F4F5] w-[154px] h-[48px] bg-transparent outline-none border-0 flex items-center justify-center active:outline-none">
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
          src={"asset/icons/MapPinLine.svg"}
          height={24}
          width={24}
          alt="map logo"
        />
        <p className="text-gray-400">Track Order</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Image
          src={"asset/icons/ArrowsCounterClockwise.svg"}
          height={24}
          width={24}
          alt="map logo"
        />
        <p className="text-gray-400">Compare</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Image
          src={"asset/icons/Headphones.svg"}
          height={24}
          width={24}
          alt="map logo"
        />
        <p className="text-gray-400">Customer Service</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Image
          src={"asset/icons/Info.svg"}
          height={24}
          width={24}
          alt="map logo"
        />
        <p className="text-gray-400">Need Help</p>
      </div>
    </div>
  );
}

export default BottomBar