import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

const loading = () => {
  return (
    <div className="w-full md:container my-4 min-h-[70vh] ">
      
      <Skeleton className='container h-[60vh]'/>
      {/* <MobileWhishlists whishListItem={whishListConstant} /> */}
    </div>
  );
}

export default loading