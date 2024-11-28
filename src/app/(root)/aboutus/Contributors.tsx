import { contributorlist } from "@/constant";
import Image from "next/image";
import React from "react";

const Contributors = () => {
  return (
    <>
      <h2 className="text-3xl text-gray-900 font-semibold text-center">
        Our core team member
      </h2>
      <div className="w-full px-2 md:container flex items-center gap-3 flex-wrap">
        {contributorlist.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-center h-[112px] w-full sm:w-[312px] rounded-md border border-gray-100"
            >
              {/* This is a wraper div to make them appear in same line */}
              <div className="flex items-center w-56 gap-3 h-full">
                <Image src={item.img} height={70} width={70} alt={item.name} />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-base text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.title}</p>
                </div>
                {/* This is the end of the wraper div */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contributors;
