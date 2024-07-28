import BestDealSection from "@/components/Page/Home/BestDealSection";
import Hero from "@/components/Page/Home/Hero"; 
import ShopFromCatagory from "@/components/Page/Home/ShopFromCatagory";
import TopDeals from "@/components/Page/Home/TopDeals";
import SubscribeToNewsLater from "@/components/Shared/SubscribeToNewsLater";


export default function Home() {
    return (
      <>
        <Hero />
        <BestDealSection />
        <ShopFromCatagory />
        <TopDeals />
        <SubscribeToNewsLater />
      </>
    );
}
