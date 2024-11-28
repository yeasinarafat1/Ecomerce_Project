import OrangeButton from "@/components/Shared/OrangeButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { cartItemConstant } from "@/constant";

import MobileCartItem from "./MobileCartsItem";
import CartTable from "./CartTable";

const page = () => {
  return (
    <div className=" w-full md:container mx-auto my-6 flex flex-col  gap-6 md:flex-row">
      <div className="flex flex-col gap-2 border border-gray-200 rounded-md">
        <h2>Shoping Cart</h2>
        <CartTable CartItems={cartItemConstant}/>
        <MobileCartItem CartItems={cartItemConstant}/>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-5 border px-3 pt-3 border-gray-200 rounded-md w-full md:w-[250px] lg:w-[380px] h-[340px]">
          <h3 className="text-[#191C1F] text-lg font-semibold">Totals</h3>
          <div className="flex items-center justify-between">
            <p className="text-[#5F6C72] text-sm">Sub Total</p>
            <p className="text-[#191C1F] text-sm font-medium">$300</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#5F6C72] text-sm">Shipping</p>
            <p className="text-[#191C1F] text-sm font-medium">$300</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#5F6C72] text-sm">Discounts</p>
            <p className="text-[#191C1F] text-sm font-medium">$300</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#5F6C72] text-sm">Tax</p>
            <p className="text-[#191C1F] text-sm font-medium">$300</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <p className="text-[#191C1F] text-base">Total</p>
            <p className="text-[#191C1F] text-base font-medium">$300 USD</p>
          </div>
          <OrangeButton className="w-full">Proceed to Checkout</OrangeButton>
        </div>
        <div className="border border-gray-200 rounded-md p-3 flex flex-col gap-4">
          <h2 className="text-lg font-medium text-[#191C1F]">Cuppon Code</h2>
          <Input
            className="!ring-0 !ring-offset-0 bg-transparent border-gray-200"
            placeholder="Cuppon Code"
          />
          <Button className="bg-[#2DA5F3] w-[160px] ">Apply Cuppon</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
