import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Cross, X } from "lucide-react";
import Image from "next/image";
import OrangeButton from "./Shared/OrangeButton";
import Link from "next/link";

const ProoductCartPopOver = () => {
    const cartItemNumber = 2;
  return (
    <Popover>
      <PopoverTrigger className="relative">
        <div className="absolute right-0 size-4 text-xs bg-white text-primary rounded-full">
          {cartItemNumber}
        </div>
        <Image
          src={"asset/icons/ShopingCart.svg"}
          alt="shoping cart"
          height={32}
          width={32}
        />
      </PopoverTrigger>
      <PopoverContent className="w-[375px] h-[450px] border border-[#E4E7E9]">
        <h3 className="text-[#191C1F]">
          Shoping Cart <span className="text-gray-500">({cartItemNumber})</span>
        </h3>
        <hr className="w-full bg-gray-400 mt-3" />
        <CartProductCard
          name="Canon EOS 1500D DSLR Camera Body+ 18-55 mm"
          img="/asset/DemoPic/ControlerDemoPic.png"
          price={400}
        />
        <CartProductCard
          name="Canon EOS 1500D DSLR Camera Body+ 18-55 mm"
          img="/asset/DemoPic/ControlerDemoPic.png"
          price={400}
        />
        <CartProductCard
          name="Canon EOS 1500D DSLR Camera Body+ 18-55 mm"
          img="/asset/DemoPic/ControlerDemoPic.png"
          price={400}
        />
        <hr className="w-full bg-gray-400 mt-3" />
        <div className="flex justify-between items-center w-full">
          <p className="text-gray-700">Sub total</p>
          <p>${540} USD</p>
        </div>
        <OrangeButton className="w-full mt-2 hover:bg-transparent border-[2px] hover:border-secondary hover:text-secondary">
          Checkout
        </OrangeButton>
        <Link href={"/shopingcart"}>
          <OrangeButton className="w-full mt-2 bg-transparent border-[2px] border-secondary text-secondary hover:text-white">
            Veiw All
          </OrangeButton>
        </Link>
      </PopoverContent>
    </Popover>
  );

};

export default ProoductCartPopOver;
const CartProductCard = ({img,name,price}:{
    img:string,
    name:string,
    price:number
}) => { 
    return (
      <div className="w-full flex items-center justify-between mt-2 gap-2 ">
        <Image
          className="border-gray-100 border-[1px]"
          src={img}
          alt={name}
          height={80}
          width={80}
        />
        <div className="flex flex-col items-center flex-1 gap-2">
          <p className="text-[#191C1F] text-sm">{name}</p>
          <div className="flex gap-2 w-full">
            <p className="text-sm text-[#5F6C72]">1 x</p>
            <p className="text-sm text-[#2DA5F3]">${price}</p>
          </div>
        </div>
        <div>
          <X className="text-[#929FA5]" />
        </div>
      </div>
    );
 }
