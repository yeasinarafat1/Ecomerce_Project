import BestDealSection from "@/components/BestDealSection";
import StarRating from "@/components/Shared/StarRatingShow";
import SubscribeToNewsLater from "@/components/Shared/SubscribeToNewsLater";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <BestDealSection/>
      </div>
      <SubscribeToNewsLater />
    </>
  );
}
