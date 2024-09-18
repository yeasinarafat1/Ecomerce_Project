"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ArrowRight } from "lucide-react";
import CustomFormFeield from "@/components/Shared/CustomFormFeield";

import { useSignIn } from "@/Hooks/AuthHooks";
import { useToast } from "@/components/ui/use-toast";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const LoginForm = () => {
  const session = useSession();
  const { loading: signInLoading, signIn, logInStatus } = useSignIn();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { email, password } = values;
    signIn({ email, password });
    if (!logInStatus) return toast({ description: "Login failed" });
    toast({
      title: "Success",
      description: "Logout successfully",
    });
    revalidatePath("/");
    router.push("/");
  }
  useEffect(() => {
    if (session.status === "authenticated") router.replace("/");
  }, [session]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <CustomFormFeield
          control={form.control}
          type="text"
          label="Email"
          name="email"
          placeholder="example@gmail.com"
        />
        <CustomFormFeield
          control={form.control}
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
        />
        <Button
          type="submit"
          className="bg-secondary hover:bg-orange-500 w-full flex-center gap-2"
        >
          {false ? "submiting..." : "Submit"} <ArrowRight className="text-sm" />
        </Button>
      </form>
    </Form>
  );
};
export default LoginForm;
