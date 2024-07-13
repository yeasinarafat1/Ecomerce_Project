import NavBar from "@/components/Shared/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <NavBar />
    {children}
    </>
  );
}
