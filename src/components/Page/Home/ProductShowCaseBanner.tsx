import OrangeButton from '@/components/Shared/OrangeButton'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ProductShowCaseBanner = () => {
  return (
    <div className="md:container mx-auto mt-5 h-auto  md:h-[428px]">
      <div className="bg-[#FFE7D6] w-full h-full rounded-md flex flex-col md:flex-row justify-around items-center gap-5">
         <div className="flex  justify-center flex-col gap-3 pl-3 md:pl-0 w-full md:w-[280px]">
        <Button
          className={`
            
              bg-[#2DA5F3] text-white w-[123px] `}
        >
          Introducing
        </Button>
        <h3
          className={`
            text-[#191C1F] font-semibold  text-xl md:text-3xl lg:text-5xl w-full md:w-[425px]`}
        >
          Macbook Pro
        </h3>
        <p
          className={`
             
           text-xl  md:text-base lg:text-lg font-medium w-full md:w-[370px] lg:w-[425px]`}
        >
          Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
        </p>
        <OrangeButton className="w-[145px] md:w-[156px]">Shop now</OrangeButton>
      </div>
      <Image className=' -order-1 md:order-1 md:h-[300px] w-[400px] lg:h-[424px] lg:w-[536px]' src={'/asset/DemoPic/mac_book.png'} height={424} width={536} alt="name" />
    </div>
      </div>
    
  );
}

export default ProductShowCaseBanner