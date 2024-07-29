import BestDealSection from "@/components/Page/Home/BestDealSection";
import FeatureProducts from "@/components/Page/Home/FeatureProducts";
import Hero from "@/components/Page/Home/Hero"; 
import ShopFromCatagory from "@/components/Page/Home/ShopFromCatagory";

import SubscribeToNewsLater from "@/components/Shared/SubscribeToNewsLater";


export default function Home() {
    return (
      <>
        <Hero />
        <BestDealSection />
        <ShopFromCatagory />
        <FeatureProducts />
        <SubscribeToNewsLater />
      </>
    );
}
