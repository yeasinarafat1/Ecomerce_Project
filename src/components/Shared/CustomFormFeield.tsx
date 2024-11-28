import React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Control } from "react-hook-form";
import { Input } from "../ui/input";
import { text } from "stream/consumers";
interface props {
  control: Control<any>;
  label: string;
  type?: "text" | "number" | "password" | "phoneNumber";
  name: string;
  placeholder: string;
  className?: string;
}
const CustomFormFeield = ({
  control,
  label,
  type = "text",
  name,
  placeholder,
  className,
}: props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-gray-900 font-medium">{label}</FormLabel>
          <FormControl>
            <RenderFormFeield
              field={field}
              placeholder={placeholder}
              className={className}
              type={type}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormFeield;
const RenderFormFeield = ({
  field,
  type,
  placeholder,
  className,
}: {
  field: any;
  type?: "text" | "number" | "password" | "phoneNumber";

  placeholder: string;
  className?: string;
}) => {
  switch (type) {
    case "text":
      return (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`h-11 ${className} text-base`}
        />
      );
    case "number":
      return (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`h-11 ${className}`}
        />
      );

    case "phoneNumber":
      return (
        <PhoneInput
          placeholder={placeholder}
          value={field.value}
          onChange={field.onChange}
          defaultCountry="BD"
          international
          withCountryCallingCode
          className="w-full h-11 border border-gray-100 rounded-md"
        />
      );
    case "password":
      return (
        <Input
          type={type}
          placeholder={placeholder}
          {...field}
          className={`h-11 ${className}`}
        />
      );

    default:
      break;
  }
};
