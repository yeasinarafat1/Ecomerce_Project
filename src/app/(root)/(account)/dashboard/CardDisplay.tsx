"use client";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import BankCard from "@/components/Shared/CreditCard";
import { usePathname } from "next/navigation";
import AddCardDialouge from "../paymentoptions/_components/AddCardDialouge";

const CardDisplay = () => {
  const pathName = usePathname();
  return (
    <div className="w-full min-h-[300px] border border-gray-100 rounded-md flex flex-col gap-2">
      <div className="flex items-center justify-between px-4 w-full h-12 border-b border-gray-100">
        <h4 className="text-gray-900 text-sm font-semibold">Payment Option</h4>
        {pathName === "/account/dashboard" ? (
          <Link
            href="/account/paymentoptions"
            className="flex-center gap-2 text-secondary font-semibold text-sm"
          >
            Veiw All <MoveRight />
          </Link>
        ) : (
          <AddCardDialouge />
        )}
      </div>
      <div className="flex gap-3 w-full flex-wrap px-2">
        <BankCard
          card_number={12932382374323}
          type="Master"
          username="Yeasin Arafat"
        />
        <BankCard
          card_number={12932382374323}
          type="Master"
          username="Yeasin Arafat"
        />
      </div>
    </div>
  );
};

export default CardDisplay;
