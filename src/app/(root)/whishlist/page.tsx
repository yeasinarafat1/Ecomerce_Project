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
import { whishListConstant } from "@/constant";
import { cn } from "@/lib/utils";
import { ShoppingCart, X } from "lucide-react";

const WhishList = () => {
  
  return (
    <div className="w-full md:container my-4 min-h-[70vh] ">
      <h3 className="text-gray-900 font-semibold">Whishlist</h3>
      <Table className="mt-5">
        <TableHeader className="bg-gray-[#475156] uppercase h-10">
          <TableRow className="bg-[#F2F4F5] h-10">
            <TableHead className="w-[575px] h-[72px]">Products</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock Status</TableHead>
            <TableHead className="w-[250px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {whishListConstant.map((item,index) => { 
            return (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <VerticalProductCard
                    name={item.name}
                    img={item.image}
                  />
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
                  <OrangeButton>Add to cart <ShoppingCart /></OrangeButton>
                  <X  className="cursor-pointer text-gray-700"/>
                </TableCell>
              </TableRow>
            );
           })}
        </TableBody>
      </Table>
    </div>
  );
};

export default WhishList;
