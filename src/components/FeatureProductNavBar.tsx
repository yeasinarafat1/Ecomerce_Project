"use client"
import { featureProductsNavItems } from '@/constant'
import { cn } from '@/lib/utils'
import { MoveRight } from 'lucide-react'
import React, { useState } from 'react'

const FeatureProductNavBar = () => {
    const [activeItem, setActiveItem] = useState('All Product')
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-2 w-full py-2">
      <p className="font-semibold text-base md:text-2xl">Feature Products</p>
      {/* Nav Items Start */}
      <div className='flex-center gap-2 flex-wrap'>
      {featureProductsNavItems.map((item) => {
        const active = item === activeItem;
        return (
          <div
            onClick={(e) => setActiveItem(item)}
            key={item}
            className={cn(
              "text-sm font-semibold p-2 cursor-pointer flex-wrap",
              active
                ? "text-[#191C1F] border-b-2 border-secondary"
                : "text-[#5F6C72]"
            )}
          >
            {item}
          </div>
        );
      })}
      <div className="text-secondary flex gap-2">
        <p>Browse All Product</p> <MoveRight />
      </div>
    </div>
    {/* Nav Items ended */}
    </div>
  );
}

export default FeatureProductNavBar