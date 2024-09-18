"use client"
import VerticalProductCard from "@/components/Shared/VerticalProductCard";
import {
  
  TableCell,
  
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";
interface props {
  name: string;
  img: string;
  initialQuantity: number;
  price: number;
}
const CartRow = ({ name, img, initialQuantity, price }: props) => {
    const [quantity, setQuantity] = useState(initialQuantity)
  return (
    <TableRow>
      <TableCell className="w-[260px] lg:w-[290px] xl:w-[330px] p-0 lg:p-2">
        <VerticalProductCard name={name} img={img} />
      </TableCell>
      <TableCell className="text-[#191C1F] text-sm font-medium">
        ${price}
      </TableCell>
      <TableCell className={cn("text-sm font-medium")}>
        <div className="border border-gray-100 flex items-center justify-center gap-2   text-sm lg:text-base">
          <Minus
            onClick={() => quantity != 0 && setQuantity((prev) => prev - 1)}
            className="cursor-pointer text-gray-400"
          />
          {quantity}
          <Plus
            onClick={() => setQuantity((prev) => prev + 1)}
            className="cursor-pointer text-gray-900"
          />
        </div>
      </TableCell>
      <TableCell className="w-[100px] lg:w-[150px] h-full">
        <div className="flex-center gap-2">
          <p className="text-sm lg:text-base text-gray-600">
            $ {price * quantity}
          </p>
          <X className="cursor-pointer text-gray-500" />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CartRow;
