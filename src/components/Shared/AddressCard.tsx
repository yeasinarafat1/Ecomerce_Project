import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
interface props {
  type: "Billing address" | "Shipping Address";
}
const AddressCard = ({type}:props) => {
  return (
    <div className="flex flex-col gap-4 w-full md:size-[312px] rounded-md border border-gray-100">
      <div className="text-gray-900 font-medium px-4 h-[52px] border-b border-gray-100 flex items-center ">
        {type}
      </div>
      <div className="w-full px-4 flex flex-col gap-2">
        <h3 className="text-gray-900 text-sm font-semibold">Kelvin Gilbert</h3>
        <p className="text-sm text-gray-600">
          East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat
          No. 5D, Dhaka - 1200, Bangladesh
        </p>
      </div>
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
            Edit Address
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AddressCard