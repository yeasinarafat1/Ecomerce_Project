"use client";
import Footer from "@/components/Shared/Footer";
import NavBar from "@/components/Shared/NavBar/NavBar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LoginProviderCard from "./LoginProviderCard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div
        className={cn(
          "w-full flex-center",
          pathname === "sign-in" ? "h-[50vh] " : "h-[110vh]"
        )}
      >
        <div className="w-[424px] min-h-[504px] border border-gray-100  flex flex-col gap-4">
          <div className="flex item-center justify-between border-b border-gray-100">
            <Link
              href={"/sign-in"}
              className={cn(
                "w-1/2 flex-center h-14 text-xl font-semibold",
                pathname === "/sign-in"
                  ? "text-gray-900 active-auth-shadow"
                  : "text-gray-500"
              )}
            >
              Sign in
            </Link>
            <Link
              href={"/sign-up"}
              className={cn(
                "w-1/2 flex-center h-14 text-xl font-semibold",
                pathname === "/sign-up"
                  ? "text-gray-900 active-auth-shadow"
                  : "text-gray-500"
              )}
            >
              {" "}
              Sign up
            </Link>
          </div>
          <div className="flex flex-col gap-5 px-6 my-4">
            {children}

            <LoginProviderCard
              icon="/asset/icons/Google.png"
              text="Login with Google"
            />
            <LoginProviderCard
              icon="/asset/icons/Apple.svg"
              text="Login with Apple"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
