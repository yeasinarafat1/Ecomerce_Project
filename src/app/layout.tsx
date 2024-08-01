import type { Metadata } from "next";
import { Inter ,Public_Sans} from "next/font/google";
import "./globals.css";

const inter = Public_Sans({ subsets: ["latin"] });

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
        <html lang="en">
            <head>
                <link
                    rel="shortcut icon"
                    href="asset/icons/Logo.svg"
                    type="image/x-icon"
                />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
