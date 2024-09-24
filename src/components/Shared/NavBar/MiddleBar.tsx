"use client";
import ProoductCartPopOver from "@/components/ProoductCartPopOver";
import { Input } from "@/components/ui/input";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const MiddleBar = () => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="hidden bg-primary w-full h-[75px] md:flex items-center justify-around">
      <Link href={"/"} className="flex items-center justify-center gap-2">
        <Image src="/asset/icons/Logo.svg" alt="Logo" height={48} width={48} />
        <p className="text-white font-bold text-2xl">CLICON</p>
      </Link>
      <div className="relative">
        <Input placeholder="Search Anything" className="h-[48px] w-96" />
        <Image
          src="/asset/icons/MagnifyingGlass.svg"
          alt="search icon"
          height={25}
          width={25}
          className="absolute right-2 top-3"
        />
      </div>
      {isClient && (
        <SignedIn>
          <div className="flex items-center justify-center gap-2">
            <ProoductCartPopOver />
            <Link href={"/whishlist"}>
              {pathname === "/whishlist" ? (
                <AiFillHeart className="size-8 text-white" />
              ) : (
                <AiOutlineHeart className="size-8 text-white" />
              )}
            </Link>
            <Link href={"/dashboard"}>
              <Image
                src={"/asset/icons/User.svg"}
                alt="User icon"
                height={32}
                width={32}
              />
            </Link>
            <UserButton />
          </div>
        </SignedIn>
      )}
      <SignedOut>
        <div className="flex-center gap-2">
          <Link
            href={"/sign-in"}
            className="bg-secondary hover:bg-white border-2 border-transparent hover:border-secondary text-white hover:text-secondary px-5 py-2 rounded-md "
          >
            Sign In
          </Link>
          <Link
            href={"/sign-up"}
            className="bg-secondary hover:bg-white border-2 border-transparent hover:border-secondary text-white hover:text-secondary px-5 py-2 rounded-md "
          >
            Sign Up
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default MiddleBar;
