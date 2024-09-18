import React from "react";
import { Input } from "../ui/input";

import Image from "next/image";
import OrangeButton from "./OrangeButton";

const SubscribeToNewsLater = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center  w-full h-[450px] bg-primary mt-0 md:mt-1">
            <p className="text-white text-2xl md:text-3xl font-semibold">
                Subscribe to our News Later
            </p>
            <p className="text-gray-300 leading-6 max-w-[536px] text-center">
                Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
                libero et cursus. Donec non quam urna. Quisque vitae porta
                ipsum.
            </p>
            <div className="flex gap-2 items-center bg-white w-80 md:w-96 lg:w-[624px] h-[55px] md:h-[65px] rounded-md">
                {/* fixed some styling to remove the focus ring of the input */}
                <Input
                    placeholder="Enter your email"
                    className="flex-1 !ring-0 !ring-offset-0 border-0 bg-transparent lg:text-lg"
                />
                <div className="flex items-center justify-center p-3">
                    <OrangeButton>Subscribe</OrangeButton>
                </div>
            </div>
            <div className="flex items-center justify-center gap-6">
                <Image
                    className="opacity-60 size-[50px] md:size-[72px]"
                    src={"asset/icons/Google_Logo.svg"}
                    alt="google Logo"
                    height={72}
                    width={72}
                />
                <Image
                    className="opacity-60 size-[50px] md:size-[72px]"
                    src={"asset/icons/Amazon_Logo.svg"}
                    alt="google Logo"
                    height={72}
                    width={72}
                />
                <Image
                    className="opacity-60 size-[50px] md:size-[72px]"
                    src={"asset/icons/Phillips_Logo.svg"}
                    alt="google Logo"
                    height={72}
                    width={72}
                />
                <Image
                    className="opacity-60 size-[50px] md:size-[72px]"
                    src={"asset/icons/Toshiba_Logo.svg"}
                    alt="google Logo"
                    height={72}
                    width={72}
                />
                <Image
                    className="opacity-60 size-[50px] md:size-[72px]"
                    src={"asset/icons/Samsung_Logo.svg"}
                    alt="google Logo"
                    height={72}
                    width={72}
                />
            </div>
        </div>
    );
};

export default SubscribeToNewsLater;
