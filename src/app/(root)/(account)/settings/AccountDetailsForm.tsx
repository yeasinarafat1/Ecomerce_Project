"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomFormFeield from "@/components/Shared/CustomFormFeield";
import Image from "next/image";
import { BsCameraFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { URL } from "url";
import { Blob } from "buffer";

const formSchema = z.object({
  fullname: z.string().min(5, {
    message: "Username must be at least 4 characters.",
  }),
  email: z.string().min(6, {
    message: "email must be at least 6 characters.",
  }),
  secenderyemail: z.string().min(6, {
    message: "Secendery email must be at least 6 characters.",
  }),
  phonenumber: z.string().min(10, {
    message: "Phone must be at least 10 characters.",
  }),
  country: z.string().min(5, {
    message: "Country must be at least 10 characters.",
  }),
  states: z.string().min(4, {
    message: "States must be at least 10 characters.",
  }),
  zipcode: z.string().min(4, {
    message: "Zip code must be at least 10 characters.",
  }),
});
const AccountDetailsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      secenderyemail: "",
      phonenumber: "",
      country: "",
      states: "",
      zipcode: "",
    },
  });
  const [profilePic, setProfilePic] = useState<string>(
    "/asset/DemoPic/profile.jpg"
  );
  const [profilePicUrl, setprofilePicUrl] = useState(
    "/asset/DemoPic/profile.jpg"
  );
  const profileInputRef = useRef<HTMLInputElement>(null);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="py-5 w-full md:container flex flex-col md:flex-row items-center gap-4"
      >
        <div className="relative size-[180px] rounded-full overflow-hidden cursor-pointer">
          <Input
            ref={profileInputRef}
            onChange={(e) => {
              setProfilePic(e.target.value);
            }}
            type="file"
            className="hidden"
            accept="image/*"
          />
          <div
            onClick={() => profileInputRef.current?.click()}
            className="flex-center absolute z-10  size-full  bg-black opacity-0 hover:opacity-50"
          >
            <BsCameraFill className="text-white size-10" />
          </div>
          <Image
            src={profilePicUrl}
            height={180}
            width={180}
            alt="profile"
            className="object-cover img-center"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 px-2">
          <div className="w-full flex flex-col md:flex-row gap-2">
            <CustomFormFeield
              control={form.control}
              type="text"
              label="Full Name"
              name="fullname"
              placeholder="Full Name"
            />
            <CustomFormFeield
              control={form.control}
              type="text"
              label="Email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-2">
            {/*TODO: Check secendery spell and fix it */}
            <CustomFormFeield
              control={form.control}
              type="text"
              label="Secendery Email"
              name="secenderyemail"
              placeholder="Secendery Email"
            />
            <CustomFormFeield
              control={form.control}
              type="phoneNumber"
              label="Phone Number"
              name="phonenumber"
              placeholder="+8801*******48"
            />
          </div>
          <div className="w-full flex flex-col md:flex gap-2">
            <CustomFormFeield
              control={form.control}
              type="text"
              label="Country Or Regeion"
              name="country"
              placeholder="Select Country"
            />
            <div className="w-full flex items-center gap-2">
              <CustomFormFeield
                control={form.control}
                type="text"
                label="States"
                name="states"
                placeholder="States"
              />
              <CustomFormFeield
                control={form.control}
                type="text"
                label="Zip code"
                name="zipcode"
                placeholder="Zip code"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="bg-secondary hover:bg-orange-500 px-5 py-2 flex-center gap-2"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default AccountDetailsForm;
