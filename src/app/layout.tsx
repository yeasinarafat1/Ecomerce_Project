import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

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
        <ClerkProvider>
          {children}
          <Toaster />
        </ClerkProvider>
      </body>
    </html>
  );
}
