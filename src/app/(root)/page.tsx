import BestDealSection from "@/components/Page/Home/BestDealSection";
import FeatureProducts from "@/components/Page/Home/FeatureProducts";
import Hero from "@/components/Page/Home/Hero"; 
import ProductShowCaseBanner from "@/components/Page/Home/ProductShowCaseBanner";
import ShopFromCatagory from "@/components/Page/Home/ShopFromCatagory";
import ShowCaseProducts from "@/components/Page/Home/ShowCaseProducts";

import SubscribeToNewsLater from "@/components/Shared/SubscribeToNewsLater";


export default function Home() {
    return (
      <>
        <Hero />
        <BestDealSection />
        <ShopFromCatagory />
        <ShowCaseProducts />
        <ProductShowCaseBanner />
        <FeatureProducts />

        <SubscribeToNewsLater />
      </>
    );
}
