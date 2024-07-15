import { BestDealBigOne, BestDeals } from '@/constant';
// **  This are sample constant create for this project
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import StarRating from '../../Shared/StarRatingShow';
import { Button } from '../../ui/button';
import ProductCard from '../../Shared/ProductCard';


const BestDealSection = () => {
  return (
    <section className="container mx-auto mt-4 ">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 items-center justify-between">
          <p className="font-semibold text-xl">Best Deals</p>
          <p>Deals ends in </p>
          <div className="bg-[#F3DE6D] text-xl p-2 rounded-md">
            16d 10h 30m 20s
          </div>
        </div>
        <div className="text-[#2DA5F3] flex gap-2">
          <p >Browse All Product</p> <MoveRight />
        </div>
      </div>
      <div className="w-full flex gap-2 flex-col md:flex-row mt-3  ">
        <div className="flex items-center justify-between flex-col gap-3 w-[345px] h-[565px]  border-[#E4E7E9] border-[1px]">
          <Image
            src={BestDealBigOne.image}
            alt={BestDealBigOne.name}
            height={268}
            width={280}
          />
          <div className="flex gap-2 items-center w-[280px] ">
            <StarRating rating={BestDealBigOne.star} />
            <p className="text-xs">({BestDealBigOne.totalRating})</p>
          </div>
          <p className="w-[280px]">{BestDealBigOne.name}</p>
          <div className="w-[280px] flex items-center gap-2">
            <p className="line-through">${BestDealBigOne.oldPrice}</p>
            <p className="text-xl text-primary">${BestDealBigOne.price}</p>
          </div>
          <div className="flex w-[280px] items-center gap-2">
            <div className="flex items-center justify-center size-[48px] bg-[#FFE7D6]">
              <Image
                className="invert"
                src={"asset/icons/Heart.svg"}
                height={24}
                width={24}
                alt="heart"
              />
            </div>
            <Button className="bg-secondary h-[48px] w-[173px]">
              <Image
                className=""
                src={"asset/icons/ShopingCart.svg"}
                height={24}
                width={24}
                alt="heart"
              />
              Add to cart
            </Button>
            <div className="flex items-center justify-center size-[48px] bg-[#FFE7D6]">
              <Image
                className=""
                src={"asset/icons/Eye.svg"}
                height={24}
                width={24}
                alt="heart"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-3">
          {BestDeals.map((item, index) => {
            return (
              <ProductCard
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BestDealSection