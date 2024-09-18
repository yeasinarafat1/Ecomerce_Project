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

const formSchema = z.object({
  orderid: z.string().min(2, {
    message: "OderId must be at least 2 characters.",
  }),
  Email: z.string().min(6, {
    message: "Email must be at least 6 characters.",
  }),
});

const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orderid: "",
      Email: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="container flex flex-col gap-2 min-h-[70vh] mt-6 ">
      <h2 className="text-gray-900 text-3xl font-semibold">Track Order</h2>
      <p className="text-gray-600 max-w-[760px]">
        To track your order please enter your order ID in the input field below
        and press the “Track Order” button. this was given to you on your
        receipt and in the confirmation email you should have received.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex items-center gap-2 flex-col md:flex-row w-full max-w-[872px]">
            <CustomFormFeield
              control={form.control}
              type="text"
              label="Oder ID"
              name="oderid"
              placeholder="Order Id"
              className="w-full md:w-[370px] lg:w-[424px] h-11"
            />
            <CustomFormFeield
              control={form.control}
              type="text"
              label="Email"
              name="Email"
              placeholder="Email"
              className=" w-full md:w-[370px] lg:w-[424px] h-11"
            />
          </div>
          <Button
            type="submit"
            className="bg-secondary hover:bg-orange-500 w-[217px] h-14 flex-center gap-2"
          >
            Track Order <ArrowRight className="text-sm" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default page;
