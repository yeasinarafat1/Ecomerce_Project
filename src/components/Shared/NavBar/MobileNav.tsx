import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react'

const MobileMiddleNav = () => {
  return (
    <div className="md:hidden flex items-center justify-between w-full h-[65px] bg-primary">
      <div className="flex items-center justify-center gap-2">
        <Image
          className="size-[25px]"
          src="asset/icons/logo.svg"
          alt="Logo"
          height={40}
          width={40}
        />
        <p className="text-white font-bold text-base">CLICON</p>
      </div>
      <div className="relative">
        <Input placeholder="Search Anything" className="h-[40px] w-48" />
        <Image
          src="asset/icons/MagnifyingGlass.svg"
          alt="search icon"
          height={20}
          width={20}
          className="absolute right-1 top-2"
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <Image
          src={"asset/icons/ShopingCart.svg"}
          alt="shoping cart"
          height={23}
          width={23}
        />
        <Image
          src={"asset/icons/Heart.svg"}
          alt="Heart icon"
          height={23}
          width={23}
        />
        <Image
          src={"asset/icons/User.svg"}
          alt="User icon"
          height={23}
          width={23}
        />
      </div>
    </div>
  );
}

export default MobileMiddleNav