import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { BsPlayFill } from "react-icons/bs";


const AboutUsBanner = () => {
  return (
    <div className="w-full h-[400px] aboutusBannerBg bg-cover bg-center flex-center hidden md:flex">
      <div className="flex flex-col gap-3 h-full w-2/3 justify-center  ">
        <h2 className="text-gray-900 text-3xl font-semibold w-[390px]">
          Your trusted and reliable retail shop
        </h2>
        <p className="text-lg text-gray-900 w-[423px]">
          Praesent sed semper metus. Nunc aliquet dolor mauris, et fringilla
          elit gravida eget. Nunc consequat auctor urna a placerat.
        </p>
        <Button className="rounded-full bg-secondary size-14 hover:bg-orange-600"><BsPlayFill className="text-2xl"/></Button>
      </div>
    </div>
  );
}

export default AboutUsBanner