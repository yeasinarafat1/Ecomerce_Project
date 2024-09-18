'use client'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

import Image from "next/image";
import React, { useState } from "react";
interface props {
  CartItems: CartItem[];
}
const MobileCartItem = ({ CartItems }: props) => {
    
  return (
    <div className="w-full flex flex-col gap-3 md:hidden p-2">
      {CartItems.map((item, index) => {
        const [quantity, setQuantity] = useState(item.quantity);
        return (
          <div
            key={index}
            className="flex items-center gap-2 w-full h-20 border border-gray-300 rounded-md"
          >
            <Image src={item.image} alt={item.name} width={60} height={70} />
            <div className="flex-1 flex flex-col gap-1  text-sm ">
              <p className="text-[#475156] line-clamp-2 h-10">{item.name}</p>
              <div className="flex gap-2 items-center justify-between">
                <p className="text-[#191C1F] text-sm font-medium">
                  ${item.price  * quantity}
                </p>
                <div className="border border-gray-100 flex items-center justify-center gap-2   text-sm lg:text-base">
                  <Minus
                    onClick={() =>
                      quantity != 0 && setQuantity((prev) => prev - 1)
                    }
                    className="cursor-pointer text-gray-400"
                  />
                  {quantity}
                  <Plus
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="cursor-pointer text-gray-900"
                  />
                </div>
              </div>
            </div>
            <div className="pr-1 flex-center gap-1 ">
              <Button className="bg-red-500">
                <DustbinIcon />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileCartItem;
export const DustbinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      color="#ffff"
      fill="none"
    >
      <path
        d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M9.5 16.5L9.5 10.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M14.5 16.5L14.5 10.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
