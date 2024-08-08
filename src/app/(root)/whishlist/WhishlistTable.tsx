import OrangeButton from "@/components/Shared/OrangeButton";
import VerticalProductCard from "@/components/Shared/VerticalProductCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";
import { ShoppingCart, X } from "lucide-react";
interface props {
  whishListItem: whislistitem[]
}

const WhishlistTable = ({whishListItem}:props) => {
  return (
    <Table className="mt-5 hidden md:inline-table">
      <TableHeader className="bg-gray-[#475156] uppercase h-10">
        <TableRow className="bg-[#F2F4F5] h-10">
          <TableHead className="w-[575px] h-[72px]">Products</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock Status</TableHead>
          <TableHead className="w-[250px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {whishListItem.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <VerticalProductCard name={item.name} img={item.image} />
              </TableCell>
              <TableCell className="text-[#191C1F] text-sm font-semibold">
                ${item.price}
              </TableCell>
              <TableCell
                className={cn(
                  "text-sm font-semibold",
                  item.instock ? "text-[#2DB224]" : "text-[#EE5858]"
                )}
              >
                {item.instock ? " In stock" : "out of stock"}
              </TableCell>
              <TableCell className="flex items-center  gap-2 w-[250px]">
                <OrangeButton
                  disable={!item.instock}
                  className={cn(!item.instock && "bg-[#ADB7BC]")}
                >
                  Add to cart <ShoppingCart />
                </OrangeButton>
                <X className="cursor-pointer text-gray-700" />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default WhishlistTable;
