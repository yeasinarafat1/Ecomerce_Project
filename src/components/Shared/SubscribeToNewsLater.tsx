import React from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ArrowBigRight, MoveRight } from 'lucide-react';
import Image from 'next/image';

const SubscribeToNewsLater = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center  w-full h-[450px] bg-primary">
      <p className="text-white text-3xl font-semibold">
        Subscribe to our News Later
      </p>
      <p className="text-gray-300 leading-6 max-w-[536px] text-center">
        Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero
        et cursus. Donec non quam urna. Quisque vitae porta ipsum.
      </p>
      <div className="flex gap-2 items-center bg-white w-[624px] h-[65px] rounded-md">
        <Input
          placeholder="Enter your email"
          className="flex-1 focus-visible:ring-0  focus-visible:outline-none focus-visible:border-0 focus:outline-none focus:border-0 focus:ring-0 outline-none border-0 bg-transparent"
        />
        <div className="flex items-center justify-center p-3">
          <Button className="bg-secondary h-11  hover:bg-orange-500 ">
            Subscribe <MoveRight />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Image className='opacity-60' src={'asset/icons/Google_Logo.svg'} alt='google Logo' height={72} width={72} />
        <Image className='opacity-60' src={'asset/icons/Amazon_Logo.svg'} alt='google Logo' height={72} width={72} />
        <Image className='opacity-60' src={'asset/icons/Phillips_Logo.svg'} alt='google Logo' height={72} width={72} />
        <Image className='opacity-60' src={'asset/icons/Toshiba_Logo.svg'} alt='google Logo' height={72} width={72} />
        <Image className='opacity-60' src={'asset/icons/Samsung_Logo.svg'} alt='google Logo' height={72} width={72} />
      </div>
    </div>
  );
}

export default SubscribeToNewsLater