"use client";
import { Button } from "@/components/ui/button";
import { AccountSideBarItem } from "@/constant";
import { useSignOutHook } from "@/Hooks/AuthHooks";
import { cn } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

const SideBar = () => {
  const pathname = usePathname();
  const { loading: signOutLoading, signout } = useSignOutHook();
  return (
    <div className="hidden md:flex flex-col gap-2 w-72 h-[440px] border border-gray-100 py-4 rounded-md account-siderbar-shadow">
      {AccountSideBarItem.map((item, index) => {
        return (
          <Fragment key={index}>
            <Link
              href={item.link}
              className={cn(
                "w-full h-10 flex items-center gap-3 px-3  text-sm rounded-sm",
                pathname === item.link
                  ? "bg-secondary text-white font-semibold"
                  : "bg-transparent text-gray-600"
              )}
            >
              <item.icon className="text-lg size-5" />
              <p>{item.name}</p>
            </Link>
          </Fragment>
        );
      })}

      <Button
        onClick={signout}
        className="w-full h-10 flex items-center justify-start gap-3 px-3  text-sm rounded-sm bg-transparent hover:bg-transparent  text-gray-600"
      >
        <LogOutIcon /> {signOutLoading ? "Loging Out..." : "Logout"}
      </Button>
    </div>
  );
};

export default SideBar;
