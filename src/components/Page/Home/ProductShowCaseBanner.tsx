import OrangeButton from '@/components/Shared/OrangeButton'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ProductShowCaseBanner = () => {
  return (
    <div className="md:container mx-auto mt-5  h-[428px]">
      <div className="bg-[#FFE7D6] w-full h-full rounded-md flex justify-around items-center gap-5">
         <div className="flex  justify-center flex-col gap-3 w-[280px]">
        <Button
          className={`
            
              bg-[#2DA5F3] text-white w-[123px] `}
        >
          Introducing
        </Button>
        <h3
          className={`
            "text-[#191C1F]"  text-xl md:text-3xl lg:text-5xl w-[425px]`}
        >
          Macbook Pro
        </h3>
        <p
          className={`
             "text-[#475156]" 
           text-2xl md:text-base lg:text-lg w-[425px]`}
        >
          Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
        </p>
        <OrangeButton className="w-[145px] md:w-[156px]">Shop now</OrangeButton>
      </div>
      <Image className=' ' src={'/asset/DemoPic/mac_book.png'} height={424} width={536} alt="name" />
    </div>
      </div>
    
  );
}

export default ProductShowCaseBanner