import { toast } from "@/components/ui/use-toast";
import {
  loginUser,
  revalidateHome,
  signOutAction,
} from "@/lib/action/createUser";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useSignOut = () => {
  // ... other code ...
  const [logoutStatus, setlogoutStatus] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    if (logoutStatus) {
      toast({
        title: "Success",
        description: "Logout successfully",
      });
      router.push("/sign-in");
    }
  }, [logoutStatus, router, toast]);

  const signOut = async () => {
    setloading(true);
    try {
      const res = await signOutAction();
      if (res) {
        setlogoutStatus(true);
      }
    } catch (error) {
      console.log(error);
      seterror(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with Plz try again.",
      });
    } finally {
      setloading(false);
    }
    await revalidateHome();
  };

  return { loading, error, signOut };
};
export const useSignIn = () => {
  // ... other code ...
  const [logInStatus, setlogInStatus] = useState(false);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    if (logInStatus) {
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
      router.push("/dashboard"); // or wherever you want to redirect after login
    }
  }, [logInStatus]);

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setloading(true);
    try {
      const res = await loginUser({ email, password });
      if (res) {
        setlogInStatus(true);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with Plz try again.",
      });
    } finally {
      setloading(false);
    }
    if (!logInStatus) {
      return;
    }
  };
  return { loading, error, signIn, logInStatus };
};
