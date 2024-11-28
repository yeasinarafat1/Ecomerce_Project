"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormFeield from "@/components/Shared/CustomFormFeield";

const formSchema = z.object({
  currentpassword: z.string().min(6, {
    message: "Password must be at least 4 characters.",
  }),
  newpassword: z.string().min(6, {
    message: "New Password must be at least 4 characters.",
  }),
  confirmpassword: z.string().min(6, {
    message: "Confirm Password must be at least 4 characters.",
  }),
});

const ChangePasswordForm = () => {
     const form = useForm<z.infer<typeof formSchema>>({
       resolver: zodResolver(formSchema),
       defaultValues: {
        currentpassword:"",
        newpassword:"",
        confirmpassword:"",
       },
     });
     function onSubmit(values: z.infer<typeof formSchema>) {
       // Do something with the form values.
       // ✅ This will be type-safe and validated.
       console.log(values);
     }
  return (
    <div className="w-full flex flex-col gap-2 border border-gray-100 mb-5 rounded">
      <div className="text-gray-900 font-medium px-3 w-full h-[52px] border-b border-gray-100 flex items-center ">
        Change Password
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="py-3 w-full px-3 flex flex-col  gap-3"
        >
          <CustomFormFeield
            label="Current Password"
            control={form.control}
            placeholder="current Password"
            name="currentpassword"
          />
          <div className="flex flex-col md:flex-row w-full gap-2">
            <CustomFormFeield
              label="New Password"
              control={form.control}
              placeholder="New Password"
              name="newpassword"
            />
            <CustomFormFeield
              label="Confirm Password"
              control={form.control}
              placeholder="Confirm Password"
              name="confirmpassword"
            />
          </div>
          <Button
            type="submit"
            className="bg-secondary hover:bg-orange-500 w-36 px-5 py-2 flex-center gap-2"
          >
            Change Password
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ChangePasswordForm;
