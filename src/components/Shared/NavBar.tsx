import Image from 'next/image';
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '../ui/input';


const NavBar = () => {
  return (
    <>
      <div className=" border-0 border-b-[1px] border-gray-400 bg-primary w-full h-[48px] flex items-center justify-around text-white">
        <p className=" text-[14px] ">Wellcome to cliron online service</p>
        <div className="flex items-center gap-2">
          <p>Follow us:</p>
          <a href="/">
            <Image
              src="/asset/icons/Twitter.svg"
              alt="Twitter"
              height={14}
              width={14}
            />
          </a>
          <a href="/">
            <Image
              src="/asset/icons/Facebook.svg"
              alt="Facebook"
              height={14}
              width={14}
            />
          </a>
          <a href="/">
            <Image
              src="/asset/icons/Instagram.svg"
              alt="Instagram"
              height={14}
              width={14}
            />
          </a>
          <a href="/">
            <Image
              src="/asset/icons/Pinterest.svg"
              alt="Pinterest"
              height={14}
              width={14}
            />
          </a>
          <a href="/">
            <Image
              src="/asset/icons/Reddit.svg"
              alt="Reddit"
              height={14}
              width={14}
            />
          </a>
          <a href="/">
            <Image
              src="/asset/icons/Youtube.svg"
              alt="Youtube"
              height={14}
              width={14}
            />
          </a>
          <div className="h-5 bg-gray-300 w-[1px]" />
          <Select>
            <SelectTrigger className="w-auto h-[20px] bg-transparent outline-none border-0 flex items-center justify-center active:outline-none">
              <SelectValue className="text-lg" placeholder="Eng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-auto h-[20px] bg-transparent outline-none border-0 flex items-center justify-center active:outline-none">
              <SelectValue className="text-[5px] w-2" placeholder="Usd" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="bg-primary w-full h-[75px] flex items-center justify-around">
        <div className="flex items-center justify-center gap-2">
          <Image src="asset/icons/logo.svg" alt="Logo" height={48} width={48} />
          <p className="text-white font-bold text-2xl">CLICON</p>
        </div>
        <div className="relative">
          <Input placeholder="Search Anything" className="h-[48px] w-96" />
          <Image
            src="asset/icons/MagnifyingGlass.svg"
            alt="search icon"
            height={25}
            width={25}
            className="absolute right-1 top-2"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image
            src={"asset/icons/ShopingCart.svg"}
            alt="shoping cart"
            height={32}
            width={32}
          />
          <Image
            src={"asset/icons/Heart.svg"}
            alt="Heart icon"
            height={32}
            width={32}
          />
          <Image
            src={"asset/icons/User.svg"}
            alt="User icon"
            height={32}
            width={32}
          />
        </div>
      </div>
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
    </>
  );
}

export default NavBar