import { featureProductsNavItems } from '@/constant'
import { cn } from '@/lib/utils'
import { MoveRight } from 'lucide-react'
import React from 'react'

const FeatureProductNavBar = () => {
    const activeItem = 'All Product'
  return (
    <div className="flex items-center justify-between gap-2 w-full py-2">
      <p className="font-semibold text-xl">Best Deal</p>
      <div className='flex-center gap-2'>
      {featureProductsNavItems.map((item) => {
        const active = item === activeItem;
        return (
          <div
            key={item}
            className={cn(
              "text-sm font-semibold p-2 cursor-pointer",
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
    </div>
  );
}

export default FeatureProductNavBar