import { BestDeals } from '@/constant';
// **  This are sample constant create for this project

import React from 'react'

import BestDealLeftBarComponent from '@/components/BestDealLeftBarComponent';
import { MoveRight } from 'lucide-react';
import ProductCard from '@/components/Shared/ProductCard';


const BestDealSection = () => {
  return (
    <section className="w-full md:container mx-auto mt-5 ">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2 md:gap-3 items-center justify-between">
          
            <p className="font-semibold text-sm md:text-xl">Best Deal</p>
          
          
              <p className="text-sm  md:text-base">ends in </p>
              <div className="bg-[#F3DE6D] text-xs md:text-xl p-1 md:p-2 rounded-md">
                16d 10h 30m
              </div>
         
        </div>
        
          <div className="flex-center gap-2">
            <div className="text-[#2DA5F3] flex gap-1 md:gap-2 text-sm md:text-base">
              Browse All Product
              <MoveRight />
            </div>
          </div>
        
      </div>
      <div className="w-full flex gap-2 flex-col md:flex-row mt-3  ">
        <BestDealLeftBarComponent />
        <div className="w-full">
          
          <div className="w-full md:w-auto flex justify-center md:justify-start items-center flex-wrap gap-1 md:gap-3 ">
            {/**  here rightBarProducts is a constant in future when  we will have real Product then we will update it  */}
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
      </div>
    </section>
  );
}

export default BestDealSection
