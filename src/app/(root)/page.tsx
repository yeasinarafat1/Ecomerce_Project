import Hero from "@/components/Page/Home/Hero";
import SubscribeToNewsLater from "@/components/Shared/SubscribeToNewsLater";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Hero />
            <SubscribeToNewsLater />
        </>
    );
}
