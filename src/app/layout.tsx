import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import SesionWraper from "@/components/SesionWraper";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";

const sans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cliron Best shoping site",
  description: "Best shoping site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <head>
        <link
          rel="shortcut icon"
          href="/asset/icons/Logo.svg"
          type="image/x-icon"
        />
      </head>
      <body>
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
