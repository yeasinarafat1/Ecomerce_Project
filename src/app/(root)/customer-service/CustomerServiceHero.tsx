import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';

const CustomerServiceHero = () => {
  return (
    <div className='w-full h-[330px] flex-center  lg:bg-[url("/asset/banner/customerServiceBanner.png")] bg-center'>
      <div className="flex flex-col gap-3 h-full w-full pl-3 md:pl-0 md:w-2/3 justify-center">
        <Button className="bg-Warning-400 text-sm text-gray-900 w-[130px]">
          Help center
        </Button>
        <h3 className="text-gray-900 text-3xl font-semibold">
          How we can help you!
        </h3>
        <div className="flex items-center justify-around px-3 w-full md:w-[536px] h-16 border border-gray-100 rounded-md bg-white">
          <div className="flex-center h-full w-7">
            <FaMagnifyingGlass className="text-secondary text-lg" />
          </div>
          <Input
            placeholder="Enter your question or keyword"
            className="!ring-0 !ring-offset-0 border-0 text-gray-500 text-xs md:text-base"
          />
          <Button className="bg-secondary hover:bg-orange-500 rounded-md w-20 md:w-[108px] h-12">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CustomerServiceHero