"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import CustomFormFeield from "@/components/Shared/CustomFormFeield";
import { createUser } from "@/lib/action/createUser";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirmpassword: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { fullName, email, password, confirmpassword } = values;
    if (password === confirmpassword) {
      try {
        const user = await createUser({ fullName, email, password });
        if (user) {
          alert("sigin in success");
          console.log(user);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <CustomFormFeield
          control={form.control}
          type="text"
          label="Full Name"
          name="fullName"
          placeholder="Full Name"
        />
        <CustomFormFeield
          control={form.control}
          type="text"
          label="Email"
          name="email"
          placeholder="Email"
        />
        <CustomFormFeield
          control={form.control}
          type="password"
          label="Password"
          name="password"
          placeholder="Password"
        />
        <CustomFormFeield
          control={form.control}
          type="password"
          label="Confirm Password"
          name="confirmpassword"
          placeholder=" Confirm Password"
        />
        <Button
          type="submit"
          className="bg-secondary hover:bg-orange-500 w-full flex-center gap-2"
        >
          Submit <ArrowRight className="text-sm" />
        </Button>
      </form>
    </Form>
  );
};
export default SignUpForm;
