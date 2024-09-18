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
import CustomFormFeield from "@/components/Shared/CustomFormFeield";
import { DatePicker } from "@/components/ui/datepicker";

const formSchema = z.object({
  cardname: z.string().min(2, {
    message: "Card Name must be at least 2 characters.",
  }),
  cardNumber: z.number().min(2, {
    message: "Card Name must be at least 2 characters.",
  }),
  expireDate: z.number(),
  cvs: z.number().lt(3).gt(3, {
    message: "Cvs mustbe 3 number",
  }),
});

const AddCardForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardname: "",
      cardNumber: 0,
      cvs: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomFormFeield
          control={form.control}
          label="Name of the card"
          name="cardname"
          placeholder="Card Name"
        />
        <CustomFormFeield
          control={form.control}
          label="Name of the card"
          name="cardname"
          placeholder="Card Name"
        />
        <div className="w-full flex flex-col md:flex-row gap-2">
          <CustomFormFeield
            type="number"
            control={form.control}
            label="Expire Date"
            name="expireDate"
            placeholder="example 2027"
          />
          <CustomFormFeield
            type="number"
            control={form.control}
            label="Expire Date"
            name="expireDate"
            placeholder="example 2027"
          />
        </div>

        <Button
          type="submit"
          className="bg-secondary rounded-md px-5 hover:bg-orange-400"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default AddCardForm;
