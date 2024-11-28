import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroLeftSeceondCard() {
  return (
    <Card className="bg-gray-50 p-6 w-full max-w-2xl">
      <div className="flex items-center gap-6">
        <div className="w-32 h-32 relative flex-shrink-0">
          <Image
            src="/asset/DemoPic/mibudspro.png"
            alt="Xiaomi FlipBuds Pro"
            width={128}
            height={128}
            className="object-contain"
            priority
          />
        </div>
        <div className="space-y-3">
          <div className="space-y-0.5">
            <h2 className="text-xl font-medium text-gray-900">Xiaomi</h2>
            <p className="text-xl font-medium text-gray-900">FlipBuds Pro</p>
          </div>
          <p className="text-lg font-medium text-blue-500">$299 USD</p>
          <Button className="bg-[#F97316] hover:bg-[#EA580C] text-white border-0 px-4 h-9">
            SHOP NOW
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
