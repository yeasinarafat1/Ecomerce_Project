"use client";
import Slider from "./Slider";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import HeroLeftFirstCard from "./HeroLeftFirstCard";
import HeroLeftSeceondCard from "./HeroLeftSeceondCard";
// import { Public_Sans } from "next/font/google";

// const sans = Public_Sans({ subsets: ["latin"] });
export default function Hero() {
  return (
    <>
      <div className="my-5 md:my-7 px-1 w-full md:container mx-auto grid grid-cols-1 md:grid-cols-10 gap-4 -z-0">
        {/* Slider part */}
        <div className="border  md:col-span-6 p-11 md:p-12 lg:p-14 bg-[#F2F4F5] rounded-[6px]">
          {/* Slider is here */}
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {/* slide 1 */}
            <SwiperSlide>
              <Slider
                key={1}
                title="THE BEST PLACE TO PLAY"
                description="Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD."
                heading="Xbox Consoles"
                discount={299}
                image="https://i.ibb.co/fGYGypw/plastation.png"
              />
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
              <Slider
                key={2}
                title="I-PHONE 14 PRO MAX"
                heading="Iphone 14 pro max"
                description="Buy now iphone 14 pro max phone with 20% discount. Click buy now button."
                discount={799}
                image="https://i.ibb.co/HrXrFMM/iphone-14.png"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* right part */}
        <div className=" md:col-span-4 space-y-4 ">
          {/* right-down part */}
          <HeroLeftFirstCard />
          <HeroLeftSeceondCard />
        </div>
      </div>
    </>
  );
}
