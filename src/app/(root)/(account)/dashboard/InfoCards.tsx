import AddressCard from "@/components/Shared/AddressCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoCards = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex flex-col gap-4 w-full md:size-[312px] rounded-md border border-gray-100">
        <div className="text-gray-900 font-medium px-4 h-[52px] border-b border-gray-100 flex items-center ">
          Account Info
        </div>
        {/* Account card Started */}
        <div className="flex items-center px-4 gap-3 h-[70px] w-full rounded-md ">
          <Image
            src={"/asset/conributorDemoPic/pic1.png"}
            height={48}
            width={48}
            alt={""}
          />
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-base text-gray-900">
              Kevin Gilbert
            </h3>
            <p className="text-gray-700 text-sm">Dhaka - 1207, Bangladesh</p>
          </div>
        </div>
        {/* Account card ended */}
        <div className="w-full px-4 flex items-center gap-2 text-sm font-semibold">
          <p className="text-gray-900">Email:</p>
          <p className="text-gray-600 font-medium"> kevin.gilbert@gmail.com</p>
        </div>
        <div className="w-full px-4 flex items-center gap-2 text-sm font-semibold">
          <p className="text-gray-900">Phone:</p>
          <p className="text-gray-600 font-medium"> +1-202-555-0118</p>
        </div>
        <div className="w-full px-4">
          <Link href={"/account/settings"}>
            <Button className="bg-transparent text-primary-500 hover:text-white font-semibold border-[2px] border-primary-500 hover:bg-primary-500">
              Edit Eccount
            </Button>
          </Link>
        </div>
      </div>
      <AddressCard type="Billing address" />
      <div className="flex flex-col gap-4 w-full md:size-[312px]">
        <StatsCard type="total_order" amount={100} />
        <StatsCard type="pending_order" amount={100} />
        <StatsCard type="completed_order" amount={100} />
      </div>
    </div>
  );
};

export default InfoCards;
interface statsCardProps {
  type: "total_order" | "pending_order" | "completed_order";
  amount: number;
}
const StatsCard = ({ type, amount }: statsCardProps) => {
  return (
    <div
      className={cn(
        "h-[88px] w-full flex items-center gap-3 px-4 rounded-sm",
        type === "total_order" && "bg-primary-50",
        type === "pending_order" && "bg-primary-50",
        type === "completed_order" && "bg-Success-50"
      )}
    >
      <div className="size-14 bg-white rounded-sm flex-center">
        {type === "total_order" && (
          <Image
            src={"/asset/icons/Rocket.svg"}
            alt="rocket"
            height={32}
            width={32}
          />
        )}
        {type === "pending_order" && (
          <Image
            src={"/asset/icons/Receipt.svg"}
            alt="rocket"
            height={32}
            width={32}
          />
        )}
        {type === "completed_order" && (
          <Image
            src={"/asset/icons/Package.svg"}
            alt="rocket"
            height={32}
            width={32}
          />
        )}
      </div>
      <div className="flex flex-col justify-between h-14">
        <h2 className="text-xl text-gray-900 font-semibold">{amount}</h2>
        <p className="text-gray-700 text-sm">
          {type === "total_order" && "Total Order"}
          {type === "pending_order" && "Pending Order"}
          {type === "completed_order" && "Completed Order"}
        </p>
      </div>
    </div>
  );
};
