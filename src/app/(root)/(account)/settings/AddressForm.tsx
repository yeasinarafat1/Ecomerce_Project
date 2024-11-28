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
import Image from "next/image";

const formSchema = z.object({
  fullname: z.string().min(5, {
    message: "Username must be at least 4 characters.",
  }),
  companyname: z.string().optional(),
  address: z.string().min(6, {
    message: "Address must be at least 6 characters.",
  }),
  country: z.string().min(5, {
    message: "Country must be at least 10 characters.",
  }),
  states: z.string().min(4, {
    message: "States must be at least 10 characters.",
  }),
  city: z.string().min(4, {
    message: "City must be at least 10 characters.",
  }),
  zipcode: z.string().min(4, {
    message: "Zip code must be at least 10 characters.",
  }),

  email: z.string().min(6, {
    message: "email must be at least 6 characters.",
  }),

  phonenumber: z.string().min(10, {
    message: "Phone Number must be at least 10 characters.",
  }),
});

interface props {
  type: "Billing Address" | "Shipping Address";
}
const AddressForm = ({ type }: props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      companyname: "",
      address: "",
      country: "",
      states: "",
      city: "",
      zipcode: "",
      email: "",
      phonenumber: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-full border border-gray-100 rounded">
      <div className="text-gray-900 font-medium px-3 w-full h-[52px] border-b border-gray-100 flex items-center ">
        {type}
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="py-4 w-full px-3 flex flex-col  gap-3"
        >
          <CustomFormFeield
            label="Full Name"
            control={form.control}
            placeholder="Full Name"
            name="fullname"
            type="text"
          />
          <CustomFormFeield
            label="Company Name (optional)"
            control={form.control}
            placeholder="Company Name"
            name="companyname"
            type="text"
          />
          <CustomFormFeield
            label="Address"
            control={form.control}
            placeholder="Road No. 13/x, House no. 1320/C, Flat No. 5D"
            name="address"
            type="text"
          />
          <CustomFormFeield
            label="Country"
            control={form.control}
            placeholder="Example Bangladeash"
            name="country"
            type="text"
          />
          <div className="w-full flex items-center gap-1">
            <CustomFormFeield
              label="City"
              control={form.control}
              placeholder="Example Dhaka"
              name="city"
              type="text"
            />
            <CustomFormFeield
              label="Zip Code"
              control={form.control}
              placeholder="Zip Code"
              name="zipcode"
              type="text"
            />
          </div>
          <CustomFormFeield
            label="Email"
            control={form.control}
            placeholder="example@gmail.com"
            name="email"
            type="text"
          />
          <CustomFormFeield
            label="Phone Number"
            control={form.control}
            placeholder="+8801900000000"
            name="phonenumber"
            type="text"
          />
          <Button
            type="submit"
            className="bg-secondary hover:bg-orange-500 w-32 px-5 py-2 flex-center gap-2"
          >
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddressForm;
