import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MiddleBar = () => {
    return (
        <div className="hidden bg-primary w-full h-[75px] md:flex items-center justify-around">
            <Link href={'/'} className="flex items-center justify-center gap-2">
                <Image
                    src="asset/icons/logo.svg"
                    alt="Logo"
                    height={48}
                    width={48}
                />
                <p className="text-white font-bold text-2xl">CLICON</p>
            </Link>
            <div className="relative">
                <Input
                    placeholder="Search Anything"
                    className="h-[48px] w-96"
                />
                <Image
                    src="asset/icons/MagnifyingGlass.svg"
                    alt="search icon"
                    height={25}
                    width={25}
                    className="absolute right-2 top-3"
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
    );
};

export default MiddleBar;
