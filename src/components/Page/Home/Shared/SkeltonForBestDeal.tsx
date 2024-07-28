// ** This component is a skeleton which can be used as best deal component or top deal
import ProductCard from "@/components/Shared/ProductCard";


import { MoveRight } from "lucide-react";

import React from "react";

interface BestDealSectionSkletonProps {
    leftBar :React.ReactNode;
    rightBarProducts:{
        image:string;
        name:string;
        price:Number;
        rating?:Number;
    }[]
}
const BestDealSectionSkleton = ({leftBar,rightBarProducts}: BestDealSectionSkletonProps) => {
  return (
    <section className="container md:mx-auto mt-4 ">
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-3 items-center justify-between">
          <p className="font-semibold text-xl">Best Deals</p>
          <p>Deals ends in </p>
          <div className="bg-[#F3DE6D] text-xl p-2 rounded-md">
            16d 10h 30m 20s
          </div>
        </div>
        <div className="text-[#2DA5F3] flex gap-2">
          <p>Browse All Product</p> <MoveRight />
        </div>
      </div>
      <div className="w-full flex gap-2 flex-col md:flex-row mt-3  ">
        {leftBar}
        <div className="w-full md:w-auto flex items-center flex-wrap gap-3">
          {/**  here rightBarProducts is a constant in future when  we will have real Product then we will update it  */ }
          {rightBarProducts.map((item, index) => {
            return (
              <ProductCard
                key={index}
                name={item.name}
                price={item.price}
                image={item.image}
                rating={item?.rating}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BestDealSectionSkleton;
