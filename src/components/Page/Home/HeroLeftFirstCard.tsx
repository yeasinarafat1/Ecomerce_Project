import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroLeftFirstCard() {
  return (
    <Card className="bg-gray-900 text-white overflow-hidden relative w-full max-w-2xl">
      <div className="flex  items-center justify-between p-6 md:p-8">
        <div className="z-10 space-y-4 md:space-y-6">
          <div className="space-y-2">
            <div className="bg-Warning-400 text-gray-900 text-sm font-medium px-3 py-1 rounded-full w-fit">
              29% OFF
            </div>
            <p className="text-Warning-500 font-medium">SUMMER SALES</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              New Google
              <br />
              Pixel 6 Pro
            </h2>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white border-0 flex items-center gap-2">
            SHOP NOW
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="relative w-48 md:w-64 mt-6 md:mt-0">
          <Image
            src="/asset/DemoPic/HeroPixelPhonePic.png"
            alt="Google Pixel 6 Pro"
            width={300}
            height={400}
            className="object-contain w-[200px] md:w-[300px] h-[250px] md:h-[300px]"
            priority
          />
        </div>
      </div>
    </Card>
  );
}
