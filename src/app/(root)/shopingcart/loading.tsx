import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const loading = () => {
  return (
    <div className="w-full md:container mx-auto my-6 flex flex-col  gap-6 md:flex-row">
      <div className="flex flex-col gap-2 border border-gray-200 rounded-md">
        <Skeleton className='w-12 h-6'/>
        <Skeleton className='w-full h-[500px]'/>
        {/* <CartTable CartItems={cartItemConstant} /> */}
        {/* <MobileCartItem CartItems={cartItemConstant} /> */}
      </div>
    </div>
  );
}

export default loading