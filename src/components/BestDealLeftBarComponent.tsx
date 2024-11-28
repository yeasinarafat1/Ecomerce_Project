import Image from 'next/image';
import React from 'react'
import StarRating from './Shared/StarRatingShow';
import { BestDealBigOne } from '@/constant';
import { Button } from './ui/button';

const BestDealLeftBarComponent = () => {
  return (
    <div className="flex items-center justify-between flex-col gap-3 w-full md:w-[345px] h-[565px]  border-[#E4E7E9] border-[1px]">
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
      <div className="flex w-[300px] md:w-[280px] items-center gap-2">
        <div className="flex items-center justify-center size-[48px] bg-[#FFE7D6]">
          <Image
            className="invert"
            src={"asset/icons/Heart.svg"}
            height={24}
            width={24}
            alt="heart"
          />
        </div>
        <Button className="bg-secondary h-[48px] w-[200px] md:w-[173px]">
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
  );
}

export default BestDealLeftBarComponent