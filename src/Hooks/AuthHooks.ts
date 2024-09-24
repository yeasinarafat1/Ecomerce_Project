import { signOut } from "@/appwrite/auth";
import { useState } from "react";

export const useSignOutHook = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const signout = async () => {
    setloading(true);
    await signOut();
    setloading(false);
  };
  return { loading, signout };
};
