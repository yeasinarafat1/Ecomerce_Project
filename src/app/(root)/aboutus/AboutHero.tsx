import { Button } from "@/components/ui/button";
import { aboutUsFeatures } from "@/constant";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full flex-center flex-col md:flex-row gap-4">
      <div className="flex flex-col gap-4 w-[360px] lg:w-[536px]">
        <Button className="bg-[#2DA5F3] text-sm px-4 py-2 w-32">
          who we are
        </Button>
        <h1 className="text-[#191C1F] font-semibold text-4xl">
          Kinbo - largest electronics retail shop in the world.
        </h1>
        <p className="text-base text-[#475156] ">
          Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
          vestibulum risus, ac tincidunt diam lectus id magna. Praesent maximus
          lobortis neque sit amet rhoncus. Nullam tempus lectus a dui aliquet,
          non ultricies nibh elementum. Nulla ac nulla dolor.{" "}
        </p>
        <div className="flex flex-col gap-2">
          {aboutUsFeatures.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                src={"/asset/icons/Checks.svg"}
                alt="check"
                height={24}
                width={24}
              />
              <p className="text-[#191C1F]">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <Image
        className='-order-1 md:order-1 h-[280px] w-[360px] object-cover lg:h-[450px] lg:w-[550px]'
        src={"/asset/DemoPic/AboutUs.jpg"}
        alt="about us"
        height={450}
        width={550}
      />
    </div>
  );
};

export default AboutHero;
