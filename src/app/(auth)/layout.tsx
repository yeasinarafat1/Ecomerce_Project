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
  return (
    <div className="overflow-x-hidden">
      <div className="w-full flex-center min-h-[100vh]">{children}</div>
    </div>
  );
}
