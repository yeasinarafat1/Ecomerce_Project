"use client";
import { SessionProvider } from "next-auth/react";
const SesionWraper = ({ children }: any) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SesionWraper;
